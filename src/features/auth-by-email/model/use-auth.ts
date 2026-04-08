import { createSupabaseClient } from "@/shared/api/supabase.client";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();

  const getSupabase = () => {
    if (
      !process.env.NEXT_PUBLIC_SUPABASE_URL ||
      !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ) {
      throw new Error(
        "Supabase env variables are missing: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY"
      );
    }
    return createSupabaseClient();
  };

  const signIn = async (email: string, password: string) => {
    const supabase = getSupabase();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    router.push("/dashboard");
    router.refresh();
  };

  const signUp = async (email: string, password: string) => {
    const supabase = getSupabase();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    router.push("/dashboard");
    router.refresh();
  };

  const signOut = async () => {
    const supabase = getSupabase();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return { signIn, signUp, signOut };
};
