import { Metadata } from "next";

import TeamContribution from "@/features/TeamLead/TeamContribution";

export const metadata: Metadata = {
  title: "BCPay | Team Lead",
  description: "Log in to your BCPay account",
};
function Page() {
  return <TeamContribution />;
}

export default Page;
