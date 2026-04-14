import { AdminSidebar } from "@/widgets/admin-sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full bg-slate-50">
      <AdminSidebar />
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
