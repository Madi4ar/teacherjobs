'use client';
import Container from '@/shared/container/ui/Container';
import { useUserEmail } from '@/shared/providers/AuthProvider';
import { useAuth } from '@/features/auth-by-email/model/use-auth';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/shared/icons/logo-ustaz-joly.svg';
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';

type NavItem = {
  href: string;
  label: string;
  icon?: ReactNode;
};

function AiSearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

const items: NavItem[] = [
  { href: '/vacancy', label: 'Вакансии' },
  { href: '/teacher', label: 'Учителя' },
  {
    href: '/ai-search',
    label: 'AI поиск',
    icon: <AiSearchIcon className="shrink-0" />,
  },
  { href: '/school', label: 'Школам' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const headerRowRef = useRef<HTMLDivElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const { signOut } = useAuth();
  const { userEmail } = useUserEmail();
  const pathname = usePathname();

  const closeMobile = () => setMobileOpen(false);

  useLayoutEffect(() => {
    const el = headerRowRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.getBoundingClientRect().height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen, closeMobile]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!profileMenuOpen) return;

    const onClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setProfileMenuOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProfileMenuOpen(false);
      }
    };

    window.addEventListener('mousedown', onClickOutside);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('mousedown', onClickOutside);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [profileMenuOpen]);

  return (
    <div className="fixed w-full top-0 z-50 border-b border-[#E5E7EB] bg-white">
      <Container>
        <div
          ref={headerRowRef}
          className="relative z-50 flex items-center justify-between py-[16px]">
          <Link href="/" onClick={closeMobile}>
            <Image src={logo} alt="Logo" />
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  className={`inline-flex items-center gap-1.5 text-[#6B7280] ${
                    pathname === item.href ? 'text-[#7C3AED]' : ''
                  }`}
                  href={item.href}>
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            {!isMounted ? (
              <div className="h-[34px] w-[180px] animate-pulse rounded-lg bg-gray-200" />
            ) : userEmail ? (
              <div className="relative" ref={profileMenuRef}>
                <button
                  type="button"
                  className="rounded-lg border border-gray-300 px-[12px] py-[5px] text-sm text-[#374151]"
                  onClick={() => setProfileMenuOpen((prev) => !prev)}>
                  {userEmail}
                </button>
                {profileMenuOpen ? (
                  <div className="absolute right-0 mt-2 w-48 rounded-xl border border-[#E5E7EB] bg-white p-1 shadow-lg">
                    <Link
                      href="/profile"
                      className="block rounded-lg px-3 py-2 text-sm text-[#374151] hover:bg-[#F3F4F6]"
                      onClick={() => setProfileMenuOpen(false)}>
                      Профиль
                    </Link>
                    <button
                      type="button"
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                      onClick={async () => {
                        setProfileMenuOpen(false);
                        await signOut();
                      }}>
                      Выйти
                    </button>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                href="/auth"
                className="rounded-lg border border-gray-300 px-[17px] py-[5px]">
                Войти
              </Link>
            )}
            <Link
              href="/register"
              className="rounded-lg bg-[#185FA5] px-[17px] py-[5px] text-white">
              Разместить вакансию
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-[#374151] md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setMobileOpen((o) => !o)}>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      {mobileOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            aria-label="Закрыть меню"
            onClick={closeMobile}
          />
          <div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 z-50 flex min-h-0 flex-col overflow-y-auto border-t border-[#E5E7EB] bg-white shadow-md md:hidden"
            style={{ top: headerHeight }}>
            <Container className="flex min-h-0 flex-1 flex-col">
              <nav
                className="flex min-h-full flex-1 flex-col gap-1 py-4"
                aria-label="Мобильная навигация">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center gap-2 rounded-lg px-2 py-3 text-base text-[#6B7280] ${
                      pathname === item.href ? 'text-[#7C3AED]' : ''
                    }`}
                    onClick={closeMobile}>
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
                <div className="mt-auto flex flex-col gap-3 border-t border-[#E5E7EB] pt-4">
                  {userEmail ? (
                    <p className="rounded-lg border border-gray-300 px-[17px] py-[10px] text-center text-sm text-[#374151]">
                      {userEmail}
                    </p>
                  ) : (
                    <Link
                      href="/auth"
                      className="rounded-lg border border-gray-300 px-[17px] py-[10px] text-center"
                      onClick={closeMobile}>
                      Войти
                    </Link>
                  )}
                  <Link
                    href="/register"
                    className="rounded-lg bg-[#185FA5] px-[17px] py-[10px] text-center text-white"
                    onClick={closeMobile}>
                    Разместить вакансию
                  </Link>
                </div>
              </nav>
            </Container>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Navbar;
