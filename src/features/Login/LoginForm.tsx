"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import CookieService from "@/services/CookieService";

export default function LoginForm() {
  const router = useRouter();

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
    CookieService.set("role", formData.username);
    router.push("/");
  };

  console.log("formData", formData);

  return (
    <div className="w-96 mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-4 text-red-600">Log In</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <InputField
          label="Usename"
          placeholder="Enter admin, hr, or teamlead"
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
        <Button className="w-full" actionType="submit">
          Log In
        </Button>
      </form>
    </div>
  );
}
