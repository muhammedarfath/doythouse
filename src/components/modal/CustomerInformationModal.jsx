import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { FiPlus } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { IoMdArrowRoundForward } from "react-icons/io";

function CustomerInformationModal() {
  
  const [formData, setFormData] = useState({
    customerName: "",
    contactNumber: "",
    trialDate: "",
    expectedDelivery: "",
    itemCategory: "",
    designerName: "",
    orderNumber: "",
    orderDate: "",
    customerId: "",
    // Measurements fields
    yokeLength: "",
    yokeRound: "",
    fullLength: "",
    shoulder: "",
    sleeveLength: "",
    sleeveRound: "",
    armHole: "",
    waistRound: "",
    upperBust: "",
    bust: "",
    underBust: "",
    slitRound: "",
    frontNeck: "",
    backNeck: "",
    tuckPoint: "",
    pointToPrint: "",
    collarRound: "",
    // Skirt & Pant fields
    skirtFullLength: "",
    skirtWaist: "",
    skirtHip: "",
    skirtThigh: "",
    skirtKneeRound: "",
    skirtBottomRound: "",
    // Options fields
    pad: "",
    zip: "",
    backOpen: "",
    frontOpen: "",
    // Additional fields
    cutting: "",
    stitching: "",
    handWork: "",
    measurer: "",
    checker: "",
    tailor: "",
    dateIn: "",
    completedDate: "",
    // Note
    note: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here

    // After successful submission, clear form fields if necessary
    setFormData({
      customerName: "",
      contactNumber: "",
      trialDate: "",
      expectedDelivery: "",
      itemCategory: "",
      designerName: "",
      orderNumber: "",
      orderDate: "",
      customerId: "",
      yokeLength: "",
      yokeRound: "",
      fullLength: "",
      shoulder: "",
      sleeveLength: "",
      sleeveRound: "",
      armHole: "",
      waistRound: "",
      upperBust: "",
      bust: "",
      underBust: "",
      slitRound: "",
      frontNeck: "",
      backNeck: "",
      tuckPoint: "",
      pointToPrint: "",
      collarRound: "",
      skirtFullLength: "",
      skirtWaist: "",
      skirtHip: "",
      skirtThigh: "",
      skirtKneeRound: "",
      skirtBottomRound: "",
      pad: "",
      zip: "",
      backOpen: "",
      frontOpen: "",
      cutting: "",
      stitching: "",
      handWork: "",
      measurer: "",
      checker: "",
      tailor: "",
      dateIn: "",
      completedDate: "",
      note: "",
    });
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-[#308E87] hover:bg-[#308E87]">
            <FiPlus className="text-white text-xl" />
            Create New Customer
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[90%] overflow-auto max-h-[90%]">
          <DialogHeader>
            <DialogTitle>Customer Information</DialogTitle>
            <DialogDescription>Create New Information</DialogDescription>
          </DialogHeader>
          <div className="">
            <div className="flex gap-4 mt-7 mx-20 ">
              <div className="flex flex-col items-start gap-1 w-1/2">
                <Label
                  htmlFor="customer-name"
                  className="text-right text-md font-bold mt-3"
                >
                  Customer Name
                </Label>
                <Input
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  className=""
                />
                <Label
                  htmlFor="contact-number"
                  className="text-right text-md font-bold mt-3"
                >
                  Contact Number
                </Label>
                <Input id="contact-number" className="" />

                <Label
                  htmlFor="trial-date"
                  className="text-right text-md font-bold mt-3"
                >
                  Trial Date
                </Label>
                <Input id="trial-date" type="date" className="" />

                <Label
                  htmlFor="expected-delivery"
                  className="text-right text-md font-bold mt-3"
                >
                  Expected Delivery
                </Label>
                <Input id="expected-delivery" type="date" className="" />
              </div>
              <div className="flex flex-col items-start gap-1 w-1/2">
                <Label
                  htmlFor="item-category"
                  className="text-right text-md font-bold mt-3"
                >
                  Item Category
                </Label>
                <Input id="item-category" className="" />

                <Label
                  htmlFor="designer-name"
                  className="text-right text-md font-bold mt-3"
                >
                  Designer Name
                </Label>
                <Input id="designer-name" className="" />

                <Label
                  htmlFor="order-number"
                  className="text-right text-md font-bold mt-3"
                >
                  Order Number
                </Label>
                <Input id="order-number" className="" />

                <Label
                  htmlFor="order-date"
                  className="text-right text-md font-bold mt-3"
                >
                  Order Date
                </Label>
                <Input id="order-date" type="date" className="" />

                <Label
                  htmlFor="customer-id"
                  className="text-right text-md font-bold mt-3"
                >
                  Emergency
                </Label>
                <Input id="customer-id" className="" />
              </div>
            </div>

            <div className="border-t border-gray-300 my-6 pt-4 flex gap-8">
              <div className="w-1/3">
                <div className="text-lg font-semibold mb-4">Measurements:</div>
                <table class="min-w-full border-collapse">
                  <tbody>
                    <tr>
                      <th class="border p-2 text-left">Yoke Length</th>
                      <input type="text" className="p-2 border w-full" />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Header 2</th>
                      <input type="text" className="p-2 border w-full" />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Header 3</th>
                      <input type="text" className="p-2 border w-full" />
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="w-1/3 mt-10 flex flex-col gap-8">
                <div>
                  <div className="flex border p-3 justify-center">
                    <h1 className="text-lg font-semibold mb-4">
                      SKIRT & PANT:
                    </h1>
                  </div>
                  <table class="min-w-full border-collapse">
                    <tbody>
                      <tr>
                        <th class="border p-2 text-left">Full length</th>
                        <input type="text" className="p-2 border w-full" />
                      </tr>
                      <tr>
                        <th class="border p-2 text-left">Header 2</th>
                        <input type="text" className="p-2 border w-full" />
                      </tr>
                      <tr>
                        <th class="border p-2 text-left">Header 3</th>
                        <input type="text" className="p-2 border w-full" />
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="min-w-full border-collapse">
                  <div className="flex flex-col gap-7 border p-1">
                    <div className="flex gap-7 items-center">
                      <div class="border p-2 px-8 text-left">Zip</div>
                      <IoMdArrowRoundForward />
                      <input class="w-8 h-8" type="checkbox" />
                      <input class="w-8 h-8" type="checkbox" />
                    </div>
                    <div className="flex gap-7 items-center">
                      <div class="border p-2 px-8 text-left">Pad</div>
                      <IoMdArrowRoundForward />
                      <input class="w-8 h-8" type="checkbox" />
                      <input class="w-8 h-8" type="checkbox" />
                    </div>
                    <div className="flex gap-7 items-center">
                      <div class="border p-2  text-left">Back Open</div>
                      <IoMdArrowRoundForward />
                      <input class="w-8 h-8" type="checkbox" />
                      <div class="border p-2 text-left">Front Open</div>
                      <IoMdArrowRoundForward />
                      <input class="w-8 h-8" type="checkbox" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <img
                  src="https://thumbs.dreamstime.com/b/women-to-do-body-measurement-fashion-illustration-size-chart-head-girl-site-online-shop-human-infographic-template-clothes-176399026.jpg"
                  alt="image"
                />
              </div>
            </div>

            <div className="border-t border-gray-300 my-6 pt-4">
              <div className="text-lg font-semibold mb-4">
                Additional Information:
              </div>
              <div className="flex gap-4 mt-7 mx-20 ">
                <div className="flex flex-col items-start  gap-4 w-1/2">
                  <Label htmlFor="cutting" className="text-left">
                    Cutting
                  </Label>
                  <Input id="cutting" className="col-span-1" />

                  <Label htmlFor="stitching" className="text-left">
                    Stitching
                  </Label>
                  <Input id="stitching" className="col-span-1" />

                  <Label htmlFor="hand-work" className="text-left">
                    Hand Work
                  </Label>
                  <Input id="hand-work" className="col-span-1" />

                  <Label htmlFor="measurer" className="text-left">
                    Measurer
                  </Label>
                  <Input id="measurer" className="col-span-1" />

                  <Label htmlFor="checker" className="text-left">
                    Checker
                  </Label>
                  <Input id="checker" className="col-span-1" />

                  <Label htmlFor="tailor" className="text-left">
                    Tailor
                  </Label>
                  <Input id="tailor" className="col-span-1" />

                  <Label htmlFor="date-in" className="text-left">
                    Date In
                  </Label>
                  <Input id="date-in" type="date" className="col-span-1" />

                  <Label htmlFor="completed-date" className="text-left">
                    Completed Date
                  </Label>
                  <Input
                    id="completed-date"
                    type="date"
                    className="col-span-1"
                  />
                </div>

                <div className="relative flex flex-col items-start gap-1 w-1/2">
                  <div className="text-lg font-semibold mb-4 absolute -top-14">
                    Payment Information:
                  </div>
                  <div className="flex flex-col w-full items-start gap-4">
                    <Label htmlFor="total-price" className="text-left">
                      Total Price
                    </Label>
                    <Input
                      id="total-price"
                      type="text"
                      className="col-span-1"
                      placeholder="Enter total price"
                    />

                    <Label htmlFor="advanced-price" className="text-left">
                      Advanced Price
                    </Label>
                    <Input
                      id="advanced-price"
                      type="text"
                      className="col-span-1"
                      placeholder="Enter advanced price"
                    />

                    <Label htmlFor="balance-price" className="text-left">
                      Balance Price
                    </Label>
                    <Input
                      id="balance-price"
                      type="text"
                      className="col-span-1"
                      placeholder="Enter balance price"
                    />
                    <Label htmlFor="note" className="text-lg font-semibold ">
                      Note
                    </Label>
                    <textarea
                      id="note"
                      className="w-full p-2 border rounded"
                      rows="4"
                      placeholder="Add any additional notes here..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-[#308E87] hover:bg-[#308E87]">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomerInformationModal;
