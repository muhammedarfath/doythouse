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
import { AiFillEdit } from "react-icons/ai";
import axios from 'axios';
import { toast } from "react-hot-toast";

function EditCustomerDetailsModal({ customer, onSuccess }) {
  
  const [customerName, setCustomerName] = useState(customer.cust_name || "");
  const [contactNumber, setContactNumber] = useState(customer.cust_phone || "");
  const [trialDate, setTrialDate] = useState(customer.cust_trialdate || "");
  const [expectedDelivery, setExpectedDelivery] = useState(customer.cust_expecteddelivery || "");
  const [itemCategory, setItemCategory] = useState(customer.cust_itemcategory || "");
  const [designerName, setDesignerName] = useState(customer.cust_designername || "");
  const [orderNumber, setOrderNumber] = useState(customer.cust_orderno || "");
  const [orderDate, setOrderDate] = useState(customer.cust_orderdate || "");
  const [emergency, setEmergency] = useState(customer.cust_emergency || "");
  const [status, setStatus] = useState(customer.status || "pending");

  // Measurements
  const [yokeLength, setYokeLength] = useState(customer.yoke_length || "");
  const [yokeRound, setYokeRound] = useState(customer.yokeRound || "");
  const [fullLength, setFullLength] = useState(customer.fullLength || "");
  const [upperBust, setUpperBust] = useState(customer.upperBust || "");
  const [bust, setBust] = useState(customer.bust || "");
  const [underBust, setUnderBust] = useState(customer.underBust || "");
  const [midWaist, setMidWaist] = useState(customer.midWaist || "");
  const [hip, setHip] = useState(customer.hip || "");
  const [shoulder, setShoulder] = useState(customer.shoulder || "");
  const [shoulderWidth, setShoulderWidth] = useState(customer.shoulderWidth || "");
  const [slitLength, setSlitLength] = useState(customer.slitLength || "");
  const [slitRound, setSlitRound] = useState(customer.slitRound || "");
  const [sleeveType, setSleeveType] = useState(customer.sleeveType || "");
  const [sleeveLength, setSleeveLength] = useState(customer.sleeveLength || "");
  const [wrist, setWrist] = useState(customer.wrist || "");
  const [threeFourth, setThreeFourth] = useState(customer.threeFourth || "");
  const [elbow, setElbow] = useState(customer.elbow || "");
  const [armRound, setArmRound] = useState(customer.armRound || "");
  const [armHole, setArmHole] = useState(customer.armHole || "");
  const [neck, setNeck] = useState(customer.neck || "");
  const [frontNeck, setFrontNeck] = useState(customer.frontNeck || "");
  const [backNeck, setBackNeck] = useState(customer.backNeck || "");
  const [collarRound, setCollarRound] = useState(customer.collarRound || "");
  const [tuckPoint, setTuckPoint] = useState(customer.tuckPoint || "");
  const [pointToPoint, setPointToPoint] = useState(customer.pointToPoint || "");

  // Skirt Measurements
  const [skirtFullLength, setSkirtFullLength] = useState(customer.skirtFullLength || "");
  const [seat, setSeat] = useState(customer.seat || "");
  const [thigh, setThigh] = useState(customer.thigh || "");
  const [knee, setKnee] = useState(customer.knee || "");
  const [calf, setCalf] = useState(customer.calf || "");
  const [bottomRound, setBottomRound] = useState(customer.bottomRound || "");

  // Additional Details
  const [zip, setZip] = useState(customer.zip || false);
  const [pad, setPad] = useState(customer.pad || false);
  const [backOpen, setBackOpen] = useState(customer.backOpen || false);
  const [frontOpen, setFrontOpen] = useState(customer.frontOpen || false);
  const [picture, setPicture] = useState(null);

  const [cutting, setCutting] = useState(customer.cutting || "");
  const [stitching, setStitching] = useState(customer.stitching || "");
  const [handWork, setHandWork] = useState(customer.handWork || "");
  const [measurer, setMeasurer] = useState(customer.measurer || "");
  const [checker, setChecker] = useState(customer.checker || "");
  const [tailor, setTailor] = useState(customer.tailor || "");
  const [dateIn, setDateIn] = useState(customer.dateIn || "");
  const [completedDate, setCompletedDate] = useState(customer.completedDate || "");
  const [totalPrice, setTotalPrice] = useState(customer.totalPrice || "");
  const [advancedPrice, setAdvancedPrice] = useState(customer.advancedPrice || "");
  const [balancePrice, setBalancePrice] = useState(customer.balancePrice || "");
  const [note, setNote] = useState(customer.note || "");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "zip") setZip(checked);
      if (name === "pad") setPad(checked);
      if (name === "backOpen") setBackOpen(checked);
      if (name === "frontOpen") setFrontOpen(checked);
    } else {
      switch (name) {
        case "skirtFullLength":
          setSkirtFullLength(value);
          break;
        case "seat":
          setSeat(value);
          break;
        case "thigh":
          setThigh(value);
          break;
        case "knee":
          setKnee(value);
          break;
        case "calf":
          setCalf(value);
          break;
        case "bottomRound":
          setBottomRound(value);
          break;
        case "cutting":
          setCutting(value);
          break;
        case "stitching":
          setStitching(value);
          break;
        case "handWork":
          setHandWork(value);
          break;
        case "measurer":
          setMeasurer(value);
          break;
        case "checker":
          setChecker(value);
          break;
        case "tailor":
          setTailor(value);
          break;
        case "dateIn":
          setDateIn(value);
          break;
        case "completedDate":
          setCompletedDate(value);
          break;
        case "totalPrice":
          setTotalPrice(value);
          break;
        case "advancedPrice":
          setAdvancedPrice(value);
          break;
        case "balancePrice":
          setBalancePrice(value);
          break;
        case "note":
          setNote(value);
          break;
        default:
          break;
      }
    }
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit_customer.php",
        new URLSearchParams({
          cust_name: customerName,
          cust_phone: contactNumber,
          cust_trialdate: trialDate,
          cust_expecteddelivery: expectedDelivery,
          cust_itemcategory: itemCategory,
          cust_designername: designerName,
          cust_orderno: orderNumber,
          cust_orderdate: orderDate,
          cust_emergency: emergency,
          status: status,

          yoke_length: yokeLength,
          yoke_round: yokeRound,
          full_length: fullLength,
          upper_bust: upperBust,
          bust: bust,
          under_bust: underBust,
          mid_waist: midWaist,
          hip: hip,
          shoulder: shoulder,
          shoulder_wide: shoulderWidth,
          slit_length: slitLength,
          slit_round: slitRound,
          sleeve_type: sleeveType,
          arm_hole: armHole,
          collar_round: collarRound,
          tuck_point: tuckPoint,
          point_to_point: pointToPoint,

          skirt_full_length: skirtFullLength,
          skirt_seat: seat,
          skirt_knee: knee,
          skirt_thigh: thigh,
          skirt_calf: calf,
          skirt_bottom_round: bottomRound,
          pad: pad,
          zip: zip,
          back_open: backOpen,
          front_open: frontOpen,

          cutting: cutting,
          stitching: stitching,
          handwork: handWork,
          measurer: measurer,
          checker: checker,
          tailor: tailor,
          date_in: dateIn,
          completed_date: completedDate,

          totalprice: totalPrice,
          advanceprice: advancedPrice,
          balanceprice: balancePrice,
          note: note,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Customer details updated successfully");
        onSuccess(); 
        resetForm();
      }
    } catch (error) {
      console.error("Customer Edit Error:", error);
      toast.error("Error updating customer details");
    }
  };

  const resetForm = () => {
    setCustomerName("");
    setContactNumber("");
    setTrialDate("");
    setExpectedDelivery("");
    setItemCategory("");
    setDesignerName("");
    setOrderNumber("");
    setOrderDate("");
    setEmergency("");
    setStatus("Pending");
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
    setArmHole("");
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
    setZip(false);
    setPad(false);
    setBackOpen(false);
    setFrontOpen(false);
    setPicture(null);
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

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <AiFillEdit
            className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </DialogTrigger>
        <DialogContent className="lg:max-w-[90%] overflow-auto lg:max-h-[90%] h-full  mt-3 sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>Edit Customer Information</DialogTitle>
            <DialogDescription>Edit Customer Information</DialogDescription>
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
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="contactNumber" className="text-md font-bold">
                    Contact Number
                  </Label>
                  <Input
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="trialDate" className="text-md font-bold">
                    Trial Date
                  </Label>
                  <Input
                    id="trialDate"
                    value={trialDate}
                    onChange={(e) => setTrialDate(e.target.value)}
                    type="date"
                    className="w-full"
                  />

                  <Label
                    htmlFor="expectedDelivery"
                    className="text-md font-bold"
                  >
                    Expected Delivery
                  </Label>
                  <Input
                    id="expectedDelivery"
                    value={expectedDelivery}
                    onChange={(e) => setExpectedDelivery(e.target.value)}
                    type="date"
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <Label htmlFor="itemCategory" className="text-md font-bold">
                    Item Category
                  </Label>
                  <Input
                    id="itemCategory"
                    value={itemCategory}
                    onChange={(e) => setItemCategory(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="designerName" className="text-md font-bold">
                    Designer Name
                  </Label>
                  <Input
                    id="designerName"
                    value={designerName}
                    onChange={(e) => setDesignerName(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="orderNumber" className="text-md font-bold">
                    Order Number
                  </Label>
                  <Input
                    id="orderNumber"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="w-full"
                  />

                  <Label htmlFor="orderDate" className="text-md font-bold">
                    Order Date
                  </Label>
                  <Input
                    id="orderDate"
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

                  <Label htmlFor="status" className="text-md font-bold">
                    Status
                  </Label>
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full border border-gray-300 rounded p-2"
                  >
                    <option value="Delivered">Delivered</option>
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                  </select>
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
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
                          className="p-2 border w-full"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th className="border p-2 text-left">Point To Point</th>
                      <td>
                        <input
                          value={pointToPoint}
                          onChange={(e) => setPointToPoint(e.target.value)}
                          type="text"
                          className="p-2 border w-full"
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
                        <th className="border p-2 text-left">Full Length</th>
                        <td>
                          <input
                            name="skirtFullLength"
                            value={skirtFullLength}
                            onChange={handleInputChange}
                            type="text"
                            className="p-2 border w-full"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="border p-2 text-left">Seat</th>
                        <td>
                          <input
                            name="seat"
                            value={seat}
                            onChange={handleInputChange}
                            type="text"
                            className="p-2 border w-full"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="border p-2 text-left">Thigh</th>
                        <td>
                          <input
                            name="thigh"
                            value={thigh}
                            onChange={handleInputChange}
                            type="text"
                            className="p-2 border w-full"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="border p-2 text-left">Knee</th>
                        <td>
                          <input
                            name="knee"
                            value={knee}
                            onChange={handleInputChange}
                            type="text"
                            className="p-2 border w-full"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="border p-2 text-left">Calf</th>
                        <td>
                          <input
                            name="calf"
                            value={calf}
                            onChange={handleInputChange}
                            type="text"
                            className="p-2 border w-full"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="border p-2 text-left">Bottom Round</th>
                        <td>
                          <input
                            name="bottomRound"
                            value={bottomRound}
                            onChange={handleInputChange}
                            type="text"
                            className="p-2 border w-full"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="min-w-full border-collapse mt-4">
                    <div className="flex flex-col gap-7 border p-1">
                      <div className="flex gap-7 items-center">
                        <div className="border p-2 px-8 text-left">Zip</div>
                        <IoMdArrowRoundForward />
                        <input
                          name="zip"
                          checked={zip}
                          onChange={handleInputChange}
                          className="w-8 h-8"
                          type="checkbox"
                        />
                      </div>
                      <div className="flex gap-7 items-center">
                        <div className="border p-2 px-8 text-left">Pad</div>
                        <IoMdArrowRoundForward />
                        <input
                          name="pad"
                          checked={pad}
                          onChange={handleInputChange}
                          className="w-8 h-8"
                          type="checkbox"
                        />
                      </div>
                      <div className="flex lg:gap-7 gap-4 items-center">
                        <div className="border p-2 text-left">Back Open</div>
                        <IoMdArrowRoundForward />
                        <input
                          name="backOpen"
                          checked={backOpen}
                          onChange={handleInputChange}
                          className="w-8 h-8"
                          type="checkbox"
                        />
                        <div className="border p-2 text-left">Front Open</div>
                        <IoMdArrowRoundForward />
                        <input
                          name="frontOpen"
                          checked={frontOpen}
                          onChange={handleInputChange}
                          className="w-8 h-8"
                          type="checkbox"
                        />
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <label htmlFor="picture">Picture</label>
                        <input
                          id="picture"
                          type="file"
                          onChange={handlePictureChange}
                        />
                      </div>
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
                  <Label htmlFor="cutting" className="text-left">
                    Cutting
                  </Label>
                  <Input
                    id="cutting"
                    name="cutting"
                    value={cutting}
                    onChange={handleInputChange}
                    className="col-span-1"
                  />

                  <Label htmlFor="stitching" className="text-left">
                    Stitching
                  </Label>
                  <Input
                    id="stitching"
                    name="stitching"
                    value={stitching}
                    onChange={handleInputChange}
                    className="col-span-1"
                  />

                  <Label htmlFor="hand-work" className="text-left">
                    Hand Work
                  </Label>
                  <Input
                    id="hand-work"
                    name="handWork"
                    value={handWork}
                    onChange={handleInputChange}
                    className="col-span-1"
                  />

                  <Label htmlFor="measurer" className="text-left">
                    Measurer
                  </Label>
                  <Input
                    id="measurer"
                    name="measurer"
                    value={measurer}
                    onChange={handleInputChange}
                    className="col-span-1"
                  />

                  <Label htmlFor="checker" className="text-left">
                    Checker
                  </Label>
                  <Input
                    id="checker"
                    name="checker"
                    value={checker}
                    onChange={handleInputChange}
                    className="col-span-1"
                  />

                  <Label htmlFor="tailor" className="text-left">
                    Tailor
                  </Label>
                  <Input
                    id="tailor"
                    name="tailor"
                    value={tailor}
                    onChange={handleInputChange}
                    className="col-span-1"
                  />

                  <Label htmlFor="date-in" className="text-left">
                    Date In
                  </Label>
                  <Input
                    id="date-in"
                    name="dateIn"
                    type="date"
                    value={dateIn}
                    onChange={handleInputChange}
                    className="col-span-1"
                  />

                  <Label htmlFor="completed-date" className="text-left">
                    Completed Date
                  </Label>
                  <Input
                    id="completed-date"
                    name="completedDate"
                    type="date"
                    value={completedDate}
                    onChange={handleInputChange}
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
                      name="totalPrice"
                      type="text"
                      value={totalPrice}
                      onChange={handleInputChange}
                      className="col-span-1"
                      placeholder="Enter total price"
                    />

                    <Label htmlFor="advanced-price" className="text-left">
                      Advanced Price
                    </Label>
                    <Input
                      id="advanced-price"
                      name="advancedPrice"
                      type="text"
                      value={advancedPrice}
                      onChange={handleInputChange}
                      className="col-span-1"
                      placeholder="Enter advanced price"
                    />

                    <Label htmlFor="balance-price" className="text-left">
                      Balance Price
                    </Label>
                    <Input
                      id="balance-price"
                      name="balancePrice"
                      type="text"
                      value={balancePrice}
                      onChange={handleInputChange}
                      className="col-span-1"
                      placeholder="Enter balance price"
                    />

                    <Label htmlFor="note" className="text-lg font-semibold">
                      Note
                    </Label>
                    <textarea
                      id="note"
                      name="note"
                      className="w-full p-2 border rounded"
                      rows="4"
                      value={note}
                      onChange={handleInputChange}
                      placeholder="Add any additional notes here..."
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button type="submit" className="bg-[#308E87] hover:bg-[#308E87]">
              Save Changes
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditCustomerDetailsModal;
