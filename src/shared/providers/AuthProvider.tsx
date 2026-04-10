'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { createSupabaseClient } from '@/shared/api/supabase.client';

const AuthContext = createContext<{ userEmail: string | null }>({
  userEmail: null,
});

export const useUserEmail = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return;
    }

    const supabase = createSupabaseClient();
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserEmail(session?.user?.email ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUserEmail(session?.user?.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ userEmail }}>
      {children}
    </AuthContext.Provider>
  );
}
