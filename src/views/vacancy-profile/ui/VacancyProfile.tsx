import Container from "@/shared/container/ui/Container";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calendar,
  CircleDot,
  Clock3,
  Copy,
  CreditCard,
  Eye,
  GraduationCap,
  Heart,
  MapPin,
  Bookmark,
  Star,
  Timer,
  TrendingUp,
  Utensils,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

type VacancyProfileProps = {
  vacancyTitle?: string;
  schoolName?: string;
};

export default function VacancyProfile({
  vacancyTitle,
  schoolName,
}: VacancyProfileProps) {
  const title = vacancyTitle ?? "Учитель математики";
  const school = schoolName ?? "НИШ ФМН Алматы";
  const requirements = [
    "Высшее педагогическое образование по специальности «Математика»",
    "Опыт работы не менее 3 лет в должности учителя математики",
    "Знание казахского и русского языков (разговорный уровень)",
    "Опыт подготовки учеников к олимпиадам республиканского уровня",
    "Навыки работы с цифровыми образовательными ресурсами",
    "Умение работать в команде и готовность к профессиональному росту",
  ];

  const workConditions = [
    {
      icon: CreditCard,
      title: "Зарплата",
      value: "280 000 – 420 000 ₸ + ежеквартальные надбавки",
    },
    {
      icon: Timer,
      title: "График",
      value: "Пн–Пт, 08:00–17:00, без дежурств по выходным",
    },
    {
      icon: MapPin,
      title: "Расположение",
      value: "Бостандыкский район, развитая транспортная сеть",
    },
    {
      icon: TrendingUp,
      title: "Карьерный рост",
      value: "Программа повышения категории раз в два года",
    },
    {
      icon: GraduationCap,
      title: "Обучение",
      value: "Оплачиваемые курсы повышения квалификации ежегодно",
    },
    {
      icon: Heart,
      title: "Медстрахование",
      value: "ДМС на весь педагогический состав и семью",
    },
    {
      icon: Utensils,
      title: "Питание",
      value: "Бесплатные обеды в школьной столовой",
    },
    {
      icon: Wifi,
      title: "Технологии",
      value: "Планшеты, интерактивные доски и LMS платформа",
    },
  ];

  return (
    <Container>
      <div className="mt-8 grid grid-cols-1 items-start gap-6 py-6 md:grid-cols-[minmax(0,1fr)_380px]">
        <div className="content space-y-4">
          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E6F1FB] text-[#1D62B5]">
                  <GraduationCap size={18} />
                </div>
                <div className="min-w-0">
                  <h1 className="text-2xl font-semibold text-[#1F2937]">{title}</h1>
                  <div className="mt-1 flex flex-wrap items-center gap-1 text-sm text-[#6B7280]">
                    <span className="font-medium text-[#2563EB]">
                      {school}
                    </span>
                    <span>·</span>
                    <MapPin size={13} />
                    <span>Алматы</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#DCFCE7] px-2.5 py-1 text-xs text-[#16A34A]">
                      <CircleDot size={10} className="fill-current" />
                      Полная занятость
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#FEF3C7] px-2.5 py-1 text-xs text-[#D97706]">
                      <Zap size={11} />
                      Срочно
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#DBEAFE] px-2.5 py-1 text-xs text-[#2563EB]">
                      <GraduationCap size={11} />
                      Высшая категория
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F3F4F6] px-2.5 py-1 text-xs text-[#6B7280]">
                      <Clock3 size={11} />
                      От 3 лет
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="rounded-lg border border-[#E5E7EB] p-2 text-[#9CA3AF] transition-colors hover:bg-[#F9FAFB]"
                aria-label="Скопировать ссылку"
              >
                <Copy size={14} />
              </button>
            </div>

            <div className="mt-4 border-t border-[#E5E7EB] pt-3">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-[#9CA3AF]">Заработная плата</p>
                  <p className="mt-1 text-3xl font-semibold text-[#1D62B5]">
                    280 000 – 420 000 ₸
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-[#9CA3AF]">Опубликовано</p>
                  <p className="mt-1 text-sm font-medium text-[#6B7280]">
                    28 марта 2026
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
            <h2 className="text-xl font-semibold text-[#1F2937]">
              Описание вакансии
            </h2>
            <div className="mt-3 border-t border-[#E5E7EB] pt-3 text-sm leading-relaxed text-[#4B5563]">
              <p>
                Назарбаев Интеллектуальная школа физико-математического
                направления в Алматы приглашает на работу учителя математики для
                преподавания в 10–11 классах по авторским программам НИШ.
              </p>
              <p className="mt-4">
                Мы ищем специалиста, который вдохновляет учеников идти дальше
                стандартной программы, умеет работать с одаренными детьми и
                готов включиться в олимпиадную подготовку. Уроки ведутся на
                русском и казахском языках.
              </p>
              <p className="mt-4">
                Школа работает по кембриджской системе оценивания и развивает
                критическое мышление у учеников. Вы получите сильного
                куратора-наставника и войдёте в профессиональное педагогическое
                сообщество НИШ.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
            <h2 className="text-xl font-semibold text-[#1F2937]">Требования</h2>
            <div className="mt-3 border-t border-[#E5E7EB] pt-3">
              <ul className="space-y-3">
                {requirements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#4B5563]"
                  >
                    <BadgeCheck
                      size={16}
                      className="mt-0.5 shrink-0 text-[#2563EB]"
                      strokeWidth={1.8}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
            <h2 className="text-xl font-semibold text-[#1F2937]">
              Условия работы
            </h2>
            <div className="mt-3 border-t border-[#E5E7EB] pt-2">
              {workConditions.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-3 py-3 ${
                    index !== workConditions.length - 1
                      ? "border-b border-[#E5E7EB]"
                      : ""
                  }`}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F3F4F6] text-[#6B7280]">
                    <item.icon size={14} />
                  </div>
                  <div>
                    <p className="text-sm text-[#9CA3AF]">{item.title}</p>
                    <p className="text-sm text-[#4B5563]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
            <h2 className="text-xl font-semibold text-[#1F2937]">О школе</h2>
            <div className="mt-3 border-t border-[#E5E7EB] pt-3">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6F1FB] text-[#1D62B5]">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="text-[28px] font-semibold text-[#1F2937]">
                    {school}
                  </h3>
                  <div className="mt-1 flex items-center gap-1 text-sm">
                    <div className="flex items-center gap-0.5 text-[#F59E0B]">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          key={`school-rating-${index}`}
                          size={12}
                          className="fill-current"
                        />
                      ))}
                    </div>
                    <span className="font-medium text-[#111827]">4.9</span>
                    <span className="text-[#9CA3AF]">· 38 отзыва</span>
                  </div>
                  <p className="mt-2 flex items-center gap-1 text-sm text-[#6B7280]">
                    <MapPin size={13} />
                    ул. Сейфуллина 458/460, Алматы
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                  <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-lg bg-[#F3F4F6] text-[#6B7280]">
                    <Calendar size={14} />
                  </div>
                  <p className="text-3xl font-semibold text-[#111827]">2011</p>
                  <p className="mt-1 text-xs text-[#9CA3AF]">Год основания</p>
                </div>
                <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                  <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-lg bg-[#F3F4F6] text-[#6B7280]">
                    <Users size={14} />
                  </div>
                  <p className="text-3xl font-semibold text-[#111827]">1 200</p>
                  <p className="mt-1 text-xs text-[#9CA3AF]">Учеников</p>
                </div>
                <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-4">
                  <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-lg bg-[#F3F4F6] text-[#6B7280]">
                    <GraduationCap size={14} />
                  </div>
                  <p className="text-3xl font-semibold text-[#111827]">120</p>
                  <p className="mt-1 text-xs text-[#9CA3AF]">Учителей</p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <aside className="static space-y-4 md:sticky md:top-24">
          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-4">
            <p className="text-xs text-[#9CA3AF]">Заработная плата</p>
            <p className="mt-1 text-3xl leading-tight font-semibold text-[#1F2937]">
              280 000 – 420 000 ₸
            </p>
            <p className="mt-1 text-xs text-[#9CA3AF]">
              в месяц, до вычета налогов
            </p>

            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-[#1D62B5] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#18569E]"
            >
              Откликнуться
            </button>
            <button
              type="button"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-[#E5E7EB] py-2.5 text-sm font-medium text-[#374151] transition-colors hover:bg-[#F9FAFB]"
            >
              <Bookmark size={14} />
              Сохранить вакансию
            </button>

            <div className="mt-4 border-t border-[#E5E7EB] pt-3">
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg bg-[#FEF3C7] text-[#D97706]">
                    <Calendar size={13} />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF]">Срок подачи</p>
                    <p className="text-sm text-[#374151]">30 апреля 2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg bg-[#F3F4F6] text-[#6B7280]">
                    <Eye size={13} />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF]">Просмотров</p>
                    <p className="text-sm text-[#374151]">1 247</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg bg-[#DBEAFE] text-[#2563EB]">
                    <Clock3 size={13} />
                  </div>
                  <div>
                    <p className="text-xs text-[#9CA3AF]">Опыт работы</p>
                    <p className="text-sm text-[#374151]">От 3 лет</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-[#FCD34D] bg-[#FFFBEB] px-3 py-2">
              <p className="text-sm text-[#B45309]">
                <span className="font-semibold">⚡ Срочная вакансия</span> —
                школа рассматривает отклики в течение{" "}
                <span className="font-semibold">24 часов</span>.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-[#E5E7EB] bg-white p-4">
            <h3 className="text-[28px] font-semibold text-[#1F2937]">
              Похожие вакансии
            </h3>
            <div className="mt-3 space-y-2">
              {[
                {
                  initials: "РФ",
                  color: "bg-[#7C3AED]",
                  title: "Учитель алгебры",
                  school: "РФМШ Алматы",
                  city: "Алматы",
                  salary: "260 000 – 380 000 ₸",
                  urgent: true,
                },
                {
                  initials: "ГШ",
                  color: "bg-[#059669]",
                  title: "Преподаватель математики",
                  school: "Гимназия №165",
                  city: "Астана",
                  salary: "220 000 – 300 000 ₸",
                },
                {
                  initials: "МЛ",
                  color: "bg-[#DC2626]",
                  title: "Учитель математики",
                  school: "Мектеп-лицей №4",
                  city: "Шымкент",
                  salary: "200 000 – 280 000 ₸",
                },
              ].map((item) => (
                <div
                  key={`${item.title}-${item.school}`}
                  className="flex items-center justify-between gap-2 rounded-2xl border border-[#E5E7EB] p-3"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white ${item.color}`}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <p className="text-sm font-medium text-[#111827]">
                          {item.title}
                        </p>
                        {item.urgent && (
                          <span className="rounded-full bg-[#FEF3C7] px-1.5 py-0.5 text-[10px] text-[#D97706]">
                            Срочно
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#9CA3AF]">
                        {item.school} · {item.city}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-[#2563EB]">
                        {item.salary}
                      </p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="text-[#D1D5DB]" />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-3 w-full rounded-xl border border-[#E5E7EB] py-2.5 text-sm font-semibold text-[#2563EB] transition-colors hover:bg-[#F9FAFB]"
            >
              Все вакансии
            </button>
          </article>
        </aside>
      </div>
    </Container>
  );
}
