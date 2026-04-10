const mockVacancies = [
  {
    id: 1,
    title: 'Учитель математики',
    school: 'РФМШ Алматы',
    city: 'Алматы',
    salary: 'от 450 000 тг',
  },
  {
    id: 2,
    title: 'Учитель английского языка',
    school: 'NIS Astana',
    city: 'Астана',
    salary: 'от 500 000 тг',
  },
  {
    id: 3,
    title: 'Учитель информатики',
    school: 'Haileybury Almaty',
    city: 'Алматы',
    salary: 'от 550 000 тг',
  },
];

export default function VacancyPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-[#111827]">
        Тестовая страница вакансий
      </h1>
      <p className="mt-2 text-sm text-[#6B7280]">
        Временный список для проверки роутинга и отображения.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {mockVacancies.map((vacancy) => (
          <article
            key={vacancy.id}
            className="rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
            <h2 className="text-lg font-medium text-[#111827]">
              {vacancy.title}
            </h2>
            <p className="mt-1 text-sm text-[#374151]">{vacancy.school}</p>
            <p className="mt-1 text-sm text-[#6B7280]">{vacancy.city}</p>
            <p className="mt-3 text-sm font-medium text-[#1E63B6]">
              {vacancy.salary}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
