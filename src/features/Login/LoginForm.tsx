"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import Button from "@/components/Button";
import InputField from "@/components/InputField";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Usename"
        placeholder="Enter your email"
        name="username"
        onChange={handleChange}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
        onChange={handleChange}
      />
      <Button>Log In</Button>
    </form>
  );
}
