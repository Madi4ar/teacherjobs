type SignInFn = (email: string, password: string) => Promise<void>;
type SignUpFn = (
  email: string,
  password: string,
  role: "teacher" | "school",
) => Promise<void>;

const getReadableAuthError = (error: unknown) => {
  if (!navigator.onLine) {
    return "Нет подключения к интернету. Проверьте сеть и попробуйте снова.";
  }

  if (typeof error === "object" && error !== null) {
    const authError = error as { code?: string; message?: string; name?: string };

    if (
      authError.name === "AuthRetryableFetchError" ||
      authError.message === "Failed to fetch"
    ) {
      return "Не удалось подключиться к серверу авторизации. Попробуйте еще раз.";
    }

    if (authError.code === "invalid_credentials") {
      return "Неверный email или пароль";
    }

    if (authError.message === "Invalid login credentials") {
      return "Неверный email или пароль";
    }

    if (typeof authError.message === "string" && authError.message.length > 0) {
      return authError.message;
    }
  }

  return "Не удалось выполнить вход";
};

export const loginByEmailRequest = async (
  signIn: SignInFn,
  email: string,
  password: string,
) => {
  try {
    await signIn(email, password);
    return null;
  } catch (error) {
    console.error(error);
    return getReadableAuthError(error);
  }
};

export const registerByEmailRequest = async (
  signUp: SignUpFn,
  email: string,
  password: string,
  role: "teacher" | "school",
) => {
  try {
    await signUp(email, password, role);
    return null;
  } catch (error) {
    console.error(error);
    return getReadableAuthError(error);
  }
};
