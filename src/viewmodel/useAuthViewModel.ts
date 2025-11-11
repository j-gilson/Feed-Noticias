import { useState } from "react";

export function useAuthViewModel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  function login(): boolean {
    if (email === "admin@ifpi.com" && password === "123456") {
      return true;
    }

    setError("Usuário ou senha inválidos");
    return false;
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    login,
  };
}
