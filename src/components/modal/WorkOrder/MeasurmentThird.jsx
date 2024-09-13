import React from "react";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

function MeasurmentThird({
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
  note,
  dateIn,
  setNote,
  setDateIn,
  completedDate,
  setCompletedDate,
  totalPrice,
  advancedPrice,
  setAdvancedPrice,
  setTotalPrice,
  balancePrice,
  setBalancePrice,
  discount,
  setDiscount,
}) {
  return (
    <div className="border-t border-gray-300 my-6 pt-4">
      <div className="text-lg font-semibold mb-4">Additional Information:</div>
      <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-9 mt-7 lg:mx-20 md:mx-10">
        <div className="flex flex-col gap-4">
          <div>
            <Label htmlFor="cutting" className="text-md font-bold">
              Cutting
            </Label>
            <select
              id="cutting"
              value={cutting}
              onChange={(e) => setCutting(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <Label htmlFor="stitching" className="text-md font-bold">
              Stitching
            </Label>
            <select
              id="stitching"
              value={stitching}
              onChange={(e) => setStitching(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <Label htmlFor="hand-work" className="text-md font-bold">
              Hand Work
            </Label>
            <select
              id="hand-work"
              value={handWork}
              onChange={(e) => setHandWork(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <Label htmlFor="measurer" className="text-md font-bold">
              Measurer
            </Label>
            <select
              id="measurer"
              value={measurer}
              onChange={(e) => setMeasurer(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <Label htmlFor="checker" className="text-md font-bold">
              Checker
            </Label>
            <select
              id="checker"
              value={checker}
              onChange={(e) => setChecker(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <Label htmlFor="tailor" className="text-md font-bold">
              Tailor
            </Label>
            <select
              id="tailor"
              value={tailor}
              onChange={(e) => setTailor(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <Label htmlFor="date-in" className="text-md font-bold">
              Date In
            </Label>
            <Input
              id="date-in"
              type="date"
              value={dateIn}
              onChange={(e) => setDateIn(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <Label htmlFor="completed-date" className="text-md font-bold">
              Completed Date
            </Label>
            <Input
              id="completed-date"
              type="date"
              value={completedDate}
              onChange={(e) => setCompletedDate(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        {/* <div className="flex flex-col gap-4">
          <div className="text-lg font-semibold mb-4">Payment Information:</div>
          <div>
            <Label htmlFor="total-price" className="text-md font-bold">
              Total Price
            </Label>
            <Input
              id="total-price"
              type="text"
              value={totalPrice}
              onChange={(e) => setTotalPrice(e.target.value)}
              className="w-full"
              placeholder="Enter total price"
            />
          </div>

          <div>
            <Label htmlFor="advanced-price" className="text-md font-bold">
              Advanced Price
            </Label>
            <Input
              id="advanced-price"
              type="text"
              value={advancedPrice}
              onChange={(e) => setAdvancedPrice(e.target.value)}
              className="w-full"
              placeholder="Enter advanced price"
            />
          </div>

          <div>
            <Label htmlFor="balance-price" className="text-md font-bold">
              Balance Price
            </Label>
            <Input
              id="balance-price"
              type="text"
              value={balancePrice}
              onChange={(e) => setBalancePrice(e.target.value)}
              className="w-full"
              placeholder="Enter balance price"
            />
          </div>

          <div>
            <Label htmlFor="discount-price" className="text-md font-bold">
              Discount Price
            </Label>
            <Input
              id="discount-price"
              type="text"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              className="w-full"
              placeholder="Enter discount price"
            />
          </div>

          <div>
            <Label htmlFor="note" className="text-md font-semibold">
              Note
            </Label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Add any additional notes here..."
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default MeasurmentThird;
