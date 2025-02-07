import BCCalculations from "@/features/HR/BCCalculations";
import Stats from "@/features/HR/Stats";
import Violations from "@/features/HR/Violations";

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
