'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { createSupabaseClient } from '@/shared/api/supabase.client';

type UserRole = 'teacher' | 'school' | null;

const AuthContext = createContext<{
  userEmail: string | null;
  userRole: UserRole;
  authResolved: boolean;
}>({
  userEmail: null,
  userRole: null,
  authResolved: false,
});

export const useUserEmail = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [authResolved, setAuthResolved] = useState(false);

  const fetchUserRole = async (
    supabase: ReturnType<typeof createSupabaseClient>,
    userId: string,
    fallbackRole?: unknown,
  ) => {
    const normalizedFallbackRole =
      fallbackRole === 'teacher' || fallbackRole === 'school' ? fallbackRole : null;
    if (normalizedFallbackRole) {
      setUserRole(normalizedFallbackRole);
    }

    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', userId)
        .single();

      const role = profile?.role;
      const normalizedRole =
        role === 'teacher' || role === 'school' ? role : normalizedFallbackRole;
      setUserRole(normalizedRole);
    } catch {
      // Keep fallback role from auth metadata if profiles query fails.
      setUserRole(normalizedFallbackRole);
    }
  };

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      setAuthResolved(true);
      return;
    }

    const supabase = createSupabaseClient();
    const resolveTimeout = window.setTimeout(() => {
      setAuthResolved(true);
    }, 3000);

    supabase.auth
      .getSession()
      .then(async ({ data: { session } }) => {
        try {
          const user = session?.user ?? null;
          setUserEmail(user?.email ?? null);
          if (!user) {
            setUserRole(null);
            return;
          }
          await fetchUserRole(supabase, user.id, user.user_metadata?.role);
        } finally {
          setAuthResolved(true);
          window.clearTimeout(resolveTimeout);
        }
      })
      .catch(() => {
        setAuthResolved(true);
        window.clearTimeout(resolveTimeout);
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_, session) => {
      try {
        const user = session?.user ?? null;
        setUserEmail(user?.email ?? null);
        if (!user) {
          setUserRole(null);
          return;
        }
        await fetchUserRole(supabase, user.id, user.user_metadata?.role);
      } finally {
        setAuthResolved(true);
      }
    });

    return () => {
      window.clearTimeout(resolveTimeout);
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ userEmail, userRole, authResolved }}>
      {children}
    </AuthContext.Provider>
  );
}
