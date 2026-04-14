import Link from "next/link";

const commonLinks = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/admin/teacher/profile", label: "My Profile" },
];

const employerOnlyLinks = [{ href: "/employer", label: "Employer Home" }];

export default function AdminSidebar() {
  return (
    <aside className="w-64 border-r border-slate-200 bg-white p-4">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
        Control Panel
      </p>

      <nav className="space-y-2">
        {commonLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            {link.label}
          </Link>
        ))}

        <p className="pt-4 text-xs font-medium uppercase tracking-wide text-slate-400">
          Employer
        </p>

        {employerOnlyLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
