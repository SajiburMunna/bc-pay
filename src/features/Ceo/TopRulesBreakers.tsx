import { Card } from "@/components/Card";
import Table from "@/components/Table";
import { TopRuleBreakers } from "@/data/top-rule-breakers";

function TopRulesBreakers() {
  const BlockTableData = TopRuleBreakers.map((item, index) => (
    <Table.BlockRow
      key={index}
      data={{
        "Employee ID": item.employee_id,
        Name: item.name,
        "Team Lead": item.team_lead,
        "Break Rules": item.ruleBreaks,
        "Fine (BDT)": item.fine,
      }}
    />
  ));
  return (
    <Card.Root>
      <Card.Header>Top 5 Rules Breakers</Card.Header>
      <Card.Body>
        <div className="overflow-x-auto md:block hidden">
          <Table>
            <Table.Header>
              <Table.Column className="font-bold">Employee ID</Table.Column>
              <Table.Column className="font-bold">Name</Table.Column>
              <Table.Column className="font-bold">Team Lead</Table.Column>
              <Table.Column className="font-bold text-red-500">
                Break Rules
              </Table.Column>
              <Table.Column className="font-bold" align="end">
                Fine(BDT)
              </Table.Column>
            </Table.Header>

            {TopRuleBreakers.map((item, index) => (
              <Table.Row key={index}>
                <Table.Column>{item.employee_id}</Table.Column>
                <Table.Column>{item.name}</Table.Column>
                <Table.Column>{item.team_lead}</Table.Column>
                <Table.Column>{item.ruleBreaks}</Table.Column>
                <Table.Column align="end">{item.fine}</Table.Column>
              </Table.Row>
            ))}
          </Table>
        </div>
        <div className="block md:hidden">{BlockTableData}</div>
      </Card.Body>
    </Card.Root>
  );
}

export default TopRulesBreakers;
