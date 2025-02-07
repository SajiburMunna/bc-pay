import { Metadata } from "next";

import Stats from "@/features/Ceo/Stats";
import TopRulesBreakers from "@/features/Ceo/TopRulesBreakers";

export const metadata: Metadata = {
  title: "BCPay | CEO",
  description: "Log in to your BCPay account",
};
function Page() {
  return (
    <div className="space-y-6">
      <Stats />
      <TopRulesBreakers />
    </div>
  );
}

export default Page;
