import { Card } from "@/components/Card";
import Table from "@/components/Table";
import { ViolationsList } from "@/data/vailatiolnslist";

const TableHeader = ["Employee ID", "Name", "Rule", "Date", "Fine (BDT)"];

function Violations() {
  const BlockTableData = ViolationsList.map((item, index) => (
    <Table.BlockRow
      key={index}
      data={{
        "Employee ID": item.employee_id,
        Name: item.name,
        Rule: item.rule,
        Date: item.date,
        "Fine (BDT)": item.fine,
      }}
    />
  ));
  return (
    <div>
      <Card.Root>
        <Card.Header>Violations</Card.Header>
        <Card.Body>
          <div className="overflow-x-auto md:block hidden">
            <Table>
              <Table.Header>
                {TableHeader.map((item, index) => (
                  <Table.Column
                    key={index}
                    className="font-bold"
                    align={index === 4 ? "end" : "start"}
                  >
                    {item}
                  </Table.Column>
                ))}
              </Table.Header>

              {ViolationsList.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Column>{item.employee_id}</Table.Column>
                  <Table.Column>{item.name}</Table.Column>
                  <Table.Column>{item.rule}</Table.Column>
                  <Table.Column>{item.date}</Table.Column>
                  <Table.Column align="end">{item.fine}</Table.Column>
                </Table.Row>
              ))}
            </Table>
          </div>
          <div className="block md:hidden">{BlockTableData}</div>
        </Card.Body>
      </Card.Root>
    </div>
  );
}

export default Violations;
