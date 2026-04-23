"use client";

import Container from "@/shared/container/ui/Container";
import { Accordion, Button, Slider } from "@heroui/react";
import { useState } from "react";
import type { Key } from "@react-types/shared";
import Link from "next/link";
import {
  ChevronDown,
  LayoutGrid,
  List,
  ListFilter,
  Minus,
  Plus,
  Search,
  Star,
} from "lucide-react";

export default function TeacherList() {
  const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(
    new Set(["city", "subject", "rating", "status", "experience"]),
  );
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const cities = [
    { id: "1", label: "Алматы", count: 8 },
    { id: "2", label: "Астана", count: 7 },
    { id: "3", label: "Шымкент", count: 5 },
    { id: "4", label: "Актобе", count: 4 },
  ];

  const subjects = [
    { id: "1", label: "Математика", count: 6 },
    { id: "2", label: "Физика", count: 4 },
    { id: "3", label: "Английский", count: 3 },
    { id: "4", label: "Информатика", count: 3 },
    { id: "5", label: "Биология", count: 4 },
    { id: "6", label: "История", count: 2 },
    { id: "7", label: "Начальные классы", count: 2 },
    { id: "8", label: "Химия", count: 3 },
  ];

  const teachers = [
    {
      initials: "БТ",
      color: "bg-[#059669]",
      name: "Бахыт Турсунов",
      subject: "Информатика",
      city: "Актобе",
      rating: "5",
      reviews: 14,
      experience: 6,
      status: "Открыт к офферам",
      statusColor: "bg-[#DBEAFE] text-[#2563EB]",
    },
    {
      initials: "ЗБ",
      color: "bg-[#0F766E]",
      name: "Зарина Бекова",
      subject: "Казахский язык",
      city: "Актобе",
      rating: "5",
      reviews: 27,
      experience: 18,
      status: "Доступен",
      statusColor: "bg-[#DCFCE7] text-[#16A34A]",
    },
    {
      initials: "АМ",
      color: "bg-[#1D4ED8]",
      name: "Алтынай Мусина",
      subject: "Казахский язык",
      city: "Алматы",
      rating: "5",
      reviews: 52,
      experience: 25,
      status: "Доступен",
      statusColor: "bg-[#DCFCE7] text-[#16A34A]",
    },
    {
      initials: "АС",
      color: "bg-[#1D62B5]",
      name: "Айгуль Сагимбаева",
      subject: "Математика",
      city: "Алматы",
      rating: "4.9",
      reviews: 24,
      experience: 12,
      status: "Доступен",
      statusColor: "bg-[#DCFCE7] text-[#16A34A]",
    },
    {
      initials: "АК",
      color: "bg-[#9333EA]",
      name: "Асель Каримова",
      subject: "Английский",
      city: "Астана",
      rating: "4.9",
      reviews: 38,
      experience: 14,
      status: "Доступен",
      statusColor: "bg-[#DCFCE7] text-[#16A34A]",
    },
    {
      initials: "МА",
      color: "bg-[#6D28D9]",
      name: "Мадина Ахметова",
      subject: "Математика",
      city: "Алматы",
      rating: "4.9",
      reviews: 33,
      experience: 16,
      status: "Доступен",
      statusColor: "bg-[#DCFCE7] text-[#16A34A]",
    },
    {
      initials: "ЖС",
      color: "bg-[#9D174D]",
      name: "Жанна Сабитова",
      subject: "Начальные классы",
      city: "Астана",
      rating: "4.9",
      reviews: 29,
      experience: 14,
      status: "Доступен",
      statusColor: "bg-[#DCFCE7] text-[#16A34A]",
    },
    {
      initials: "ДК",
      color: "bg-[#7C3AED]",
      name: "Даулет Кусаинов",
      subject: "Физика",
      city: "Астана",
      rating: "4.8",
      reviews: 18,
      experience: 8,
      status: "Открыт к офферам",
      statusColor: "bg-[#DBEAFE] text-[#2563EB]",
    },
    {
      initials: "ЕП",
      color: "bg-[#DB2777]",
      name: "Елена Петрова",
      subject: "История",
      city: "Астана",
      rating: "4.8",
      reviews: 22,
      experience: 20,
      status: "Доступен",
      statusColor: "bg-[#DCFCE7] text-[#16A34A]",
    },
    {
      initials: "ГН",
      color: "bg-[#BE185D]",
      name: "Гаухар Нурова",
      subject: "Начальные классы",
      city: "Алматы",
      rating: "4.8",
      reviews: 45,
      experience: 22,
      status: "Доступен",
      statusColor: "bg-[#DCFCE7] text-[#16A34A]",
    },
    {
      initials: "БА",
      color: "bg-[#7E22CE]",
      name: "Болат Аубаков",
      subject: "Физика",
      city: "Шымкент",
      rating: "4.8",
      reviews: 21,
      experience: 17,
      status: "Открыт к офферам",
      statusColor: "bg-[#DBEAFE] text-[#2563EB]",
    },
    {
      initials: "ТН",
      color: "bg-[#5B21B6]",
      name: "Тимур Нурмагамбет",
      subject: "Информатика",
      city: "Шымкент",
      rating: "4.8",
      reviews: 23,
      experience: 7,
      status: "Открыт к офферам",
      statusColor: "bg-[#DBEAFE] text-[#2563EB]",
    },
  ];
  const teachersList = [...teachers, ...teachers];

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-[20%_1fr] gap-6 mt-8 py-6 items-start">
        <aside className="filter static md:sticky top-2 z-20 rounded-2xl border border-[#E5E7EB] bg-white md:top-20">
          <div className="p-4">
            <div className="relative flex items-center">
              <input
                className="w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] py-2 pl-10 pr-3 text-sm text-[#111827] outline-none placeholder:text-[#9CA3AF]"
                type="text"
                placeholder="Найти учителя..."
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              />
            </div>
          </div>
          <Accordion
            className="w-full px-4 pb-3"
            expandedKeys={expandedKeys}
            allowsMultipleExpanded
            onExpandedChange={setExpandedKeys}
            variant="default"
          >
            <Accordion.Item id="city" className="border-t border-[#E5E7EB]">
              <Accordion.Heading>
                <Accordion.Trigger className="py-3 text-sm font-medium text-[#111827]">
                  Город
                  <Accordion.Indicator>
                    {expandedKeys.has("city") ? (
                      <Minus size={16} className="text-[#9CA3AF]" />
                    ) : (
                      <Plus size={16} className="text-[#9CA3AF]" />
                    )}
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="space-y-2 pb-3">
                  {cities.map((city) => (
                    <label
                      key={city.id}
                      className="flex cursor-pointer items-center justify-between text-sm"
                    >
                      <span className="flex items-center gap-2 text-[#374151]">
                        <input type="checkbox" className="h-4 w-4 rounded" />
                        {city.label}
                      </span>
                      <span className="text-[#9CA3AF]">{city.count}</span>
                    </label>
                  ))}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item id="subject" className="border-t border-[#E5E7EB]">
              <Accordion.Heading>
                <Accordion.Trigger className="py-3 text-sm font-medium text-[#111827]">
                  Предмет
                  <Accordion.Indicator>
                    {expandedKeys.has("subject") ? (
                      <Minus size={16} className="text-[#9CA3AF]" />
                    ) : (
                      <Plus size={16} className="text-[#9CA3AF]" />
                    )}
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="space-y-2 pb-3">
                  {subjects.map((subject) => (
                    <label
                      key={subject.id}
                      className="flex cursor-pointer items-center justify-between text-sm"
                    >
                      <span className="flex items-center gap-2 text-[#374151]">
                        <input type="checkbox" className="h-4 w-4 rounded" />
                        {subject.label}
                      </span>
                      <span className="text-[#9CA3AF]">{subject.count}</span>
                    </label>
                  ))}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item id="rating" className="border-t border-[#E5E7EB]">
              <Accordion.Heading>
                <Accordion.Trigger className="py-3 text-sm font-medium text-[#111827]">
                  Рейтинг
                  <Accordion.Indicator>
                    {expandedKeys.has("rating") ? (
                      <Minus size={16} className="text-[#9CA3AF]" />
                    ) : (
                      <Plus size={16} className="text-[#9CA3AF]" />
                    )}
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="space-y-2 pb-3">
                  {["4+", "4.5+", "5+"].map((rate, index) => (
                    <label
                      key={rate}
                      className="flex cursor-pointer items-center gap-2 text-sm text-[#374151]"
                    >
                      <input type="radio" name="rating" className="h-4 w-4" />
                      <span className="flex items-center gap-0.5 text-[#F59E0B]">
                        {Array.from({ length: 5 }, (_, starIndex) => (
                          <Star
                            key={`${rate}-${starIndex}`}
                            size={12}
                            className={
                              index === 0 && starIndex === 4
                                ? "text-[#D1D5DB]"
                                : "fill-current"
                            }
                          />
                        ))}
                      </span>
                      <span>{rate}</span>
                    </label>
                  ))}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item id="status" className="border-t border-[#E5E7EB]">
              <Accordion.Heading>
                <Accordion.Trigger className="py-3 text-sm font-medium text-[#111827]">
                  Статус
                  <Accordion.Indicator>
                    {expandedKeys.has("status") ? (
                      <Minus size={16} className="text-[#9CA3AF]" />
                    ) : (
                      <Plus size={16} className="text-[#9CA3AF]" />
                    )}
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="pb-3">
                  <label className="flex cursor-pointer items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-[#374151]">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
                      Только доступные
                    </span>
                    <input type="checkbox" className="h-5 w-9 rounded-full" />
                  </label>
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item
              id="experience"
              className="border-t border-[#E5E7EB]"
            >
              <Accordion.Heading>
                <Accordion.Trigger className="py-3 text-sm font-medium text-[#111827]">
                  Опыт работы
                  <Accordion.Indicator>
                    {expandedKeys.has("experience") ? (
                      <Minus size={16} className="text-[#9CA3AF]" />
                    ) : (
                      <Plus size={16} className="text-[#9CA3AF]" />
                    )}
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body className="pb-3">
                  <div className="mb-2 flex items-center justify-between text-sm text-[#6B7280]">
                    <span>0 лет</span>
                    <span>30 лет</span>
                  </div>
                  <Slider
                    className="w-full"
                    defaultValue={[0, 30]}
                    maxValue={30}
                    minValue={0}
                    step={1}
                  >
                    <Slider.Track>
                      {({ state }) => (
                        <>
                          <Slider.Fill />
                          {state.values.map((_, i) => (
                            <Slider.Thumb key={i} index={i} />
                          ))}
                        </>
                      )}
                    </Slider.Track>
                  </Slider>
                  <div className="mt-2 flex items-center justify-between text-sm text-[#9CA3AF]">
                    <span>0 лет</span>
                    <span>30 лет</span>
                  </div>
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <div className="border-t border-[#E5E7EB] p-4">
            <Button className="w-full font-semibold">
              <ListFilter size={16} />
              Применить фильтры
            </Button>
          </div>
        </aside>
        <div className="content-start">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="text-2xl font-semibold text-[#111827]">
              {teachersList.length} учителей
            </p>

            <div className="flex items-center gap-2">
              <div className="flex overflow-hidden rounded-lg border border-[#E5E7EB]">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`flex h-8 w-8 items-center justify-center ${
                    viewMode === "grid"
                      ? "bg-[#2563EB] text-white"
                      : "bg-white text-[#9CA3AF]"
                  }`}
                  aria-label="Сетка"
                >
                  <LayoutGrid size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`flex h-8 w-8 items-center justify-center ${
                    viewMode === "list"
                      ? "bg-[#2563EB] text-white"
                      : "bg-white text-[#9CA3AF]"
                  }`}
                  aria-label="Список"
                >
                  <List size={14} />
                </button>
              </div>

              <button
                type="button"
                className="inline-flex h-8 items-center gap-1 rounded-lg border border-[#E5E7EB] bg-white px-3 text-sm text-[#4B5563]"
              >
                По рейтингу
                <ChevronDown size={14} className="text-[#9CA3AF]" />
              </button>
            </div>
          </div>

          <div
            className={`grid gap-3 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {teachersList.map((teacher, cardIndex) => (
              <Link
                key={`${teacher.name}-${cardIndex}`}
                href={`/teachers-profile?name=${encodeURIComponent(teacher.name)}`}
                className="group block"
              >
                <article
                  className={`rounded-2xl border border-[#E5E7EB] bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:shadow-sm ${
                    viewMode === "list"
                      ? "flex items-center justify-between gap-4"
                      : ""
                  }`}
                >
                  <div
                    className={`${
                      viewMode === "list"
                        ? "flex items-center gap-4"
                        : "flex justify-between"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold text-white ${teacher.color}`}
                    >
                      {teacher.initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#111827]">
                        {teacher.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#9CA3AF]">
                        {teacher.subject} · {teacher.city}
                      </p>
                    </div>
                  </div>

                  <div
                    className={viewMode === "list" ? "shrink-0 text-right" : ""}
                  >
                    <span className="text-xs text-[#9CA3AF]">
                      {teacher.experience} л.
                    </span>
                    <div className="mt-3 flex items-center gap-1 text-sm">
                      <div className="flex items-center gap-0.5 text-[#F59E0B]">
                        {Array.from({ length: 5 }, (_, index) => (
                          <Star
                            key={`${teacher.name}-${index}`}
                            size={12}
                            className="fill-current"
                          />
                        ))}
                      </div>
                      <span className="font-medium text-[#111827]">
                        {teacher.rating}
                      </span>
                      <span className="text-[#9CA3AF]">
                        ({teacher.reviews})
                      </span>
                    </div>
                    <span
                      className={`mt-3 inline-flex items-center rounded-full px-2.5 py-1 text-xs ${teacher.statusColor}`}
                    >
                      <span className="mr-1 h-1.5 w-1.5 rounded-full bg-current opacity-70" />
                      {teacher.status}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
