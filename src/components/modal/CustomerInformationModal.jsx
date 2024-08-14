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
        <DialogContent className="max-w-[80%] overflow-auto max-h-[80%]">
          <DialogHeader>
            <DialogTitle>Customer Information</DialogTitle>
            <DialogDescription>Create New Information</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {/* Main Fields */}
            <div className="grid grid-cols-4 gap-4">
              <Label htmlFor="customer-name" className="text-right">
                Customer Name
              </Label>
              <Input
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                className="col-span-3"
              />
              <Label htmlFor="contact-number" className="text-right">
                Contact Number
              </Label>
              <Input id="contact-number" className="col-span-3" />

              <Label htmlFor="trial-date" className="text-right">
                Trial Date
              </Label>
              <Input id="trial-date" type="date" className="col-span-3" />

              <Label htmlFor="expected-delivery" className="text-right">
                Expected Delivery
              </Label>
              <Input
                id="expected-delivery"
                type="date"
                className="col-span-3"
              />

              <Label htmlFor="item-category" className="text-right">
                Item Category
              </Label>
              <Input id="item-category" className="col-span-3" />

              <Label htmlFor="designer-name" className="text-right">
                Designer Name
              </Label>
              <Input id="designer-name" className="col-span-3" />

              <Label htmlFor="order-number" className="text-right">
                Order Number
              </Label>
              <Input id="order-number" className="col-span-3" />

              <Label htmlFor="order-date" className="text-right">
                Order Date
              </Label>
              <Input id="order-date" type="date" className="col-span-3" />

              <Label htmlFor="customer-id" className="text-right">
                Customer ID
              </Label>
              <Input id="customer-id" className="col-span-3" />
            </div>

            {/* Measurements Section */}
            <div className="border-t border-gray-300 my-6 pt-4 flex">
              <div className="w-5/6">
                <div className="text-lg font-semibold mb-4">Measurements:</div>
                <div className="grid gap-4">
                  <div className="grid grid-cols-4 gap-4">
                    <Label htmlFor="yoke-length" className="text-right">
                      Yoke Length
                    </Label>
                    <Input id="yoke-length" className="col-span-3" />

                    <Label htmlFor="yoke-round" className="text-right">
                      Yoke Round
                    </Label>
                    <Input id="yoke-round" className="col-span-3" />

                    <Label htmlFor="full-length" className="text-right">
                      Full Length
                    </Label>
                    <Input id="full-length" className="col-span-3" />

                    <Label htmlFor="shoulder" className="text-right">
                      Shoulder
                    </Label>
                    <Input id="shoulder" className="col-span-3" />

                    <Label htmlFor="sleeve-length" className="text-right">
                      Sleeve Length
                    </Label>
                    <Input id="sleeve-length" className="col-span-3" />

                    <Label htmlFor="sleeve-round" className="text-right">
                      Sleeve Round
                    </Label>
                    <Input id="sleeve-round" className="col-span-3" />

                    <Label htmlFor="arm-hole" className="text-right">
                      Arm Hole
                    </Label>
                    <Input id="arm-hole" className="col-span-3" />

                    <Label htmlFor="waist-round" className="text-right">
                      Waist Round
                    </Label>
                    <Input id="waist-round" className="col-span-3" />

                    <Label htmlFor="upper-bust" className="text-right">
                      Upper Bust
                    </Label>
                    <Input id="upper-bust" className="col-span-3" />

                    <Label htmlFor="bust" className="text-right">
                      Bust
                    </Label>
                    <Input id="bust" className="col-span-3" />

                    <Label htmlFor="under-bust" className="text-right">
                      Under Bust
                    </Label>
                    <Input id="under-bust" className="col-span-3" />

                    <Label htmlFor="slit-round" className="text-right">
                      Slit Round
                    </Label>
                    <Input id="slit-round" className="col-span-3" />

                    <Label htmlFor="front-neck" className="text-right">
                      Front Neck
                    </Label>
                    <Input id="front-neck" className="col-span-3" />

                    <Label htmlFor="back-neck" className="text-right">
                      Back Neck
                    </Label>
                    <Input id="back-neck" className="col-span-3" />

                    <Label htmlFor="tuck-point" className="text-right">
                      Tuck Point
                    </Label>
                    <Input id="tuck-point" className="col-span-3" />

                    <Label htmlFor="point-to-print" className="text-right">
                      Point to Print
                    </Label>
                    <Input id="point-to-print" className="col-span-3" />
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://thumbs.dreamstime.com/b/women-to-do-body-measurement-fashion-illustration-size-chart-head-girl-site-online-shop-human-infographic-template-clothes-176399026.jpg"
                  alt="image"
                />
              </div>
              <div></div>
            </div>

            <div className="border-t border-gray-300 my-6 pt-4 flex justify-evenly">
              <div>
                <div className="text-lg font-semibold mb-4">SKIRT & PANT:</div>
                <div className="grid gap-4">
                  <div className="grid grid-cols-4 gap-4">
                    <Label htmlFor="full-length-skirt" className="text-right">
                      Full Length
                    </Label>
                    <Input id="full-length-skirt" className="col-span-3" />

                    <Label htmlFor="waist-skirt" className="text-right">
                      Waist
                    </Label>
                    <Input id="waist-skirt" className="col-span-3" />

                    <Label htmlFor="hip-skirt" className="text-right">
                      Hip
                    </Label>
                    <Input id="hip-skirt" className="col-span-3" />

                    <Label htmlFor="thigh-skirt" className="text-right">
                      Thigh
                    </Label>
                    <Input id="thigh-skirt" className="col-span-3" />

                    <Label htmlFor="knee-round-skirt" className="text-right">
                      Knee Round
                    </Label>
                    <Input id="knee-round-skirt" className="col-span-3" />

                    <Label htmlFor="bottom-round-skirt" className="text-right">
                      Bottom Round
                    </Label>
                    <Input id="bottom-round-skirt" className="col-span-3" />
                  </div>
                </div>
              </div>

              <div>
                <div className="text-lg font-semibold mb-4">Options:</div>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="py-4 px-6 text-base font-medium">PAD:</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="pad-yes"
                              name="pad"
                              value="yes"
                              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <Label
                              htmlFor="pad-yes"
                              className="ml-2 text-sm font-medium"
                            >
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="pad-no"
                              name="pad"
                              value="no"
                              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <Label
                              htmlFor="pad-no"
                              className="ml-2 text-sm font-medium"
                            >
                              No
                            </Label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className="py-4 px-6 text-base font-medium">Zip:</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="zip-yes"
                              name="zip"
                              value="yes"
                              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <Label
                              htmlFor="zip-yes"
                              className="ml-2 text-sm font-medium"
                            >
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="zip-no"
                              name="zip"
                              value="no"
                              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <Label
                              htmlFor="zip-no"
                              className="ml-2 text-sm font-medium"
                            >
                              No
                            </Label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-300">
                      <td className="py-4 px-6 text-base font-medium">
                        Back Open:
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="back-open-yes"
                              name="back-open"
                              value="yes"
                              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <Label
                              htmlFor="back-open-yes"
                              className="ml-2 text-sm font-medium"
                            >
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="back-open-no"
                              name="back-open"
                              value="no"
                              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <Label
                              htmlFor="back-open-no"
                              className="ml-2 text-sm font-medium"
                            >
                              No
                            </Label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="py-4 px-6 text-base font-medium">
                        Front Open:
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="front-open-yes"
                              name="front-open"
                              value="yes"
                              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <Label
                              htmlFor="front-open-yes"
                              className="ml-2 text-sm font-medium"
                            >
                              Yes
                            </Label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              id="front-open-no"
                              name="front-open"
                              value="no"
                              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <Label
                              htmlFor="front-open-no"
                              className="ml-2 text-sm font-medium"
                            >
                              No
                            </Label>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-gray-300 my-6 pt-4">
              <div className="text-lg font-semibold mb-4">
                Additional Information:
              </div>
              <div className="grid gap-1 mt-16">
                <div className="grid grid-cols-4 gap-8">
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
              </div>

              {/* Payment Information Section */}
              <div className="border-t border-gray-300 my-6 pt-4">
                <div className="text-lg font-semibold mb-4">
                  Payment Information:
                </div>
                <div className="grid grid-cols-4 gap-8">
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
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 my-6 pt-4">
              <Label htmlFor="note" className="text-lg font-semibold mb-4">
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
          <DialogFooter>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomerInformationModal;
