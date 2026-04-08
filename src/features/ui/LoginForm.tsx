"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useAuth } from "../auth-by-email/model/use-auth";

const schema = z.object({
  email: z.string().email("Неверный email"),
  password: z.string().min(6, "Минимум 6 символов"),
});

type FormData = z.infer<typeof schema>;

export const LoginForm = () => {
  const { signIn } = useAuth();
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
    try {
      await signIn(data.email, data.password);
    } catch (error) {
      console.error(error);
      setSubmitError(
        error instanceof Error ? error.message : "Не удалось выполнить вход",
      );
    }
  };

  return (
    <form method="post" noValidate onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Email" type="email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("password")} placeholder="Пароль" type="password" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Входим..." : "Войти"}
      </button>
      {submitError ? (
        <p className="mt-2 text-sm text-red-600">{submitError}</p>
      ) : null}
    </form>
  );
};
