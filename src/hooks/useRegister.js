import { useState } from "react";

export function useRegister() {
  const [isPanding, setIsPanding] = useState(false);
  const register = async (firstName, lastName, email, password) => {
    console.log(firstName, lastName, email, password);
  };

  return { register, isPanding };
}
