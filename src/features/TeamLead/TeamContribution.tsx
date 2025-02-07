"use client";
import { useState } from "react";

import Button from "@/components/Button";
import { Card } from "@/components/Card";
import Table from "@/components/Table";
import Modal from "@/components/Modal";
import { TeamContributionData } from "@/data/team-contribution-data";

function TeamContribution() {
  const [isOpenReportForm, setIsOpenReportForm] = useState(false);

  const handleReportForm = () => {
    setIsOpenReportForm(!isOpenReportForm);
  };

  const BlockTableData = TeamContributionData.map((item, index) => (
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
      <div className="mb-4">
        <h1 className="text-2xl font-semibold">Welcome Team Lead</h1>
        <p className="text-gray-600">
          This is a simple page for the team lead role.
        </p>
      </div>
      <Card.Root>
        <Card.Header className="flex justify-between items-center">
          <h2>Team Contribution</h2>
          <Button onClick={handleReportForm}>Report</Button>
        </Card.Header>
        <Card.Body>
          <div className="overflow-x-auto md:block hidden">
            <Table>
              <Table.Header>
                <Table.Column className="rounded-l-full">
                  Employee ID
                </Table.Column>
                <Table.Column>Name</Table.Column>
                <Table.Column>Total Rules Break</Table.Column>
                <Table.Column>Fine(BDT)</Table.Column>
                <Table.Column className="rounded-r-full" align="end">
                  Break Rules
                </Table.Column>
              </Table.Header>

              {TeamContributionData.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Column>{item.employee_id}</Table.Column>
                  <Table.Column>{item.name}</Table.Column>
                  <Table.Column>{item.rules_break}</Table.Column>
                  <Table.Column>{item.fine}</Table.Column>
                  <Table.Column align="end">
                    {item.rules.map((r, index) => {
                      return <div key={index}>{r}</div>;
                    })}
                  </Table.Column>
                </Table.Row>
              ))}
            </Table>
          </div>
          <div className="block md:hidden">{BlockTableData}</div>
        </Card.Body>
      </Card.Root>
      <Modal isOpen={isOpenReportForm} onClose={handleReportForm}>
        <Modal.Header>
          <h2>Report Form</h2>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque velit
          eveniet fugiat doloribus esse assumenda ducimus, quis alias, debitis
          odit nemo placeat necessitatibus obcaecati laboriosam corrupti sunt
          adipisci aperiam sit.
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TeamContribution;
