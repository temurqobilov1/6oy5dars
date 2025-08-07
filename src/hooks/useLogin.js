import { useState } from "react";

export function useLogin() {
  const [isPanding, setIsPanding] = useState(false);

  const login = (email, password) => {
    console.log(email, password);
  };

  return { login, isPanding };
}
