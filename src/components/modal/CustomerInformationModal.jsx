import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../components/ui/button";
import { FiPlus } from "react-icons/fi";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../../components/ui/dialog";
import axios from "axios";
import { toast } from "react-hot-toast";
import Userinfo from "./WorkOrder/Userinfo";
import MeasurmentFirst from "./WorkOrder/MeasurmentFirst";
import MeasurmentSecond from "./WorkOrder/MeasurmentSecond";
import MeasurmentThird from "./WorkOrder/MeasurmentThird";
import MeterialIfo from "./WorkOrder/MeterialIfo";
import PaymentInfo from "./WorkOrder/PaymentInfo";
import MeasurmentImg from "./WorkOrder/MeasurmentImg";
import WorkOrderHeader from "./WorkOrder/WorkOrderHeader";

function CustomerInformationModal() {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [activeSection, setActiveSection] = useState("userInformation");
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [trialDate, setTrialDate] = useState("");
  const [expectedDelivery, setExpectedDelivery] = useState("");
  const [designerName, setDesignerName] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [emergency, setEmergency] = useState("");
  const [status, setStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(category);
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
  const [skirtFullLength, setSkirtFullLength] = useState("");
  const [seat, setSeat] = useState("");
  const [thigh, setThigh] = useState("");
  const [knee, setKnee] = useState("");
  const [calf, setCalf] = useState("");
  const [bottomRound, setBottomRound] = useState("");
  const [pad, setPad] = useState(false);
  const [zip, setZip] = useState(false);
  const [backOpen, setBackOpen] = useState(false);
  const [frontOpen, setFrontOpen] = useState(false);
  const [image, setImage] = useState("");
  const [dateIn, setDateIn] = useState("");
  const [completedDate, setCompletedDate] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [advancedPrice, setAdvancedPrice] = useState("");
  const [balancePrice, setBalancePrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [note, setNote] = useState("");
  const [categories, setCategories] = useState([]);
  const [stockReport, setStockReport] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [cutting, setCutting] = useState("");
  const [stitching, setStitching] = useState("");
  const [handWork, setHandWork] = useState("");
  const [measurer, setMeasurer] = useState("");
  const [checker, setChecker] = useState("");
  const [tailor, setTailor] = useState("");
  const [cuttingPrice, setCuttingPrice] = useState("");
  const [stitchingPrice, setStitchingPrice] = useState("");
  const [handWorkPrice, setHandWorkPrice] = useState("");
  const [measurerPrice, setMeasurerPrice] = useState("");
  const [checkerPrice, setCheckerPrice] = useState("");
  const [tailorPrice, setTailorPrice] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/php/fetch.php?typ=category"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

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

  const handleInputChange = (e, stockId) => {
    const { value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [stockId]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    setCategory(newCategory);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_customer.php",
        new URLSearchParams({
          cust_name: customerName,
          cust_phone: contactNumber,
          cust_trialdate: trialDate,
          cust_expecteddelivery: expectedDelivery,
          cust_itemcategory: category,
          cust_designername: designerName,
          cust_orderno: orderNumber,
          cust_orderdate: orderDate,
          cust_emergency: emergency,
          status: status,

          yoke_length: yokeLength,
          yoke_round: yokeRound,
          full_length: fullLength,
          shoulder: shoulder,
          sleeve_length: sleeveLength,
          mid_waist: midWaist,
          arm_hole: armHole,
          hip: hip,
          upper_bust: upperBust,
          bust: bust,
          under_bust: underBust,
          slit_round: slitRound,
          shoulder_wide: shoulderWidth,
          slit_length: slitLength,
          tuck_point: tuckPoint,
          point_to_point: pointToPoint,
          collor_round: collarRound,
          neck: neck,
          fn: frontNeck,
          bn: backNeck,
          sleeve_type: sleeveType,
          wrist: wrist,
          three_fourth: threeFourth,

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
          stiching: stitching,
          handwork: handWork,
          measurer: measurer,
          checker: checker,
          tailor: tailor,
          date_in: dateIn,
          completed_date: completedDate,
          stock_values: JSON.stringify(inputValues),
          
          cutting1: cuttingPrice,
          stiching1: stitchingPrice,
          handwork1: handWorkPrice,
          measurer1: measurerPrice,
          checker1: checkerPrice,
          tailor1: tailorPrice,
          total1:300,

        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Customer added successfully");
        // setOpen(false);
        // setCustomerName("");
        // setContactNumber("");
        // setTrialDate("");
        // setExpectedDelivery("");
        // setItemCategory("");
        // setDesignerName("");
        // setOrderNumber("");
        // setOrderDate("");
        // setEmergency("");

        // setYokeLength("");
        // setYokeRound("");
        // setFullLength("");
        // setUpperBust("");
        // setBust("");
        // setUnderBust("");
        // setMidWaist("");
        // setHip("");
        // setShoulder("");
        // setShoulderWidth("");
        // setSlitLength("");
        // setSlitRound("");
        // setSleeveType("");
        // setSleeveLength("");
        // setWrist("");
        // setThreeFourth("");
        // setElbow("");
        // setArmRound("");
        // setNeck("");
        // setFrontNeck("");
        // setBackNeck("");
        // setCollarRound("");
        // setTuckPoint("");
        // setPointToPoint("");

        // setSkirtFullLength("");
        // setSeat("");
        // setThigh("");
        // setKnee("");
        // setCalf("");
        // setBottomRound("");

        // setPad(false);
        // setZip(false);
        // setBackOpen(false);
        // setFrontOpen(false);
        // setImage("");

        // setCutting("");
        // setStitching("");
        // setHandWork("");
        // setMeasurer("");
        // setChecker("");
        // setTailor("");
        // setDateIn("");
        // setCompletedDate("");

        // setTotalPrice("");
        // setAdvancedPrice("");
        // setBalancePrice("");

        // setNote("");
      }
    } catch (error) {
      console.error("Error adding  type:", error);
      alert("Failed to add ");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckboxChange = (setter) => (e) => {
    setter(e.target.checked);
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-[#308E87] hover:bg-[#308E87]"
            onClick={() => setOpen(true)}
          >
            <FiPlus className="text-white text-xl" />
            Create New Customer
          </Button>
        </DialogTrigger>
        <DialogContent className="lg:max-w-[90%] overflow-auto lg:max-h-[90%] h-full  mt-3 sm:max-w-[900px]">
          <WorkOrderHeader
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          {activeSection === "userInformation" && (
            <div>
              <Userinfo
                section1Ref={section1Ref}
                setCustomerName={setCustomerName}
                setContactNumber={setContactNumber}
                setTrialDate={setTrialDate}
                setExpectedDelivery={setExpectedDelivery}
                setDesignerName={setDesignerName}
                setOrderNumber={setOrderNumber}
                setOrderDate={setOrderDate}
                setEmergency={setEmergency}
                setStatus={setStatus}
                customerName={customerName}
                contactNumber={contactNumber}
                trialDate={trialDate}
                expectedDelivery={expectedDelivery}
                selectedCategory={selectedCategory}
                handleCategoryChange={handleCategoryChange}
                categories={categories}
                designerName={designerName}
                orderNumber={orderNumber}
                orderDate={orderDate}
                emergency={emergency}
                status={status}
              />
              <div className="border-t  border-gray-300 my-6 pt-4 lg:flex md:flex gap-8">
                <MeasurmentFirst
                  section2Ref={section2Ref}
                  yokeLength={yokeLength}
                  setYokeLength={setYokeLength}
                  yokeRound={yokeRound}
                  setYokeRound={setYokeRound}
                  fullLength={fullLength}
                  setFullLength={setFullLength}
                  upperBust={upperBust}
                  setUpperBust={setUpperBust}
                  bust={bust}
                  setBust={setBust}
                  underBust={underBust}
                  setUnderBust={setUnderBust}
                  midWaist={midWaist}
                  setMidWaist={setMidWaist}
                  hip={hip}
                  setHip={setHip}
                  shoulder={shoulder}
                  setShoulder={setShoulder}
                  shoulderWidth={shoulderWidth}
                  setShoulderWidth={setShoulderWidth}
                  slitLength={slitLength}
                  setSlitLength={setSlitLength}
                  slitRound={slitRound}
                  setSlitRound={setSlitRound}
                  sleeveType={sleeveType}
                  setSleeveType={setSleeveType}
                  sleeveLength={sleeveLength}
                  setSleeveLength={setSleeveLength}
                  wrist={wrist}
                  setWrist={setWrist}
                  threeFourth={threeFourth}
                  setThreeFourth={setThreeFourth}
                  elbow={elbow}
                  setElbow={setElbow}
                  armRound={armRound}
                  setArmRound={setArmRound}
                  armHole={armHole}
                  setArmHole={setArmHole}
                  neck={neck}
                  setNeck={setNeck}
                  frontNeck={frontNeck}
                  setFrontNeck={setFrontNeck}
                  backNeck={backNeck}
                  setBackNeck={setBackNeck}
                  collarRound={collarRound}
                  setCollarRound={setCollarRound}
                  tuckPoint={tuckPoint}
                  setTuckPoint={setTuckPoint}
                  pointToPoint={pointToPoint}
                  setPointToPoint={setPointToPoint}
                />

                <MeasurmentSecond
                  section3Ref={section3Ref}
                  skirtFullLength={skirtFullLength}
                  setSkirtFullLength={setSkirtFullLength}
                  seat={seat}
                  setSeat={setSeat}
                  thigh={thigh}
                  setThigh={setThigh}
                  knee={knee}
                  setKnee={setKnee}
                  calf={calf}
                  setCalf={setCalf}
                  bottomRound={bottomRound}
                  setBottomRound={setBottomRound}
                  zip={zip}
                  setZip={setZip}
                  pad={pad}
                  handleCheckboxChange={handleCheckboxChange}
                  setPad={setPad}
                  backOpen={backOpen}
                  setBackOpen={setBackOpen}
                  frontOpen={frontOpen}
                  setFrontOpen={setFrontOpen}
                  handleFileChange={handleFileChange}
                />
                <MeasurmentImg />
              </div>

              <MeasurmentThird
                cutting={cutting}
                setCutting={setCutting}
                stitching={stitching}
                setStitching={setStitching}
                handWork={handWork}
                setHandWork={setHandWork}
                measurer={measurer}
                setMeasurer={setMeasurer}
                checker={checker}
                setChecker={setChecker}
                tailor={tailor}
                setTailor={setTailor}
                note={note}
                setNote={setNote}
                dateIn={dateIn}
                setDateIn={setDateIn}
                completedDate={completedDate}
                setCompletedDate={setCompletedDate}
                totalPrice={totalPrice}
                advancedPrice={advancedPrice}
                setAdvancedPrice={setAdvancedPrice}
                setTotalPrice={setTotalPrice}
                balancePrice={balancePrice}
                setBalancePrice={setBalancePrice}
                discount={discount}
                setDiscount={setDiscount}
              />
            </div>
          )}
          {activeSection === "materialInformation" && (
            <MeterialIfo
              stockReport={stockReport}
              setStockReport={setStockReport}
              handleInputChange={handleInputChange}
              inputValues={inputValues}
            />
          )}
          {activeSection === "paymentInformation" && (
            <PaymentInfo
              cutting={cuttingPrice}
              setCutting={setCuttingPrice}
              stitching={stitchingPrice}
              setStitching={setStitchingPrice}
              handWork={handWorkPrice}
              setHandWork={setHandWorkPrice}
              measurer={measurerPrice}
              setMeasurer={setMeasurerPrice}
              checker={checkerPrice}
              setChecker={setCheckerPrice}
              tailor={tailorPrice}
              setTailor={setTailorPrice}
              total={total}
            />
          )}

          <DialogFooter>
            <Button
              type="submit"
              className="bg-[#308E87] hover:bg-[#308E87]"
              onClick={handleSubmit}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomerInformationModal;
