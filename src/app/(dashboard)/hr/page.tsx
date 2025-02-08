import { Metadata } from "next";

import BCCalculations from "@/features/Hr/BCCalculations";
import Stats from "@/features/Hr/Stats";
import Violations from "@/features/Hr/Violations";

export const metadata: Metadata = {
  title: "BCPay | HR",
  description: "Log in to your BCPay account",
};

function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Overview</h1>
      <Stats />
      <Violations />
      <BCCalculations />
    </div>
  );
}

export default Page;
