import React, { useEffect } from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

function PaymentInfo({
  cutting,
  setCutting,
  stitching,
  setStitching,
  handWork,
  setHandWork,
  measurer,
  setMeasurer,
  checker,
  setChecker,
  tailor,
  setTailor,
  total,
  setTotal,
}) {
  useEffect(() => {
    const calculateTotal = () => {
      const values = [
        cutting,
        stitching,
        handWork,
        measurer,
        checker,
        tailor,
      ].map((val) => parseFloat(val) || 0);
      const sum = values.reduce((acc, curr) => acc + curr, 0);
      setTotal(sum);
    };
    calculateTotal();
  }, [cutting, stitching, handWork, measurer, checker, tailor]);

  return (
    <div className="flex flex-col gap-4 lg:w-full mx-auto p-4">
      <div className="flex flex-wrap">
        {[
          {
            id: "cutting",
            label: "Cutting",
            value: cutting,
            onChange: (e) => setCutting(e.target.value),
            placeholder: "Enter cutting cost",
          },
          {
            id: "stitching",
            label: "Stitching",
            value: stitching,
            onChange: (e) => setStitching(e.target.value),
            placeholder: "Enter stitching cost",
          },
          {
            id: "hand-work",
            label: "Hand Work",
            value: handWork,
            onChange: (e) => setHandWork(e.target.value),
            placeholder: "Enter hand work cost",
          },
          {
            id: "measurer",
            label: "Measurer",
            value: measurer,
            onChange: (e) => setMeasurer(e.target.value),
            placeholder: "Enter measurer cost",
          },
          {
            id: "checker",
            label: "Checker",
            value: checker,
            onChange: (e) => setChecker(e.target.value),
            placeholder: "Enter checker cost",
          },
          {
            id: "tailor",
            label: "Tailor",
            value: tailor,
            onChange: (e) => setTailor(e.target.value),
            placeholder: "Enter tailor cost",
          },
        ].map(({ id, label, value, onChange, placeholder }) => (
          <div key={id} className="w-full md:w-1/2 px-2 mb-4">
            <div className="flex items-center">
              <Label
                htmlFor={id}
                className="text-md font-bold w-1/4 text-right pr-4"
              >
                {label}
              </Label>
              <Input
                id={id}
                type="number"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center mt-6 border-t border-gray-300 pt-4">
        <Label
          htmlFor="total"
          className="text-md font-bold w-1/4 text-right pr-4"
        >
          Total
        </Label>
        <Input
          id="total"
          type="text"
          value={total.toFixed(2)}
          className="flex-1 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          readOnly
        />
      </div>
    </div>
  );
}

export default PaymentInfo;
