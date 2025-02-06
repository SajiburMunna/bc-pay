import { Metadata } from "next";

import LoginForm from "@/features/Login/LoginForm";

export const metadata: Metadata = {
  title: "BCPay | Log In",
  description: "Log in to your BCPay account",
};

function Page() {
  return <LoginForm />;
}

export default Page;
