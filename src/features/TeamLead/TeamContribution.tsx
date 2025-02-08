"use client";
import { useState } from "react";

import Button from "@/components/Button";
import { Card } from "@/components/Card";
import Table from "@/components/Table";
import { TeamContributionData } from "@/data/team-contribution-data";
import ReportForm from "./ReportForm";

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
                <Table.Column className="font-bold">Employee ID</Table.Column>
                <Table.Column className="font-bold">Date</Table.Column>
                <Table.Column className="font-bold">Name</Table.Column>
                <Table.Column className="font-bold">Fine(BDT)</Table.Column>
                <Table.Column className="font-bold" align="end">
                  Break Rules
                </Table.Column>
              </Table.Header>

              {TeamContributionData.map((item, index) => (
                <Table.Row key={index}>
                  <Table.Column>{item.employee_id}</Table.Column>
                  <Table.Column>{item.date}</Table.Column>
                  <Table.Column>{item.name}</Table.Column>
                  <Table.Column>{item.fine}</Table.Column>
                  <Table.Column align="end">
                    {item.rules.map((r, index) => {
                      return <div key={index}>{r} -</div>;
                    })}
                  </Table.Column>
                </Table.Row>
              ))}
            </Table>
          </div>
          <div className="block md:hidden">{BlockTableData}</div>
        </Card.Body>
      </Card.Root>
      <ReportForm
        isOpenReportForm={isOpenReportForm}
        handleReportForm={handleReportForm}
      />
    </div>
  );
}

export default TeamContribution;
