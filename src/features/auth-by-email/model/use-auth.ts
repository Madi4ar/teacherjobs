import { createSupabaseClient } from "@/shared/api/supabase.client";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  type UserRole = "teacher" | "school";

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

  const waitForSignedIn = async (supabase: ReturnType<typeof getSupabase>) => {
    await new Promise<void>((resolve) => {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((event) => {
        if (event === "SIGNED_IN") {
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
    router.push("/");
    router.refresh();
  };

  const signUp = async (email: string, password: string, role: UserRole) => {
    const supabase = getSupabase();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { role },
      },
    });
    if (error) throw error;
    await waitForSignedIn(supabase);
    if (role === "teacher") router.push("/dashboard");
    if (role === "school") router.push("/employer");
    router.refresh();
  };

  const signOut = async () => {
    const supabase = getSupabase();
    const clearSupabaseStorage = () => {
      try {
        const clearByStorage = (storage: Storage) => {
          const keysToRemove: string[] = [];
          for (let index = 0; index < storage.length; index += 1) {
            const key = storage.key(index);
            if (key?.startsWith("sb-")) keysToRemove.push(key);
          }
          keysToRemove.forEach((key) => storage.removeItem(key));
        };

        clearByStorage(localStorage);
        clearByStorage(sessionStorage);
      } catch {
        // ignore storage access issues (private mode, disabled storage)
      }
    };

    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 2500);

      try {
        await fetch("/auth/signout", {
          method: "POST",
          credentials: "include",
          signal: controller.signal,
        });
        router.push("/auth");
      } finally {
        window.clearTimeout(timeout);
      }

      const { error } = await supabase.auth.signOut({ scope: "global" });
      if (error) {
        await supabase.auth.signOut({ scope: "local" });
      }
    } catch {
      await supabase.auth.signOut({ scope: "local" });
    } finally {
      clearSupabaseStorage();
      window.location.assign("/auth");
    }
  };

  return { signIn, signUp, signOut };
};
