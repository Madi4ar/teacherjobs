'use client';

import Container from '@/shared/container/ui/Container';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/shared/icons/logo-ustaz-joly.svg';
import { useState } from 'react';
import { LoginForm } from '@/features/auth-by-email/ui/LoginForm';
import { RegisterForm } from '@/features/auth-by-email/ui/RegisterForm';
import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  MapPin,
  School,
  Sparkles,
} from 'lucide-react';

export default function AuthView() {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [accountType, setAccountType] = useState<'teacher' | 'school'>(
    'teacher',
  );
  const isTeacher = accountType === 'teacher';
  const isRegister = authMode === 'register';

  return (
    <>
      <div className="flex flex-wrap min-h-screen">
        <div className="py-[48px] flex flex-col justify-between px-[40px] w-[40%] h-screen hidden md:flex bg-gradient-to-br from-[#EBF4FF] via-[#F0F4FF] to-[#E8F0FE]">
          <div className="">
            <Link href="/">
              <Image src={logo} alt="Logo" />
            </Link>

            <p className="text-[26px] font-medium mt-[40px]">
              Войдите в аккаунт
            </p>
            <span className="mt-2 text-[#6B7280]">
              Тысячи учителей и школ уже нашли друг друга на TeacherJobs.
            </span>

            <div className="flex flex-col mt-[32px] flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full border border-gray-200 shadow-md">
                  <GraduationCap />
                </div>
                <p className="text-[#374151]">200 000+ учителей в базе</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full border border-gray-200 shadow-md">
                  <School />
                </div>
                <p className="text-[#374151]">Вакансии от лучших школ</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full border border-gray-200 shadow-md">
                  <Sparkles />
                </div>
                <p className="text-[#374151]">AI-подбор за секунды</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col">
            <p className="text-xs uppercase tracking-[0.16em] text-[#9CA3AF]">
              Пример профиля
            </p>

            <div className="mt-3 max-w-[420px] rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-[0_6px_20px_rgba(15,23,42,0.06)]">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E63B6] text-base text-white">
                  AC
                </div>
                <div className="flex-1">
                  <p className="text-lg font-semibold text-[#111827]">
                    Айгуль Сагимбаева
                  </p>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <p className="text-sm text-[#6B7280]">
                      Математика · Алматы
                    </p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#DCFCE7] px-2.5 py-0.5 text-xs text-[#16A34A]">
                      <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
                      Открыта
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-sm">
                    <span className="tracking-[0.18em] text-[#F59E0B]">
                      ★★★★★
                    </span>
                    <span className="text-[#6B7280]">4.9 · 24 отзыва</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Алгебра', 'ЕНТ', 'Олимпиады'].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#EFF6FF] px-2.5 py-1 text-xs text-[#2563EB]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-sm text-[#9CA3AF]">
                    <MapPin size={14} />
                    <p>РФМШ Алматы · 12 лет опыта</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 h-[2px] w-full rounded-full bg-[#DBEAFE]" />
            </div>

            <div className="mt-4 grid max-w-[420px] grid-cols-3 gap-2.5">
              {[
                { value: '200k+', label: 'Учителей' },
                { value: '1 200+', label: 'Школ' },
                { value: '3 400+', label: 'Вакансий' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-[#E5E7EB] bg-white py-3 text-center">
                  <p className="text-xl font-semibold text-[#1E63B6]">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-xs text-[#9CA3AF]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex h-screen w-full flex-col items-center justify-center px-6 py-5 md:w-[60%] md:px-12">
          <div className="flex items-center justify-center w-full">
            <div className="inline-flex rounded-md border border-[#E5E7EB] bg-white p-0.5">
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className={`rounded-[5px] px-3 py-1 text-xs ${
                  authMode === 'login'
                    ? 'bg-[#F3F4F6] font-medium text-[#111827]'
                    : 'text-[#6B7280]'
                }`}>
                Войти
              </button>
              <button
                type="button"
                onClick={() => setAuthMode('register')}
                className={`rounded-[5px] px-3 py-1 text-xs ${
                  authMode === 'register'
                    ? 'bg-[#F3F4F6] font-medium text-[#111827]'
                    : 'text-[#6B7280]'
                }`}>
                Регистрация
              </button>
            </div>
          </div>

          <div className="mx-auto mt-8 w-full md:w-1/2 flex flex-col items-center justify-center">
            <h2 className="text-[34px] font-semibold text-[#111827]">
              {isRegister ? 'Создайте аккаунт' : 'Добро пожаловать'}
            </h2>
            <p className="mt-1 text-sm text-[#6B7280]">
              {isRegister
                ? 'Введите данные для регистрации'
                : 'Введите данные для входа в аккаунт'}
            </p>

            <div className="mt-6 w-full">
              <p className="text-xs text-[#6B7280]">Тип аккаунта</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setAccountType('teacher')}
                  className={`rounded-xl border p-3 text-left ${
                    isTeacher
                      ? 'border-[#1E63B6] bg-[#EFF6FF]'
                      : 'border-[#E5E7EB] bg-white'
                  }`}>
                  <div
                    className={`mb-2 inline-flex rounded-full p-1.5 ${
                      isTeacher
                        ? 'bg-[#1E63B6] text-white'
                        : 'bg-[#F3F4F6] text-[#9CA3AF]'
                    }`}>
                    <BriefcaseBusiness size={14} />
                  </div>
                  <p
                    className={`text-sm font-semibold ${
                      isTeacher ? 'text-[#1E63B6]' : 'text-[#374151]'
                    }`}>
                    Я учитель
                  </p>
                  <p className="mt-0.5 text-xs text-[#6B7280]">Ищу работу</p>
                </button>
                <button
                  type="button"
                  onClick={() => setAccountType('school')}
                  className={`rounded-xl border p-3 text-left ${
                    !isTeacher
                      ? 'border-[#1E63B6] bg-[#EFF6FF]'
                      : 'border-[#E5E7EB] bg-white'
                  }`}>
                  <div
                    className={`mb-2 inline-flex rounded-full p-1.5 ${
                      !isTeacher
                        ? 'bg-[#1E63B6] text-white'
                        : 'bg-[#F3F4F6] text-[#9CA3AF]'
                    }`}>
                    <Building2 size={14} />
                  </div>
                  <p
                    className={`text-sm font-semibold ${
                      !isTeacher ? 'text-[#1E63B6]' : 'text-[#374151]'
                    }`}>
                    Я школа
                  </p>
                  <p className="mt-0.5 text-xs text-[#6B7280]">
                    Размещаю вакансии
                  </p>
                </button>
              </div>
            </div>

            <div className="mt-4 space-y-4 w-full">
              {isRegister ? <RegisterForm role={accountType} /> : <LoginForm />}
            </div>

            <p className="mt-4 text-center text-sm text-[#6B7280]">
              {isRegister ? 'Уже есть аккаунт?' : 'Нет аккаунта?'}
              <button
                type="button"
                className="ml-1 font-medium text-[#1E63B6]"
                onClick={() => setAuthMode(isRegister ? 'login' : 'register')}>
                {isRegister ? 'Войти' : 'Зарегистрироваться'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
