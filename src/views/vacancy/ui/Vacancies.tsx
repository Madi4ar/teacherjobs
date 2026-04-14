"use client";
import Container from "@/shared/container/ui/Container";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import type { Key } from "@heroui/react";
import { Accordion, Slider, Button } from "@heroui/react";
import { ListFilter, Minus, Plus, Search } from "lucide-react";

const REFERENCE_DATE = new Date("2026-04-10T12:00:00.000Z");

const getDateLabel = (date: Date) => {
  const now = REFERENCE_DATE;
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);

  const time = date.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (date.toDateString() === now.toDateString()) return `Сегодня, ${time}`;
  if (date.toDateString() === yesterday.toDateString()) return `Вчера, ${time}`;
  return `${date.toLocaleDateString("ru-RU")}, ${time}`;
};

const vacancyTitles = [
  "Учитель математики (5-9 классы)",
  "Учитель английского языка",
  "Учитель информатики",
  "Учитель физики",
  "Учитель химии",
  "Учитель биологии",
];

const schoolNames = [
  "Школа-гимназия №34",
  "NIS Astana",
  "Haileybury Almaty",
  "РФМШ Алматы",
  "Школа-лицей №90",
];

const tagPool = [
  "Полная",
  "Частичная",
  "Срочно",
  "Математика",
  "Английский",
  "Информатика",
];

faker.seed(20260410);

const mockVacancies = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: faker.helpers.arrayElement(vacancyTitles),
  school: faker.helpers.arrayElement(schoolNames),
  city: faker.helpers.arrayElement([
    "Алматы",
    "Астана",
    "Шымкент",
    "Караганда",
    "Атырау",
    "Семей",
  ]),
  salary: `${faker.number
    .int({ min: 220000, max: 800000 })
    .toLocaleString("ru-RU")} ₸`,
  dateLabel: getDateLabel(
    faker.date.recent({ days: 3, refDate: REFERENCE_DATE })
  ),
  tags: faker.helpers.arrayElements(tagPool, { min: 2, max: 3 }),
}));
const cities = [
  { id: "1", label: "Алматы" },
  { id: "2", label: "Астана" },
  { id: "3", label: "Шымкент" },
  { id: "4", label: "Қарағанды" },
  { id: "5", label: "Актобе" },
  { id: "6", label: "Тараз" },
  { id: "7", label: "Павлодар" },
  { id: "8", label: "Өскемен" },
  { id: "9", label: "Семей" },
  { id: "10", label: "Атырау" },
  { id: "11", label: "Костанай" },
  { id: "12", label: "Кызылорда" },
  { id: "13", label: "Орал" },
  { id: "14", label: "Петропавл" },
  { id: "15", label: "Актау" },
  { id: "16", label: "Түркістан" },
  { id: "17", label: "Көкшетау" },
  { id: "18", label: "Талдықорған" },
];

const subjects = [
  { id: "1", label: "Математика" },
  { id: "2", label: "Физика" },
  { id: "3", label: "Химия" },
  { id: "4", label: "Биология" },
  { id: "5", label: "История" },
  { id: "6", label: "География" },
  { id: "7", label: "Информатика" },
  { id: "8", label: "Английский язык" },
];

const types = [
  { id: "1", label: "Частичная" },
  { id: "2", label: "Полная" },
  { id: "3", label: "Временная" },
];

export default function VacancyPage() {
  const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(
    new Set(["1", "2", "3", "4"])
  );

  return (
    <Container>
      <div className="py-[24px] border-b border-[#E5E7EB]">
        <h1 className="text-3xl font-semibold text-[#111827]">
          Вакансии для учителей
        </h1>
        <p className="mt-2 text-sm text-[#6B7280]">
          Казахстан · {mockVacancies.length} активных вакансий
        </p>
      </div>

      <div className="grid grid-cols-[20%_1fr] gap-6 mt-8 py-6">
        <div className="filter border border-gray-200 rounded-xl px-4 py-[14px]">
          <div className="flex items-center relative">
            <input
              className="py-2 bg-[#F9FAFB] px-[42px] border border-gray-200 rounded-lg outline-none w-full"
              type="text"
              placeholder="Поиск по вакансиям..."
            />
            <Search
              size={16}
              className="absolute top-1/2 -translate-y-1/2 left-3 text-[#9CA3AF]"
            />
          </div>

          <Accordion
            className="w-full"
            expandedKeys={expandedKeys}
            allowsMultipleExpanded
            onExpandedChange={setExpandedKeys}
            variant="default"
          >
            <Accordion.Item id="1" className="mt-2">
              <Accordion.Heading>
                <Accordion.Trigger className="rounded-xl">
                  Город
                  <Accordion.Indicator>
                    {expandedKeys.has("1") ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  {cities.map((city) => (
                    <div key={city.id} className="flex items-center gap-3 mb-4">
                      <input type="checkbox" />
                      {city.label}
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item id="2" className="mt-2">
              <Accordion.Heading className="">
                <Accordion.Trigger className="rounded-xl ">
                  Предмет
                  <Accordion.Indicator>
                    {expandedKeys.has("2") ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  {subjects.map((subject) => (
                    <div
                      key={subject.id}
                      className="flex items-center gap-3 mb-4"
                    >
                      <input type="checkbox" />
                      {subject.label}
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item id="3" className="mt-2">
              <Accordion.Heading className="">
                <Accordion.Trigger className="rounded-xl ">
                  Зарплата
                  <Accordion.Indicator>
                    {expandedKeys.has("3") ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  <Slider
                    className="w-full text-center flex items-center justify-center mb-4"
                    defaultValue={[100, 500]}
                    formatOptions={{ currency: "KZT", style: "currency" }}
                    maxValue={1000}
                    minValue={0}
                    step={50}
                  >
                    <Slider.Output />
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
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item id="4" className="mt-2">
              <Accordion.Heading className="">
                <Accordion.Trigger className="rounded-xl ">
                  Тип занятности
                  <Accordion.Indicator>
                    {expandedKeys.has("4") ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </Accordion.Indicator>
                </Accordion.Trigger>
              </Accordion.Heading>
              <Accordion.Panel>
                <Accordion.Body>
                  {types.map((type) => (
                    <div key={type.id} className="flex items-center gap-3 mb-4">
                      <input type="checkbox" />
                      {type.label}
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          <Button className="w-full font-semibold">
            <ListFilter />
            Применить фильтры
          </Button>
        </div>

        <div className="grid gap-3 content-start">
          <p className="text-sm text-[#6B7280]">
            Найдено {mockVacancies.length} вакансий
          </p>
          {mockVacancies.map((vacancy) => (
            <article
              key={vacancy.id}
              className="flex items-start justify-between gap-4 rounded-2xl border border-[#E5E7EB] p-4"
            >
              <div className="flex min-w-0 items-start gap-3">
                <div className="min-w-0">
                  <h2 className="truncate text-[20px] font-semibold leading-6 text-[#111827]">
                    {vacancy.title}
                  </h2>
                  <p className="mt-1 text-sm text-[#6B7280]">
                    {vacancy.school} · {vacancy.city}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {vacancy.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full ${
                          tag === "Полная"
                            ? "bg-[#EAF3DE]"
                            : tag === "Срочно"
                            ? "bg-[#FAEEDA]"
                            : "bg-[#E6F1FB]"
                        } px-2.5 py-1 text-xs text-[#6B7280]`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-end gap-2">
                <p className="text-2xl font-semibold text-[#111827]">
                  {vacancy.salary}
                </p>
                <p className="text-sm text-[#9CA3AF]">{vacancy.dateLabel}</p>
                <Button>Откликнуться</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
