import { createSupabaseServerClient } from "@/shared/api/supabase.server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = await createSupabaseServerClient();

  // Server-side signout clears auth cookies reliably for SSR/middleware.
  await supabase.auth.signOut();

  return NextResponse.json({ success: true });
}
