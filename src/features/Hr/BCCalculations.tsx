import Button from "@/components/Button";
import { Card } from "@/components/Card";
import Table from "@/components/Table";
import { BCCalculationsData } from "@/data/bc-calculation";

const TableHeader = [
  "Employee ID",
  "Name",
  "Total Rules Break",
  "Break Rules",
  "Fine (BDT)",
];

function BCCalculations() {
  const BlockTableData = BCCalculationsData.map((item, index) => (
    <Table.BlockRow
      key={index}
      data={{
        "Employee ID": item.employee_id,
        Name: item.name,
        "Total Rules Break": item.rules_break,
        "Fine (BDT)": item.fine,
        "Break Rules": item.rules.map((r, index) => {
          return <p key={index}>{r}</p>;
        }),
      }}
    />
  ));
  return (
    <div>
      <Card.Root>
        <Card.Header className="flex justify-between items-center">
          <h2>BC Calculations</h2>
          <Button>Download Reports</Button>
        </Card.Header>
        <Card.Body>
          <div className="overflow-x-auto md:block hidden">
            <Table>
              <Table.Header>
                {TableHeader.map((item, index) => (
                  <Table.Column
                    key={index}
                    className="font-bold"
                    align={index === 3 || index === 4 ? "end" : "start"}
                  >
                    {item}
                  </Table.Column>
                ))}
              </Table.Header>

              {BCCalculationsData.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Column>{item.employee_id}</Table.Column>
                  <Table.Column>{item.name}</Table.Column>
                  <Table.Column>{item.rules_break}</Table.Column>
                  <Table.Column align="end">
                    {item.rules.map((r, index) => {
                      return <div key={index}>{r} -</div>;
                    })}
                  </Table.Column>
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

export default BCCalculations;
