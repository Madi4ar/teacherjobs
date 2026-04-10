'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { useAuth } from '../model/use-auth';
import { registerByEmailRequest } from '../api/api';

const schema = z
  .object({
    fullName: z.string().min(2, 'Введите ФИО'),
    email: z.string().email('Неверный email'),
    password: z.string().min(6, 'Минимум 6 символов'),
    confirmPassword: z.string().min(6, 'Минимум 6 символов'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Пароли не совпадают',
  });

type FormData = z.infer<typeof schema>;

export const RegisterForm = () => {
  const { signUp } = useAuth();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    const errorMessage = await registerByEmailRequest(
      signUp,
      data.email,
      data.password,
    );
    setSubmitError(errorMessage);
  };

  return (
    <form
      method="post"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4">
      <label className="block">
        <span className="mb-1 block text-xs text-[#6B7280]">ФИО</span>
        <input
          {...register('fullName')}
          type="text"
          placeholder="Айгуль Сагимбаева"
          className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm outline-none placeholder:text-[#D1D5DB] focus:border-[#1E63B6]"
        />
        {errors.fullName ? (
          <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
        ) : null}
      </label>

      <label className="block">
        <span className="mb-1 block text-xs text-[#6B7280]">Email</span>
        <input
          {...register('email')}
          type="email"
          placeholder="teacher@mail.kz"
          className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm outline-none placeholder:text-[#D1D5DB] focus:border-[#1E63B6]"
        />
        {errors.email ? (
          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
        ) : null}
      </label>

      <label className="block">
        <span className="mb-1 block text-xs text-[#6B7280]">Пароль</span>
        <input
          {...register('password')}
          type="password"
          placeholder="Минимум 6 символов"
          className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm outline-none placeholder:text-[#D1D5DB] focus:border-[#1E63B6]"
        />
        {errors.password ? (
          <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
        ) : null}
      </label>

      <label className="block">
        <span className="mb-1 block text-xs text-[#6B7280]">Подтвердить пароль</span>
        <input
          {...register('confirmPassword')}
          type="password"
          placeholder="Повторите пароль"
          className="w-full rounded-md border border-[#E5E7EB] px-3 py-2 text-sm outline-none placeholder:text-[#D1D5DB] focus:border-[#1E63B6]"
        />
        {errors.confirmPassword ? (
          <p className="mt-1 text-xs text-red-600">
            {errors.confirmPassword.message}
          </p>
        ) : null}
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-full rounded-md bg-[#1E63B6] py-2.5 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? 'Регистрируем...' : 'Зарегистрироваться'}
      </button>

      {submitError ? <p className="mt-2 text-sm text-red-600">{submitError}</p> : null}
    </form>
  );
};
