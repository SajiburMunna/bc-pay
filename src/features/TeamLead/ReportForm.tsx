import { useState } from "react";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import DropdownMenu from "@/components/DropdownMenu";
import Modal from "@/components/Modal";

const options = [
  { value: "0", label: "Select a rule" },
  { value: "1", label: "Fashionably late to meetings - 200 BDT" },
  { value: "2", label: "Shoes outside the rack - 50 BDT" },
  { value: "3", label: "Leaving lights on - 100 BDT" },
  { value: "4", label: "Not cleaning the coffee machine - 150 BDT" },
  { value: "5", label: "Using office supplies for personal use - 75 BDT" },
  { value: "6", label: "Not logging out of the system - 120 BDT" },
  { value: "7", label: "Eating at the workstation - 80 BDT" },
];

const employees = [
  {
    value: "0",
    label: "Select an employee",
  },
  {
    value: "EMP001",
    label: "John Doe",
  },
  {
    value: "EMP002",
    label: "Jane xDoe",
  },
  {
    value: "EMP003",
    label: "John Smith",
  },
  {
    value: "EMP004",
    label: "Jane YSmith",
  },
  {
    value: "EMP005",
    label: "John DDoe",
  },
];

type Option = {
  value: string;
  label: string;
};

interface ReportFormProps {
  isOpenReportForm: boolean;
  handleReportForm: () => void;
}

function ReportForm({ isOpenReportForm, handleReportForm }: ReportFormProps) {
  const [selectedRuleOption, setSelectedRuleOption] = useState(options[0]);
  const [selectedEmployeeOption, setSelectedEmployeeOption] = useState(
    employees[0]
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleRuleOptionChange = (value: Option) => {
    setSelectedRuleOption(value);
  };

  const handleEmployeeOptionChange = (value: Option) => {
    setSelectedEmployeeOption(value);
  };

  return (
    <div>
      <Modal isOpen={isOpenReportForm} onClose={handleReportForm}>
        <Modal.Header>
          <h2>Report Form</h2>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-black">Select the rules</p>
              <DropdownMenu
                options={options}
                onChange={handleRuleOptionChange}
                buttonText={selectedRuleOption.label}
              />
            </div>
            <div>
              <p className="mb-2 text-black">Select an Employee</p>
              <DropdownMenu
                options={employees}
                onChange={handleEmployeeOptionChange}
                buttonText={selectedEmployeeOption.label}
              />
            </div>
            <div>
              <p className="mb-2 text-black">Date</p>

              <DatePicker
                selectedDate={selectedDate}
                onChange={setSelectedDate}
              />
            </div>
            <div className="flex items-center justify-end gap-3">
              <Button onClick={handleReportForm} variant="secondary">
                Cancel
              </Button>
              <Button type="submit" onClick={handleReportForm}>
                Submit
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ReportForm;
