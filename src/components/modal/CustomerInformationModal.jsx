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
  const [loading, setLoading] = useState(false);
  // Basic Information
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [trialDate, setTrialDate] = useState("");
  const [expectedDelivery, setExpectedDelivery] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [designerName, setDesignerName] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [emergency, setEmergency] = useState("");

  // Measurements
  const [yokeLength, setYokeLength] = useState("");
  const [yokeRound, setYokeRound] = useState("");
  const [fullLength, setFullLength] = useState("");
  const [upperBust, setUpperBust] = useState("");
  const [bust, setBust] = useState("");
  const [underBust, setUnderBust] = useState("");
  const [midWaist, setMidWaist] = useState("");
  const [hip, setHip] = useState("");
  const [shoulder, setShoulder] = useState("");
  const [shoulderWidth, setShoulderWidth] = useState("");
  const [slitLength, setSlitLength] = useState("");
  const [slitRound, setSlitRound] = useState("");
  const [sleeveType, setSleeveType] = useState("");
  const [sleeveLength, setSleeveLength] = useState("");
  const [wrist, setWrist] = useState("");
  const [threeFourth, setThreeFourth] = useState("");
  const [elbow, setElbow] = useState("");
  const [armRound, setArmRound] = useState("");
  const [armHole, setArmHole] = useState("");
  const [neck, setNeck] = useState("");
  const [frontNeck, setFrontNeck] = useState("");
  const [backNeck, setBackNeck] = useState("");
  const [collarRound, setCollarRound] = useState("");
  const [tuckPoint, setTuckPoint] = useState("");
  const [pointToPoint, setPointToPoint] = useState("");

  // Skirt & Pant Measurements
  const [skirtFullLength, setSkirtFullLength] = useState("");
  const [seat, setSeat] = useState("");
  const [thigh, setThigh] = useState("");
  const [knee, setKnee] = useState("");
  const [calf, setCalf] = useState("");
  const [bottomRound, setBottomRound] = useState("");

  // Options
  const [pad, setPad] = useState(false);
  const [zip, setZip] = useState(false);
  const [backOpen, setBackOpen] = useState(false);
  const [frontOpen, setFrontOpen] = useState(false);
  const [image, setImage] = useState("");

  // Additional Information
  const [cutting, setCutting] = useState("");
  const [stitching, setStitching] = useState("");
  const [handWork, setHandWork] = useState("");
  const [measurer, setMeasurer] = useState("");
  const [checker, setChecker] = useState("");
  const [tailor, setTailor] = useState("");
  const [dateIn, setDateIn] = useState("");
  const [completedDate, setCompletedDate] = useState("");

  // Payment Information
  const [totalPrice, setTotalPrice] = useState("");
  const [advancedPrice, setAdvancedPrice] = useState("");
  const [balancePrice, setBalancePrice] = useState("");
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  // Note
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Customer Name:", customerName);
    console.log("Contact Number:", contactNumber);
    console.log("Trial Date:", trialDate);
    console.log("Expected Delivery:", expectedDelivery);
    console.log("Item Category:", itemCategory);
    console.log("Designer Name:", designerName);
    console.log("Order Number:", orderNumber);
    console.log("Order Date:", orderDate);
    console.log("Emergency:", emergency);

    // Measurements
    console.log("Yoke Length:", yokeLength);
    console.log("Yoke Round:", yokeRound);
    console.log("Full Length:", fullLength);
    console.log("Upper Bust:", upperBust);
    console.log("Bust:", bust);
    console.log("Under Bust:", underBust);
    console.log("Mid Waist:", midWaist);
    console.log("Hip:", hip);
    console.log("Shoulder:", shoulder);
    console.log("Shoulder Width:", shoulderWidth);
    console.log("Slit Length:", slitLength);
    console.log("Slit Round:", slitRound);
    console.log("Sleeve Type:", sleeveType);
    console.log("Sleeve Length:", sleeveLength);
    console.log("Wrist:", wrist);
    console.log("Three Fourth:", threeFourth);
    console.log("Elbow:", elbow);
    console.log("Arm Round:", armRound);
    console.log("Arm Hole:", armHole);
    console.log("Neck:", neck);
    console.log("Front Neck:", frontNeck);
    console.log("Back Neck:", backNeck);
    console.log("Collar Round:", collarRound);
    console.log("Tuck Point:", tuckPoint);
    console.log("Point to Point:", pointToPoint);

    // Skirt & Pant Measurements
    console.log("Skirt Full Length:", skirtFullLength);
    console.log("Seat:", seat);
    console.log("Thigh:", thigh);
    console.log("Knee:", knee);
    console.log("Calf:", calf);
    console.log("Bottom Round:", bottomRound);

    // Options
    console.log("Pad:", pad);
    console.log("Zip:", zip);
    console.log("Back Open:", backOpen);
    console.log("Front Open:", frontOpen);
    console.log("Image:", image);

    // Additional Information
    console.log("Cutting:", cutting);
    console.log("Stitching:", stitching);
    console.log("Hand Work:", handWork);
    console.log("Measurer:", measurer);
    console.log("Checker:", checker);
    console.log("Tailor:", tailor);
    console.log("Date In:", dateIn);
    console.log("Completed Date:", completedDate);

    // Payment Information
    console.log("Total Price:", totalPrice);
    console.log("Advanced Price:", advancedPrice);
    console.log("Balance Price:", balancePrice);
    console.log("CGST:", cgst);
    console.log("SGST:", sgst);

    // Note
    console.log("Note:", note);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_expensetype.php",
        new URLSearchParams({

        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data) {
        console.log(response.data);
        alert("successs");
      }
    } catch (error) {
      console.error("Error adding expense type:", error);
      alert("Failed to add expense type");
    } finally {
      setLoading(false);
    }

    // Clear form fields after submission
    setCustomerName("");
    setContactNumber("");
    setTrialDate("");
    setExpectedDelivery("");
    setItemCategory("");
    setDesignerName("");
    setOrderNumber("");
    setOrderDate("");
    setEmergency("");

    setYokeLength("");
    setYokeRound("");
    setFullLength("");
    setUpperBust("");
    setBust("");
    setUnderBust("");
    setMidWaist("");
    setHip("");
    setShoulder("");
    setShoulderWidth("");
    setSlitLength("");
    setSlitRound("");
    setSleeveType("");
    setSleeveLength("");
    setWrist("");
    setThreeFourth("");
    setElbow("");
    setArmRound("");
    setNeck("");
    setFrontNeck("");
    setBackNeck("");
    setCollarRound("");
    setTuckPoint("");
    setPointToPoint("");

    setSkirtFullLength("");
    setSeat("");
    setThigh("");
    setKnee("");
    setCalf("");
    setBottomRound("");

    setPad(false);
    setZip(false);
    setBackOpen(false);
    setFrontOpen(false);
    setImage("");

    setCutting("");
    setStitching("");
    setHandWork("");
    setMeasurer("");
    setChecker("");
    setTailor("");
    setDateIn("");
    setCompletedDate("");

    setTotalPrice("");
    setAdvancedPrice("");
    setBalancePrice("");

    setNote("");
  };

  const handleCheckboxChange = (setter) => (e) => {
    setter(e.target.checked);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
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
        <DialogContent className="lg:max-w-[90%] overflow-auto lg:max-h-[90%] h-full  mt-3 sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Customer Information</DialogTitle>
            <DialogDescription>Create New Information</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                  <Label htmlFor="customerName" className="text-md font-bold">
                    Customer Name
                  </Label>
                  <Input
                    id="customerName"
                    name="customerName"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="contact-number" className="text-md font-bold">
                    Contact Number
                  </Label>
                  <Input
                    id="contact-number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="trial-date" className="text-md font-bold">
                    Trial Date
                  </Label>
                  <Input
                    id="trial-date"
                    value={trialDate}
                    onChange={(e) => setTrialDate(e.target.value)}
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
                    id="expected-delivery"
                    value={expectedDelivery}
                    onChange={(e) => setExpectedDelivery(e.target.value)}
                    type="date"
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <Label htmlFor="item-category" className="text-md font-bold">
                    Item Category
                  </Label>
                  <select
                    id="item-category"
                    value={itemCategory}
                    onChange={(e) => setItemCategory(e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select Category</option>
                    <option value="Kurthi">Kurthi</option>
                    <option value="Salwar">Salwar</option>
                    <option value="Palazzo">Palazzo</option>
                    <option value="Dupatta">Dupatta</option>
                    {/* Add more options as needed */}
                  </select>

                  <Label htmlFor="designer-name" className="text-md font-bold">
                    Designer Name
                  </Label>
                  <Input
                    id="designer-name"
                    value={designerName}
                    onChange={(e) => setDesignerName(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="order-number" className="text-md font-bold">
                    Order Number
                  </Label>
                  <Input
                    id="order-number"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="order-date" className="text-md font-bold">
                    Order Date
                  </Label>
                  <Input
                    id="order-date"
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.target.value)}
                    type="date"
                    className="w-full"
                  />

                  <Label htmlFor="emergency" className="text-md font-bold">
                    Emergency
                  </Label>
                  <Input
                    id="emergency"
                    value={emergency}
                    onChange={(e) => setEmergency(e.target.value)}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="border-t  border-gray-300 my-6 pt-4 lg:flex md:flex gap-8">
              <div className="lg:w-1/3 md:w-1/3">
                <div className="text-lg font-semibold mb-4">Measurements:</div>
                <table className="min-w-full border-collapse">
                  <tbody>
                    <tr>
                      <th className="border p-2 text-left">Yoke Length</th>
                      <td>
                        <input
                          value={yokeLength}
                          onChange={(e) => setYokeLength(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Yoke Round</th>
                      <td>
                        <input
                          value={yokeRound}
                          onChange={(e) => setYokeRound(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Full Length</th>
                      <td>
                        <input
                          value={fullLength}
                          onChange={(e) => setFullLength(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Upper Bust</th>
                      <td>
                        <input
                          value={upperBust}
                          onChange={(e) => setUpperBust(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Bust</th>
                      <td>
                        <input
                          value={bust}
                          onChange={(e) => setBust(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Under Bust</th>
                      <td>
                        <input
                          value={underBust}
                          onChange={(e) => setUnderBust(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Mid Waist</th>
                      <td>
                        <input
                          value={midWaist}
                          onChange={(e) => setMidWaist(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Hip</th>
                      <td>
                        <input
                          value={hip}
                          onChange={(e) => setHip(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Shoulder</th>
                      <td>
                        <input
                          value={shoulder}
                          onChange={(e) => setShoulder(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Shoulder Width</th>
                      <td>
                        <input
                          value={shoulderWidth}
                          onChange={(e) => setShoulderWidth(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Slit Length</th>
                      <td>
                        <input
                          value={slitLength}
                          onChange={(e) => setSlitLength(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Slit Round</th>
                      <td>
                        <input
                          value={slitRound}
                          onChange={(e) => setSlitRound(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Sleeve Type</th>
                      <td>
                        <input
                          value={sleeveType}
                          onChange={(e) => setSleeveType(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Sleeve Length</th>
                      <td>
                        <input
                          value={sleeveLength}
                          onChange={(e) => setSleeveLength(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Wrist</th>
                      <td>
                        <input
                          value={wrist}
                          onChange={(e) => setWrist(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">3/4th</th>
                      <td>
                        <input
                          value={threeFourth}
                          onChange={(e) => setThreeFourth(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Elbow</th>
                      <td>
                        <input
                          value={elbow}
                          onChange={(e) => setElbow(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Arm Round</th>
                      <td>
                        <input
                          value={armRound}
                          onChange={(e) => setArmRound(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Arm Hole</th>
                      <td>
                        <input
                          value={armHole}
                          onChange={(e) => setArmHole(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Neck</th>
                      <td>
                        <input
                          value={neck}
                          onChange={(e) => setNeck(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">F/N</th>
                      <td>
                        <input
                          value={frontNeck}
                          onChange={(e) => setFrontNeck(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">B/N</th>
                      <td>
                        <input
                          value={backNeck}
                          onChange={(e) => setBackNeck(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Collar Round</th>
                      <td>
                        <input
                          value={collarRound}
                          onChange={(e) => setCollarRound(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Tuck Point</th>
                      <td>
                        <input
                          value={tuckPoint}
                          onChange={(e) => setTuckPoint(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Point to Point</th>
                      <td>
                        <input
                          value={pointToPoint}
                          onChange={(e) => setPointToPoint(e.target.value)}
                          type="text"
                          className="md:p-6 lg:p-2 p-2 border w-full"
                        />
                      </td>
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
                  <table className="min-w-full border-collapse">
                    <tbody>
                      <tr>
                        <th className="border p-2 text-left">Full length</th>
                        <td>
                          <input
                            value={skirtFullLength}
                            onChange={(e) => setSkirtFullLength(e.target.value)}
                            type="text"
                            className="p-2 border w-full"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="border p-2 text-left">Seat</th>
                        <td>
                          <input
                            value={seat}
                            onChange={(e) => setSeat(e.target.value)}
                            type="text"
                            className="p-2 border w-full"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="border p-2 text-left">Thigh</th>
                        <td>
                          <input
                            value={thigh}
                            onChange={(e) => setThigh(e.target.value)}
                            type="text"
                            className="p-2 border w-full"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="border p-2 text-left">Knee</th>
                        <td>
                          <input
                            type="text"
                            value={knee}
                            onChange={(e) => setKnee(e.target.value)}
                            className="p-2 border w-full"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="border p-2 text-left">Calf</th>
                        <td>
                          <input
                            type="text"
                            value={calf}
                            onChange={(e) => setCalf(e.target.value)}
                            className="p-2 border w-full"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="border p-2 text-left">Bottom Round</th>
                        <td>
                          <input
                            type="text"
                            value={bottomRound}
                            onChange={(e) => setBottomRound(e.target.value)}
                            className="p-2 border w-full"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="min-w-full border-collapse">
                  <div className="flex flex-col gap-7 border p-1">
                    <div className="flex gap-7 items-center">
                      <div className="border p-2 px-8 text-left">Zip</div>
                      <IoMdArrowRoundForward />
                      <input
                        checked={zip}
                        onChange={handleCheckboxChange(setZip)}
                        className="w-8 h-8"
                        type="checkbox"
                      />
                    </div>
                    <div className="flex gap-7 items-center">
                      <div className="border p-2 px-8 text-left">Pad</div>
                      <IoMdArrowRoundForward />
                      <input
                        checked={pad}
                        onChange={handleCheckboxChange(setPad)}
                        className="w-8 h-8"
                        type="checkbox"
                      />
                    </div>
                    <div className="flex lg:gap-7 gap-4 items-center">
                      <div className="border p-2 text-left">Back Open</div>
                      <IoMdArrowRoundForward />
                      <input
                        checked={backOpen}
                        onChange={handleCheckboxChange(setBackOpen)}
                        className="w-8 h-8"
                        type="checkbox"
                      />
                      <div className="border p-2 text-left">Front Open</div>
                      <IoMdArrowRoundForward />
                      <input
                        checked={frontOpen}
                        onChange={handleCheckboxChange(setFrontOpen)}
                        className="w-8 h-8"
                        type="checkbox"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <label htmlFor="picture">Picture</label>
                      <input
                        id="picture"
                        type="file"
                        onChange={handleFileChange}
                      />
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
              <div className="lg:flex md:flex lg:gap-4 md:gap-4 mt-7 lg:mx-20">
                <div className="flex flex-col items-start gap-4 lg:w-1/2">
                  <Label htmlFor="customerName" className="text-md font-bold">
                    Cutting
                  </Label>
                  <Input
                    id="cutting"
                    value={cutting}
                    onChange={(e) => setCutting(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="stitching" className="text-md font-bold">
                    Stitching
                  </Label>
                  <Input
                    id="stitching"
                    value={stitching}
                    onChange={(e) => setStitching(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="hand-work" className="text-md font-bold">
                    Hand Work
                  </Label>
                  <Input
                    id="hand-work"
                    value={handWork}
                    onChange={(e) => setHandWork(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="measurer" className="text-md font-bold">
                    Measurer
                  </Label>
                  <Input
                    id="measurer"
                    value={measurer}
                    onChange={(e) => setMeasurer(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="checker" className="text-md font-bold">
                    Checker
                  </Label>
                  <Input
                    id="checker"
                    value={checker}
                    onChange={(e) => setChecker(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="tailor" className="text-md font-bold">
                    Tailor
                  </Label>
                  <Input
                    id="tailor"
                    value={tailor}
                    onChange={(e) => setTailor(e.target.value)}
                    className="w-full"
                  />

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

                <div className="relative flex flex-col items-start mt-28 lg:mt-0 gap-1 lg:w-1/2">
                  <div className="text-lg font-semibold mb-4 absolute -top-14">
                    Payment Information:
                  </div>
                  <div className="flex flex-col w-full items-start gap-4">
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

                    <div className="flex gap-3">
                      <Label htmlFor="cgst" className="text-md font-bold">
                        CGST
                      </Label>
                      <Input
                        id="cgst"
                        type="text"
                        value={cgst}
                        onChange={(e) => setCgst(e.target.value)}
                        className="w-full"
                        placeholder="CGST"
                      />
                      <Label htmlFor="sgst" className="text-md font-bold">
                        SGST
                      </Label>
                      <Input
                        id="sgst"
                        type="text"
                        value={sgst}
                        onChange={(e) => setSgst(e.target.value)}
                        className="w-full"
                        placeholder="SGST"
                      />
                    </div>

                    <Label htmlFor="discount-price" className="text-md font-bold">
                      Discount Price
                    </Label>
                    <Input
                      id="discount-price"
                      type="text"
                      value={balancePrice}
                      onChange={(e) => setBalancePrice(e.target.value)}
                      className="w-full"
                      placeholder="Discount Price"
                    />

                    <Label htmlFor="note" className="text-lg font-semibold">
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
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-[#308E87] hover:bg-[#308E87]">
                Save Changes
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomerInformationModal;
