import { Card } from "@/components/Card";
import { HRStats } from "@/data/hr-stats";
import { cn } from "@/utilits";

function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {HRStats.map((card, index) => (
        <Card.Root key={index}>
          <Card.Header>{card.title}</Card.Header>
          <Card.Body>
            <p
              className={cn("text-primary font-bold", {
                "text-red-500": index === 3,
              })}
            >
              {card.value}
            </p>
          </Card.Body>
        </Card.Root>
      ))}
    </div>
  );
}

export default Stats;
