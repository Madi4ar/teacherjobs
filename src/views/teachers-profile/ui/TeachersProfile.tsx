import Container from "@/shared/container/ui/Container";
import {
  BadgeCheck,
  BookOpen,
  Bookmark,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Star,
  ThumbsUp,
} from "lucide-react";

type TeachersProfileProps = {
  teacherName?: string;
};

export default function TeachersProfile({ teacherName }: TeachersProfileProps) {
  const profileName = teacherName ?? "Айгуль Сагимбаева";
  const experience = [
    {
      school: "РФМШ Алматы",
      role: "Учитель математики",
      city: "Алматы",
      period: "2019 — н.в.",
      active: true,
      badge: "Сейчас",
    },
    {
      school: "НИШ ФМН Алматы",
      role: "Старший учитель математики",
      city: "Алматы",
      period: "2015 — 2019",
      active: false,
    },
    {
      school: "Гимназия №18",
      role: "Учитель математики",
      city: "Алматы",
      period: "2012 — 2015",
      active: false,
    },
  ];

  const reviews = [
    {
      initials: "ДК",
      avatarColor: "bg-[#7C3AED]",
      author: "Даулет Кусаинов",
      role: "Директор школы",
      date: "15 марта 2026",
      text: "Айгуль Мурзабековна — исключительный педагог. За три года работы у нас наши ученики трижды выходили в финал республиканской олимпиады. Высокий профессионализм и искренняя любовь к предмету.",
      likes: 8,
    },
    {
      initials: "МА",
      avatarColor: "bg-[#059669]",
      author: "Мадина Ахметова",
      role: "Родитель ученика",
      date: "2 февраля 2026",
      text: "Благодаря Айгуль апай мой сын полюбил математику. Объясняет сложные темы очень доступно, всегда находит время ответить на вопросы. Дочь поступила в НИШ после занятий с ней.",
      likes: 12,
    },
    {
      initials: "АН",
      avatarColor: "bg-[#DC2626]",
      author: "Арман Нурланов",
      role: "Выпускник 2025",
      date: "10 января 2026",
      text: "Лучший учитель математики, которого я встречал. ЕНТ сдал на 140 баллов из 140 по математике. Ее методика работает — сначала понимаешь суть, потом скорость и точность приходят сами.",
      likes: 19,
    },
  ];

  const similarTeachers = [
    {
      initials: "НО",
      color: "bg-[#F97316]",
      name: "Нурлан Оспанов",
      subject: "Математика",
      city: "Алматы",
      rating: "4.7",
    },
    {
      initials: "ДМ",
      color: "bg-[#0891B2]",
      name: "Дина Махсутова",
      subject: "Алгебра и начала анализа",
      city: "Алматы",
      rating: "4.6",
    },
  ];

  return (
    <Container>
      <div className="mt-8 grid grid-cols-1 items-start gap-6 py-6 md:grid-cols-[minmax(0,1fr)_380px]">
        <div className="content space-y-4">
          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-22 w-22 shrink-0 items-center justify-center rounded-full bg-[#1D62B5] text-4xl font-semibold text-white">
                AC
              </div>

              <div className="min-w-0">
                <h1 className="text-2xl leading-tight font-semibold text-[#1F2937]">
                  {profileName}
                </h1>

                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#6B7280]">
                  <span>Математика</span>
                  <span>·</span>
                  <span>РФМШ Алматы</span>
                  <span>·</span>
                  <MapPin size={16} />
                  <span>Алматы</span>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={20}
                        className="fill-current"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <span className="text-base font-medium text-[#111827]">
                    4.8
                  </span>
                  <span className="text-sm text-[#6B7280]">(24 отзыва)</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#DCFCE7] px-3 py-1 text-xs text-[#16A34A]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                    Доступен
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#E8F1FC] px-3 py-1 text-xs text-[#2563EB]">
                    <BadgeCheck size={18} />
                    Высшая категория
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#F3F4F6] px-3 py-1 text-xs text-[#4B5563]">
                    <Clock3 size={18} />
                    Опыт 12 лет
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="text-xl leading-tight font-semibold text-[#1F2937]">
              О себе
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4B5563]">
              Учитель математики высшей категории с 12-летним опытом работы в
              специализированных школах и лицеях Алматы. Специализируюсь на
              подготовке к олимпиадам республиканского и международного уровней
              — мои ученики занимали призовые места на математических олимпиадах
              8 лет подряд.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#4B5563]">
              Применяю авторскую методику системного мышления: от базовых
              понятий к сложным задачам через визуализацию и практику. Умею
              объяснять трудные темы простым языком, создаю атмосферу интереса и
              уверенности в каждом ученике.
            </p>
          </article>

          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="text-xl leading-tight font-semibold text-[#1F2937]">
              Предметы и направления
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Алгебра",
                "Геометрия",
                "Математический анализ",
                "Теория вероятностей",
                "Олимпиадная математика",
                "Подготовка к ЕНТ",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 text-xs text-[#2563EB]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <h2 className="text-xl leading-tight font-semibold text-[#1F2937]">
              Опыт работы
            </h2>

            <div className="mt-5 space-y-5">
              {experience.map((item, index) => (
                <div key={item.school} className="relative flex gap-3">
                  <div className="flex w-4 flex-col items-center">
                    <span
                      className={`mt-1 h-3 w-3 rounded-full border ${
                        item.active
                          ? "border-[#2563EB] bg-[#2563EB]"
                          : "border-[#D1D5DB] bg-white"
                      }`}
                    />
                    {index !== experience.length - 1 && (
                      <span className="mt-1 h-full w-px bg-[#E5E7EB]" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-[#111827]">
                          {item.school}
                        </p>
                        {item.badge && (
                          <span className="rounded-full bg-[#DCFCE7] px-2 py-0.5 text-[11px] text-[#16A34A]">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#9CA3AF]">{item.period}</p>
                    </div>
                    <p className="mt-1 text-xs text-[#6B7280]">
                      {item.role} · {item.city}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl leading-tight font-semibold text-[#1F2937]">
                Отзывы
              </h2>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex items-center gap-0.5 text-[#F59E0B]">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={`review-star-${index}`}
                      size={14}
                      className="fill-current"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <span className="font-medium text-[#111827]">4.8</span>
                <span className="text-[#9CA3AF]">· 24 отзыва</span>
              </div>
            </div>

            <div className="mt-5">
              {reviews.map((review, index) => (
                <div
                  key={review.author}
                  className={`${index !== 0 ? "border-t border-[#E5E7EB] pt-5" : ""} ${
                    index !== reviews.length - 1 ? "pb-5" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold text-white ${review.avatarColor}`}
                      >
                        {review.initials}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-1 text-sm">
                          <p className="font-medium text-[#111827]">
                            {review.author}
                          </p>
                          <span className="text-xs text-[#9CA3AF]">
                            {review.role}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center gap-0.5 text-[#F59E0B]">
                          {Array.from({ length: 5 }, (_, starIndex) => (
                            <Star
                              key={`${review.author}-${starIndex}`}
                              size={12}
                              className="fill-current"
                              strokeWidth={1.5}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-[#9CA3AF]">{review.date}</p>
                  </div>

                  <p className="mt-2 pl-10 text-sm leading-relaxed text-[#4B5563]">
                    {review.text}
                  </p>

                  <div className="mt-2 flex items-center gap-1 pl-10 text-xs text-[#9CA3AF]">
                    <ThumbsUp size={12} />
                    {review.likes}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded-lg border border-[#E5E7EB] py-2 text-sm font-medium text-[#6B7280] transition-colors hover:bg-[#F9FAFB]"
            >
              Показать все 24 отзыва
            </button>
          </article>
        </div>

        <aside className="space-y-4 md:sticky md:top-24">
          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
            >
              <MessageSquare size={16} />
              Написать учителю
            </button>

            <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-medium text-[#374151] transition-colors hover:bg-[#F9FAFB]"
            >
              <Bookmark size={16} />
              Сохранить профиль
            </button>

            <div className="mt-4 border-t border-[#E5E7EB] pt-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-[#F3F4F6] p-2 text-[#6B7280]">
                  <Phone size={14} />
                </div>
                <div>
                  <p className="text-xs text-[#9CA3AF]">Телефон</p>
                  <p className="mt-0.5 text-sm text-[#111827]">
                    +7 (701) 234-56-78
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-start gap-3">
                <div className="rounded-full bg-[#F3F4F6] p-2 text-[#6B7280]">
                  <Mail size={14} />
                </div>
                <div>
                  <p className="text-xs text-[#9CA3AF]">Электронная почта</p>
                  <p className="mt-0.5 text-sm text-[#111827]">
                    aigul.sagimbaeva@mail.kz
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
            <div className="grid grid-cols-3 divide-x divide-[#E5E7EB]">
              <div className="px-2 text-center">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-[#DBEAFE] text-[#2563EB]">
                  <Clock3 size={15} />
                </div>
                <p className="mt-2 text-3xl font-semibold text-[#111827]">12</p>
                <p className="text-xs text-[#9CA3AF]">Лет опыта</p>
              </div>

              <div className="px-2 text-center">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-[#FEF3C7] text-[#D97706]">
                  <Star size={15} className="fill-current" />
                </div>
                <p className="mt-2 text-3xl font-semibold text-[#111827]">
                  4.8
                </p>
                <p className="text-xs text-[#9CA3AF]">Рейтинг</p>
              </div>

              <div className="px-2 text-center">
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
                  <BookOpen size={15} />
                </div>
                <p className="mt-2 text-3xl font-semibold text-[#111827]">24</p>
                <p className="text-xs text-[#9CA3AF]">Отзывов</p>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
            <h3 className="text-xl font-semibold text-[#1F2937]">
              Похожие учителя
            </h3>
            <div className="mt-4 space-y-3">
              {similarTeachers.map((teacher, index) => (
                <div
                  key={teacher.name}
                  className={
                    index !== 0 ? "border-t border-[#E5E7EB] pt-3" : ""
                  }
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${teacher.color}`}
                      >
                        {teacher.initials}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#111827]">
                          {teacher.name}
                        </p>
                        <p className="text-xs text-[#9CA3AF]">
                          {teacher.subject} · {teacher.city}
                        </p>
                      </div>
                    </div>
                    <div className="mt-0.5 flex items-center gap-1 text-sm text-[#6B7280]">
                      <Star
                        size={12}
                        className="fill-[#F59E0B] text-[#F59E0B]"
                      />
                      {teacher.rating}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-4 w-full rounded-xl border border-[#E5E7EB] py-2 text-sm font-semibold text-[#2563EB] transition-colors hover:bg-[#F9FAFB]"
            >
              Все учителя
            </button>
          </article>
        </aside>
      </div>
    </Container>
  );
}
