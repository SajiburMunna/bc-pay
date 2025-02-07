import { Card } from "@/components/Card";
import { ceostats } from "@/data/ceo-stats";

function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ceostats.map((card, index) => (
        <Card.Root key={index}>
          <Card.Header>{card.title}</Card.Header>
          <Card.Body>
            <p className="text-primary font-bold">{card.value}</p>
          </Card.Body>
        </Card.Root>
      ))}
    </div>
  );
}

export default Stats;
