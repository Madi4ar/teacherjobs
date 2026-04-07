import Container from "@/shared/container/ui/Container";
import Image from "next/image";
import Link from "next/link";
import logo from "@/shared/icons/logo-ustaz-joly.svg";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full bg-[#F9FAFB]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 items-start py-[42px] gap-8">
            <div className="flex flex-col gap-4">
              <Link href="/">
                <Image src={logo} alt="Logo" />
              </Link>

              <p className="text-[#6B7280]">
                Платформа для поиска работы учителями и педагогами в Казахстане.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-medium text-[18px]">Учителям</p>
              <ul className="flex flex-col gap-2 text-[#6B7280]">
                <li>
                  <Link href="/">Найти вакансию</Link>
                </li>
                <li>
                  <Link href="/">Создать профиль</Link>
                </li>
                <li>
                  <Link href="/">Личный кабинет</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-medium text-[18px]">Школам</p>
              <ul className="flex flex-col gap-2 text-[#6B7280]">
                <li>
                  <Link href="/">Разместить вакансию</Link>
                </li>
                <li>
                  <Link href="/">Найти учителя</Link>
                </li>
                <li>
                  <Link href="/">Тарифы</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-medium text-[18px]">Компания</p>
              <ul className="flex flex-col gap-2 text-[#6B7280]">
                <li>
                  <Link href="/">О нас</Link>
                </li>
                <li>
                  <Link href="/">Блог</Link>
                </li>
                <li>
                  <Link href="/">Контакты</Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
