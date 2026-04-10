'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createSupabaseClient } from '@/shared/api/supabase.client';

const AuthContext = createContext<{ userEmail: string | null }>({
  userEmail: null,
});

export const useUserEmail = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const supabase = useMemo(() => createSupabaseClient(), []);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    console.log('AuthProvider useEffect запустился');

    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('getSession:', session?.user?.email ?? null);
      setUserEmail(session?.user?.email ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(
        'onAuthStateChange event:',
        event,
        session?.user?.email ?? null,
      );
      setUserEmail(session?.user?.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  return (
    <AuthContext.Provider value={{ userEmail }}>
      {children}
    </AuthContext.Provider>
  );
}
