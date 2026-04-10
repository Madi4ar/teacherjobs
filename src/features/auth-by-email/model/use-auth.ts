import { createSupabaseClient } from '@/shared/api/supabase.client';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const router = useRouter();

  const getSupabase = () => {
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      throw new Error(
        'Supabase env variables are missing: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY',
      );
    }
    return createSupabaseClient();
  };

  const waitForSignedIn = async (supabase: ReturnType<typeof getSupabase>) => {
    await new Promise<void>((resolve) => {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((event) => {
        if (event === 'SIGNED_IN') {
          subscription.unsubscribe();
          resolve();
        }
      });
      setTimeout(resolve, 1000);
    });
  };

  const signIn = async (email: string, password: string) => {
    const supabase = getSupabase();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    await waitForSignedIn(supabase);
    router.push('/');
    router.refresh();
  };

  const signUp = async (email: string, password: string) => {
    const supabase = getSupabase();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    await waitForSignedIn(supabase);
    router.push('/');
    router.refresh();
  };

  const signOut = async () => {
    const supabase = getSupabase();
    await supabase.auth.signOut();
    router.push('/auth');
    router.refresh();
  };

  return { signIn, signUp, signOut };
};
