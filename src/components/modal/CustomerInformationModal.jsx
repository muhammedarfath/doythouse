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
    emergency: "",

    // Measurements fields
    yokeLength: "",
    yokeRound: "",
    fullLength: "",
    upperBust: "",
    bust: "",
    underBust: "",
    midWaist: "",
    hip: "",
    shoulder: "",
    shoulderWidth: "",
    slitLength: "",
    slitRound: "",
    sleeveType: "",
    sleeveLength: "",
    wrist: "",
    threeFourth: "",
    elbow: "",
    armRound: "",
    armHole: "",
    neck: "",
    frontNeck: "",
    backNeck: "",
    collarRound: "",
    tuckPoint: "",
    pointToPoint: "",

    // Skirt & Pant fields
    skirtFullLength: "",
    seat: "",
    thigh: "",
    knee: "",
    calf: "",
    bottomRound: "",

    // Options fields
    pad: false,
    zip: false,
    backOpen: false,
    frontOpen: false,
    image: "",

    // Additional fields
    cutting: "",
    stitching: "",
    handWork: "",
    measurer: "",
    checker: "",
    tailor: "",
    dateIn: "",
    completedDate: "",

    // Payment Information
    totalPrice: "",
    advancedPrice: "",
    balancePrice: "",

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
      emergency: "",

      // Measurements fields
      yokeLength: "",
      yokeRound: "",
      fullLength: "",
      upperBust: "",
      bust: "",
      underBust: "",
      midWaist: "",
      hip: "",
      shoulder: "",
      shoulderWidth: "",
      slitLength: "",
      slitRound: "",
      sleeveType: "",
      sleeveLength: "",
      wrist: "",
      threeFourth: "",
      elbow: "",
      armRound: "",
      neck: "",
      frontNeck: "",
      backNeck: "",
      collarRound: "",
      tuckPoint: "",
      pointToPoint: "",

      // Skirt & Pant fields
      skirtFullLength: "",
      seat: "",
      thigh: "",
      knee: "",
      calf: "",
      bottomRound: "",

      // Options fields
      pad: false,
      zip: false,
      backOpen: false,
      frontOpen: false,
      image: "",

      // Additional fields
      cutting: "",
      stitching: "",
      handWork: "",
      measurer: "",
      checker: "",
      tailor: "",
      dateIn: "",
      completedDate: "",

      // Payment Information
      totalPrice: "",
      advancedPrice: "",
      balancePrice: "",

      // Note
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
        <DialogContent className="lg:max-w-[90%] overflow-scroll lg:max-h-[90%] sm:max-w-[90px] mt-3 h-full">
          <DialogHeader>
            <DialogTitle>Customer Information</DialogTitle>
            <DialogDescription>Create New Information</DialogDescription>
          </DialogHeader>
          <form>
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                  <Label htmlFor="customerName" className="text-md font-bold">
                    Customer Name
                  </Label>
                  <Input
                    id="customerName"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    className="w-full"
                  />

                  <Label htmlFor="contact-number" className="text-md font-bold">
                    Contact Number
                  </Label>
                  <Input
                    id="contact-number"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    className="w-full"
                  />

                  <Label htmlFor="trial-date" className="text-md font-bold">
                    Trial Date
                  </Label>
                  <Input
                    id="trial-date"
                    value={formData.trialDate}
                    onChange={handleInputChange}
                    type="date"
                    className="w-full"
                  />

                  <Label
                    htmlFor="expected-delivery"
                    className="text-md font-bold"
                  >
                    Expected Delivery
                  </Label>
                  <Input
                    value={formData.expectedDelivery}
                    onChange={handleInputChange}
                    id="expected-delivery"
                    type="date"
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <Label htmlFor="item-category" className="text-md font-bold">
                    Item Category
                  </Label>
                  <Input
                    value={formData.itemCategory}
                    onChange={handleInputChange}
                    id="item-category"
                    className="w-full"
                  />

                  <Label htmlFor="designer-name" className="text-md font-bold">
                    Designer Name
                  </Label>
                  <Input
                    value={formData.designerName}
                    onChange={handleInputChange}
                    id="designer-name"
                    className="w-full"
                  />

                  <Label htmlFor="order-number" className="text-md font-bold">
                    Order Number
                  </Label>
                  <Input
                    value={formData.orderNumber}
                    onChange={handleInputChange}
                    id="order-number"
                    className="w-full"
                  />

                  <Label htmlFor="order-date" className="text-md font-bold">
                    Order Date
                  </Label>
                  <Input
                    value={formData.orderDate}
                    onChange={handleInputChange}
                    id="order-date"
                    type="date"
                    className="w-full"
                  />

                  <Label htmlFor="emergency" className="text-md font-bold">
                    Emergency
                  </Label>
                  <Input
                    value={formData.emergency}
                    onChange={handleInputChange}
                    id="emergency"
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="border-t  border-gray-300 my-6 pt-4 lg:flex md:flex gap-8">
              <div className="lg:w-1/3 md:w-1/3">
                <div className="text-lg font-semibold mb-4">Measurements:</div>
                <table class="min-w-full border-collapse">
                  <tbody>
                    <tr>
                      <th class="border p-2 text-left">Yoke Length</th>
                      <input
                        value={formData.yokeLength}
                        onChange={handleInputChange}
                        type="text"
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Yoke Round</th>
                      <input
                        value={formData.yokeRound}
                        onChange={handleInputChange}
                        type="text"
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Full Length</th>
                      <input
                        value={formData.fullLength}
                        onChange={handleInputChange}
                        type="text"
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Upper Bust</th>
                      <input
                        value={formData.upperBust}
                        onChange={handleInputChange}
                        type="text"
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Bust</th>
                      <input
                        type="text"
                        value={formData.bust}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Under Bust</th>
                      <input
                        value={formData.underBust}
                        onChange={handleInputChange}
                        type="text"
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Mid Waist</th>
                      <input
                        value={formData.midWaist}
                        onChange={handleInputChange}
                        type="text"
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Hip</th>
                      <input
                        value={formData.hip}
                        onChange={handleInputChange}
                        type="text"
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Shoulder</th>
                      <input
                        type="text"
                        value={formData.shoulder}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Shoulder Wide</th>
                      <input
                        type="text"
                        value={formData.shoulderWidth}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Slit Length</th>
                      <input
                        value={formData.slitLength}
                        onChange={handleInputChange}
                        type="text"
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Slit Round</th>
                      <input
                        type="text"
                        value={formData.slitRound}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Sleeve Type</th>
                      <input
                        type="text"
                        value={formData.sleeveType}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Sleeve Length</th>
                      <input
                        type="text"
                        value={formData.sleeveLength}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Slit Round</th>
                      <input
                        value={formData.slitRound}
                        onChange={handleInputChange}
                        type="text"
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Wrist</th>
                      <input
                        type="text"
                        value={formData.wrist}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">3/4th</th>
                      <input
                        type="text"
                        value={formData.threeFourth}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Elbow</th>
                      <input
                        type="text"
                        value={formData.elbow}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Arm Round</th>
                      <input
                        type="text"
                        value={formData.armRound}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Arm hole</th>
                      <input
                        type="text"
                        value={formData.armHole}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Neck</th>
                      <input
                        type="text"
                        value={formData.neck}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">F/N</th>
                      <input
                        type="text"
                        value={formData.frontNeck}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">B/N</th>
                      <input
                        type="text"
                        value={formData.backNeck}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Collar Round</th>
                      <input
                        type="text"
                        value={formData.collarRound}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Tuck Point</th>
                      <input
                        type="text"
                        value={formData.tuckPoint}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                    <tr>
                      <th class="border p-2 text-left">Point To Point</th>
                      <input
                        type="text"
                        value={formData.pointToPoint}
                        onChange={handleInputChange}
                        className="p-2 border w-full"
                      />
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="lg:w-1/3 md:w-1/3 mt-10 flex flex-col gap-8">
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
                        <input
                          value={formData.skirtFullLength}
                          onChange={handleInputChange}
                          type="text"
                          className="p-2 border w-full"
                        />
                      </tr>
                      <tr>
                        <th class="border p-2 text-left">Seat</th>
                        <input
                          value={formData.seat}
                          onChange={handleInputChange}
                          type="text"
                          className="p-2 border w-full"
                        />
                      </tr>
                      <tr>
                        <th class="border p-2 text-left">Thigh</th>
                        <input
                          value={formData.thigh}
                          onChange={handleInputChange}
                          type="text"
                          className="p-2 border w-full"
                        />
                      </tr>
                      <tr>
                        <th class="border p-2 text-left">Knee</th>
                        <input
                          type="text"
                          value={formData.knee}
                          onChange={handleInputChange}
                          className="p-2 border w-full"
                        />
                      </tr>
                      <tr>
                        <th class="border p-2 text-left">Caif</th>
                        <input
                          type="text"
                          value={formData.calf}
                          onChange={handleInputChange}
                          className="p-2 border w-full"
                        />
                      </tr>
                      <tr>
                        <th class="border p-2 text-left">Bottam Round</th>
                        <input
                          type="text"
                          value={formData.bottomRound}
                          onChange={handleInputChange}
                          className="p-2 border w-full"
                        />
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="min-w-full border-collapse">
                  <div className="flex flex-col gap-7 border p-1">
                    <div className="flex gap-7 items-center">
                      <div class="border p-2 px-8 text-left">Zip</div>
                      <IoMdArrowRoundForward />
                      <input
                        value={formData.zip}
                        onChange={handleInputChange}
                        class="w-8 h-8"
                        type="checkbox"
                      />
                      <input
                        class="w-8 h-8"
                        value={formData.zip}
                        onChange={handleInputChange}
                        type="checkbox"
                      />
                    </div>
                    <div className="flex gap-7 items-center">
                      <div class="border p-2 px-8 text-left">Pad</div>
                      <IoMdArrowRoundForward />
                      <input class="w-8 h-8" type="checkbox" />
                      <input class="w-8 h-8" type="checkbox" />
                    </div>
                    <div className="flex lg:gap-7 gap-4 items-center">
                      <div class="border p-2  text-left">Back Open</div>
                      <IoMdArrowRoundForward />
                      <input class="w-8 h-8" type="checkbox" />
                      <div class="border p-2 text-left">Front Open</div>
                      <IoMdArrowRoundForward />
                      <input class="w-8 h-8" type="checkbox" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="picture">Picture</Label>
                      <Input id="picture" type="file" />
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
              <div className="lg:flex md:flex lg:gap-4 md:gap-4 mt-7 lg:mx-20 ">
                <div className="flex flex-col items-start  gap-4 lg:w-1/2">
                  <Label htmlFor="cutting" className="text-left">
                    Cutting
                  </Label>
                  <Input
                    id="cutting"
                    value={formData.customerName}
                    onChange={handleInputChange}
                    className="col-span-1"
                  />

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

                <div className="relative flex flex-col items-start mt-28 lg:mt-0 gap-1 lg:w-1/2">
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
                    <div className="flex gap-3">
                      <Label htmlFor="cgst" className="text-left">
                        CGST
                      </Label>
                      <Input
                        id="cgst"
                        type="text"
                        className="col-span-1"
                        placeholder="CGST"
                      />
                      <Label htmlFor="sgst" className="text-left">
                        SGST
                      </Label>
                      <Input
                        id="sgst"
                        type="text"
                        className="col-span-1"
                        placeholder="SGST"
                      />
                    </div>
                    <Label htmlFor="balance-price" className="text-left">
                      Discount Price
                    </Label>
                    <Input
                      id="balance-price"
                      type="text"
                      className="col-span-1"
                      placeholder="Discount Price"
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
          </form>
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
