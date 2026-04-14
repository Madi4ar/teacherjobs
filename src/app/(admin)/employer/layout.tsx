import { getUserRole } from "@/shared/api/get-user-role";
import { redirect } from "next/navigation";

export default async function EmployerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = await getUserRole();

  if (!role) redirect("/login");
  if (role !== "school") redirect("/");

  return <>{children}</>;
}
