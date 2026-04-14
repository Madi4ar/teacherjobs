import { getUserRole } from "@/shared/api/get-user-role";
import { redirect } from "next/navigation";

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = await getUserRole();

  if (!role) redirect("/login");
  if (role !== "teacher") redirect("/");

  return <>{children}</>;
}
