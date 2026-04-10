import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium text-[#1E63B6]">Ошибка 404</p>
      <h1 className="mt-2 text-4xl font-semibold text-[#111827]">Страница не найдена</h1>
      <p className="mt-3 text-sm text-[#6B7280]">
        Возможно, ссылка устарела или страница была перемещена.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-[#185FA5] px-5 py-2.5 text-sm font-medium text-white">
        Вернуться на главную
      </Link>
    </main>
  );
}
