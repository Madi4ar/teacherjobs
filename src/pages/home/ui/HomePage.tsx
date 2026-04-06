import Container from "@/shared/container/ui/Container";
import { ArrowRight, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function HomePage() {
  interface Vacancies {
    subject: string;
    school: string;
    salary: number;
    published: string;
  }

  interface Trainers {
    name: string;
    subject: string;
    rating: number;
    status: string;
  }
  const items = [
    "Математика",
    "Начальные классы",
    "Алматы",
    "Астана",
    "Английский язык",
  ];

  const vacancies: Vacancies[] = [
    {
      subject: "математики",
      school: "Школа-гимназия №34 · Алматы",
      salary: 250000,
      published: "2 часа назад",
    },
    {
      subject: "английского языка",
      school: "НИШ Астана · Астана",
      salary: 350000,
      published: "3 часа назад",
    },
    {
      subject: "начальных классов",
      school: "КТЛ №1 · Алматы",
      salary: 200000,
      published: "1 день назад",
    },
  ];

  const trainers: Trainers[] = [
    {
      name: "Айгуль Сагимбаева",
      subject: "Математика · Алматы",
      rating: 4,
      status: "Доступен",
    },
    {
      name: "Даулет Кусаинов",
      subject: "Физика · Астана",
      rating: 5,
      status: "Открыт к офферам",
    },
    {
      name: "Мария Николаева",
      subject: "Английский · Шымкент",
      rating: 5,
      status: "Доступен",
    },
    {
      name: "Айгуль Сагимбаева",
      subject: "Математика · Алматы",
      rating: 4,
      status: "Доступен",
    },
    {
      name: "Даулет Кусаинов",
      subject: "Физика · Астана",
      rating: 5,
      status: "Открыт к офферам",
    },
    {
      name: "Мария Николаева",
      subject: "Английский · Шымкент",
      rating: 5,
      status: "Доступен",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Доступен":
        return "border-[#3B6D11] bg-[#EAF3DE]";
      case "Открыт к офферам":
        return "border-[#185FA5] bg-[#E6F1FB]";
      case "В процессе":
        return "border-[#185FA5] bg-[#E6F1FB]";
      case "Закрыт":
        return "border-[#854F0B] bg-[#FAEEDA]";
    }
  };

  return (
    <>
      <div className="flex flex-col h-[calc(100vh-69px)] bg-[#F9FAFB]">
        <Container className="h-full">
          <div className="flex flex-col items-center justify-center py-[72px] h-full">
            <span className="text-[#185FA5] bg-[#E6F1FB] rounded-lg px-[12px] py-[5px] font-medium text-sm">
              Казахстан · 200 000+ учителей
            </span>
            <h1 className="text-[48px] font-bold text-center mt-[24px]">
              Хороший учитель меняет всё.
            </h1>
            <p className="text-center text-[18px] text-[#6B7280] mt-[24px] leading-relaxed">
              Помогаем школам находить лучших педагогов из 200 000 специалистов{" "}
              <br />
              Казахстана — а учителям находить работу, которую они заслуживают.
            </p>

            <div className="relative w-full md:w-1/2 mt-[32px]">
              <input
                type="text"
                placeholder="Предмет, город или имя учителя..."
                className="w-full rounded-lg border border-[#E5E7EB] pl-[16px] pr-[170px] py-[17px]  outline-none"
              />

              <button className="absolute flex items-center gap-4 right-[16px] top-1/2 -translate-y-1/2 bg-[#185FA5] px-[24px] py-[10px] rounded-lg">
                <SearchIcon className="w-5 h-5 text-white" />
                <p className="text-white text-xl font-medium">Найти</p>
              </button>
            </div>

            <div className="mt-[24px] flex flex-wrap gap-2">
              {items.map((item) => (
                <button
                  key={item}
                  className="text-[#6B7280] bg-[#F9FAFB] rounded-full px-[12px] py-[5px] font-medium text-sm border border-gray-200"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-[64px] flex items-center gap-8">
              <div className="flex flex-col items-center justify-center border-r border-gray-200 pr-8">
                <p className="text-3xl font-bold text-center">200 000+</p>
                <p className="text-lg text-gray-400">учителей</p>
              </div>
              <div className="flex flex-col items-center justify-center border-r border-gray-200 pr-8">
                <p className="text-3xl font-bold">1 240</p>
                <p className="text-lg text-gray-400">вакансий</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold">14</p>
                <p className="text-lg text-gray-400">городов</p>
              </div>
            </div>
          </div>

          <div className="py-[64px]">
            <div className="flex items-center justify-between">
              <p className="font-medium text-[20px]">Свежие вакансии</p>
              <Link className="text-[#185FA5] flex items-center gap-2" href="#">
                Все вакансии
                <ArrowRight />
              </Link>
            </div>

            <div className="mt-[24px] flex flex-col gap-4">
              {vacancies.map((vacancy) => (
                <div
                  className="border border-gray-200 rounded-xl p-[21px] flex flex-col gap-3 hover:border-blue-500 transition-all duration-300 cursor-pointer"
                  key={vacancy.salary}
                >
                  <div className="flex flex-col md:flex-row w-full md:items-center items-start justify-between flex flex-wrap gap-3">
                    <p className="font-medium text-xl">
                      Учитель {vacancy.subject}
                    </p>
                    <p className="font-semibold text-xl">{vacancy.salary} ₸</p>
                  </div>

                  <div className="flex w-full items-center justify-between">
                    <p className="text-sm text-[#6B7280]">{vacancy.school}</p>
                    <p className="text-sm text-[#6B7280]">
                      {vacancy.published}
                    </p>
                  </div>

                  <div className="flex w-full gap-2 items-center">
                    <p className="text-[#3B6D11] bg-[#EAF3DE] rounded-lg px-2 py-1">
                      Полная занятость
                    </p>
                    <p className="text-[#854F0B] bg-[#FAEEDA] rounded-lg px-2 py-1">
                      Срочно
                    </p>

                    <p className="text-[#185FA5] bg-[#E6F1FB] rounded-lg px-2 py-1">
                      Срочно
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-[64px]">
            <div className="flex items-center justify-between">
              <p className="font-medium text-[20px]">Свежие вакансии</p>
              <Link className="text-[#185FA5] flex items-center gap-2" href="#">
                Найти учителя
                <ArrowRight />
              </Link>
            </div>

            <div className="w-full grid grid-cols-3 gap-4">
              {trainers.map((trainer) => (
                <div className="border border-gray-200 rounded-xl flex flex-col items-center justify-center gap-4 py-8 px-2">
                  <p className="font-semibold text-lg">{trainer.name}</p>
                  <p className=" text-base">{trainer.subject}</p>
                  <p className="text-lg">10/{trainer.rating}</p>
                  <span
                    className={`${getStatusColor(
                      trainer.status,
                    )} rounded-xl py-[4px] px-[9px]`}
                  >
                    {trainer.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default HomePage;
