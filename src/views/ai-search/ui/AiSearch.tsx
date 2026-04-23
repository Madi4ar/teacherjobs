"use client";

import Container from "@/shared/container/ui/Container";
import Link from "next/link";
import {
  Bot,
  MessageSquareText,
  Sparkles,
  Star,
  Wand2,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AiSearch() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchStepIndex, setSearchStepIndex] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const searchStepIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );

  const promptExamples = [
    "Строгий учитель математики в Алматы с опытом олимпиад",
    "Опытный репетитор английского с сертификатом IELTS",
    "Учитель начальных классов в Астане, высшая категория",
    "Классный руководитель с опытом работы с детьми ОВЗ",
    "Учитель физики для НИШ, рейтинг выше 4.7",
  ];
  const searchSteps = [
    "Ищем в базе по вашему запросу...",
    "Ищем тщательно по параметрам и рейтингу...",
    "Подбираем лучший вариант для вас...",
  ];

  const aiResults = [
    {
      id: 1,
      initials: "АС",
      color: "bg-[#1D62B5]",
      name: "Айгуль Сагимбаева",
      meta: "Математика · Алматы · 12 лет",
      rating: "4.9",
      reviews: 24,
      match: "98% совп.",
      reason:
        "12 лет опыта математики, специализация на олимпиадах — ученики выходили в финал 8 лет подряд.",
    },
    {
      id: 2,
      initials: "МА",
      color: "bg-[#6D28D9]",
      name: "Мадина Ахметова",
      meta: "Математика · Алматы · 16 лет",
      rating: "4.9",
      reviews: 33,
      match: "94% совп.",
      reason:
        "16 лет преподавания, активный участник олимпиадного движения. Строгий подход и высокий результат ЕНТ.",
    },
    {
      id: 3,
      initials: "НО",
      color: "bg-[#0891B2]",
      name: "Нурлан Оспанов",
      meta: "Математика · Алматы · 9 лет",
      rating: "4.7",
      reviews: 17,
      match: "87% совп.",
      reason:
        "9 лет опыта, спецкурс по олимпиадной математике в РФМШ. Известен сильной дисциплиной на уроках.",
    },
  ];

  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
      if (searchStepIntervalRef.current)
        clearInterval(searchStepIntervalRef.current);
    };
  }, []);

  const runSearch = () => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    if (searchStepIntervalRef.current) clearInterval(searchStepIntervalRef.current);
    setIsSearching(true);
    setShowResults(false);
    setSearchStepIndex(0);
    searchStepIntervalRef.current = setInterval(() => {
      setSearchStepIndex((prev) => (prev + 1) % searchSteps.length);
    }, 900);
    searchTimeoutRef.current = setTimeout(() => {
      if (searchStepIntervalRef.current) clearInterval(searchStepIntervalRef.current);
      setIsSearching(false);
      setShowResults(true);
    }, 3200);
  };

  return (
    <Container>
      <div className="w-full py-8 md:py-12">
        <section className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#C4B5FD] bg-[#F5F3FF] px-3 py-1 text-xs font-medium text-[#7C3AED]">
            <Sparkles size={12} />
            AI-поиск · Beta
          </div>

          <h1 className="mt-5 text-4xl font-semibold text-[#111827] md:text-5xl">
            Опишите кого ищете
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#6B7280] md:text-base">
            Напишите запрос на обычном языке — AI найдёт лучших учителей из
            базы.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white text-left">
            <textarea
              ref={textareaRef}
              rows={4}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full resize-none border-0 p-4 text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
              placeholder="Например: строгий учитель математики в Алматы с опытом олимпиад, рейтинг не ниже 4.5"
            />
            <div className="flex items-center justify-between border-t border-[#E5E7EB] px-4 py-2">
              <p className="text-xs text-[#9CA3AF]">
                Enter — поиск · Shift+Enter — новая строка
              </p>
              <button
                type="button"
                onClick={runSearch}
                disabled={isSearching}
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#1D62B5] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#18569E]"
              >
                <Wand2 size={14} />
                {isSearching ? "Ищем..." : "Найти с AI"}
              </button>
            </div>
          </div>

          <p className="mt-5 text-xs text-[#9CA3AF]">Примеры запросов</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            {promptExamples.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setQuery(item);
                  textareaRef.current?.focus();
                }}
                className="inline-flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-3 py-1.5 text-xs text-[#4B5563] transition-colors hover:bg-[#F9FAFB] md:text-sm"
              >
                <span className="text-[#9CA3AF]">↗</span>
                {item}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-xs text-[#D1D5DB]">Недавние запросы</p>
            <button
              type="button"
              className="mt-2 inline-flex items-center gap-1 text-xs text-[#9CA3AF] transition-colors hover:text-[#6B7280]"
            >
              <span>○</span>
              Строгий учитель математики в Алматы с опытом...
            </button>
          </div>
        </section>

        {isSearching ? (
          <section className="mx-auto mt-8 max-w-5xl animate-pulse space-y-3">
            <div className="rounded-xl border border-[#E9D5FF] bg-[#FAF5FF] px-3 py-2 text-sm font-medium text-[#7C3AED]">
              {searchSteps[searchStepIndex]}
            </div>
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={`skeleton-${index}`}
                className="rounded-2xl border border-[#E5E7EB] bg-white p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="h-4 w-44 rounded bg-[#E5E7EB]" />
                  <div className="h-6 w-20 rounded-full bg-[#E5E7EB]" />
                </div>
                <div className="mt-3 h-3 w-60 rounded bg-[#F3F4F6]" />
                <div className="mt-4 h-14 rounded-xl bg-[#F5F3FF]" />
              </div>
            ))}
          </section>
        ) : null}

        {showResults ? (
          <section className="mx-auto mt-8 max-w-5xl space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#6B7280]">
                AI нашёл <span className="font-medium text-[#7C3AED]">24 учителей</span>
              </p>
              <Link
                href="/teachers-list"
                className="text-sm font-medium text-[#2563EB] hover:underline"
              >
                Все учителя
              </Link>
            </div>

            {aiResults.map((teacher, index) => (
              <article
                key={teacher.id}
                className="animate-[fadeInUp_400ms_ease-out] rounded-2xl border border-[#E5E7EB] bg-white p-4"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold text-white ${teacher.color}`}
                    >
                      {teacher.initials}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[#111827]">
                        {teacher.name}
                      </h3>
                      <p className="text-xs text-[#9CA3AF]">{teacher.meta}</p>
                      <div className="mt-2 flex items-center gap-1 text-sm">
                        <div className="flex items-center gap-0.5 text-[#F59E0B]">
                          {Array.from({ length: 5 }, (_, starIndex) => (
                            <Star
                              key={`${teacher.id}-${starIndex}`}
                              size={11}
                              className="fill-current"
                            />
                          ))}
                        </div>
                        <span className="font-medium text-[#111827]">
                          {teacher.rating}
                        </span>
                        <span className="text-[#9CA3AF]">({teacher.reviews})</span>
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#F5F3FF] px-2 py-1 text-xs font-medium text-[#7C3AED]">
                    ✨ {teacher.match}
                  </span>
                </div>
                <div className="mt-3 rounded-xl border border-[#E9D5FF] bg-[#FAF5FF] px-3 py-2 text-xs text-[#6D28D9]">
                  <span className="font-medium">Почему AI рекомендует:</span>{" "}
                  {teacher.reason}
                </div>
              </article>
            ))}
          </section>
        ) : null}

        <section className="mt-16 border-t border-[#E5E7EB] pt-10 md:pt-12">
          <p className="text-center text-xs tracking-[0.2em] text-[#C4B5FD] uppercase">
            Как работает AI-поиск
          </p>

          <div className="mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#F3E8FF] text-[#7C3AED]">
                <MessageSquareText size={15} />
              </div>
              <h3 className="mt-3 text-base font-semibold text-[#111827]">
                Опишите своими словами
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                Не нужно знать точных фильтров — просто напишите запрос как
                сообщение другу.
              </p>
            </article>

            <article className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#DBEAFE] text-[#2563EB]">
                <Bot size={15} />
              </div>
              <h3 className="mt-3 text-base font-semibold text-[#111827]">
                AI разберёт параметры
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                Модель выделяет город, предмет, стиль преподавания, опыт и
                другие критерии.
              </p>
            </article>

            <article className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#16A34A]">
                <Zap size={15} />
              </div>
              <h3 className="mt-3 text-base font-semibold text-[#111827]">
                Совместимость за секунды
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                Каждый результат получает оценку совместимости и объяснение на
                русском языке.
              </p>
            </article>
          </div>
        </section>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Container>
  );
}
