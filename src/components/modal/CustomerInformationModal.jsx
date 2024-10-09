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

function CustomerInformationModal({ onSuccess }) {
  const [currentInvoiceData, setCurrentInvoiceData] = useState(null);
  const [workOrders, setWorkOrders] = useState([]);
  const [workOrder, setWorkOrder] = useState("");

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/fetch.php?typ=orderlist"
      );
      if (response.data) {
        setWorkOrders(response.data);
      } else {
        console.log("somthing went wrong");
      }
    } catch {
      console.log("somthing went wrong");
    }
  };


  const handleWorkOrderChange = async (e) => {
    const selectedOrder = e.target.value;
    setWorkOrder(selectedOrder);

    if (selectedOrder) {
      try {
        const response = await axios.get(
          `https://storeconvo.com/php/fetch.php?typ=invoicedetails&id=${selectedOrder}`
        );
        const invoiceData =
          Array.isArray(response.data) && response.data.length > 0
            ? response.data[0]
            : {};

        setCurrentInvoiceData(invoiceData);
      } catch (error) {
        console.error("Error fetching invoice data:", error);
      }
    } else {
      setCurrentInvoiceData(null);
      setCustomerName("");
    }
  };


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
  const [cuttingPrice, setCuttingPrice] = useState("");
  const [stitchingPrice, setStitchingPrice] = useState("");
  const [handWorkPrice, setHandWorkPrice] = useState("");
  const [measurerPrice, setMeasurerPrice] = useState("");
  const [checkerPrice, setCheckerPrice] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [designers, setDesigners] = useState([]);
  const [designerPhoneNumber, setDesignerPhoneNumber] = useState("");
  const [inputValues, setInputValues] = useState([]);
  const [totalMRP, setTotalMRP] = useState(0);
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  const [totalBill, setTotalBill] = useState("");

  console.log(currentInvoiceData);


  useEffect(() => {
    if (currentInvoiceData) {
      setCustomerName(currentInvoiceData.cust_name || "");
      setContactNumber(currentInvoiceData.cust_phone || "");
      setTrialDate(currentInvoiceData.cust_trialdate || "");
      setExpectedDelivery(currentInvoiceData.cust_expecteddelivery || "");
      setDesignerName(currentInvoiceData.cust_designername || "");
      setOrderDate(currentInvoiceData.order_date || "");
      setEmergency(currentInvoiceData.cust_emergency || "");
      setStatus(currentInvoiceData.status || "");
      setYokeLength(currentInvoiceData.yoke_length || "");
      setYokeRound(currentInvoiceData.yoke_round || "");
      setFullLength(currentInvoiceData.full_length || "");
      setUpperBust(currentInvoiceData.upper_bust || "");
      setBust(currentInvoiceData.bust || "");
      setUnderBust(currentInvoiceData.under_bust || "");
      setMidWaist(currentInvoiceData.mid_waist || "");
      setHip(currentInvoiceData.hip || "");
      setShoulder(currentInvoiceData.shoulder || "");
      setShoulderWidth(currentInvoiceData.shoulder_wide || "");
      setSlitLength(currentInvoiceData.slit_length || "");
      setSlitRound(currentInvoiceData.slit_round || "");
      setSleeveType(currentInvoiceData.sleeve_type || "");
      setSleeveLength(currentInvoiceData.sleeve_length || "");
      setWrist(currentInvoiceData.wrist || "");
      setThreeFourth(currentInvoiceData.three_fourth || "");
      setElbow(currentInvoiceData.elbow || "");
      setArmRound(currentInvoiceData.arm_round || "");
      setArmHole(currentInvoiceData.arm_hole || "");
      setNeck(currentInvoiceData.neck || "");
      setFrontNeck(currentInvoiceData.fn || "");
      setBackNeck(currentInvoiceData.bn || "");
      setCollarRound(currentInvoiceData.collor_round || "");
      setTuckPoint(currentInvoiceData.tuck_point || "");
      setPointToPoint(currentInvoiceData.point_to_point || "");
      setSkirtFullLength(currentInvoiceData.skirt_full_length || "");
      setSeat(currentInvoiceData.skirt_seat || "");
      setThigh(currentInvoiceData.skirt_thigh || "");
      setKnee(currentInvoiceData.skirt_knee || "");
      setCalf(currentInvoiceData.skirt_calf || "");
      setBottomRound(currentInvoiceData.skirt_bottom_round || "");
      setPad(currentInvoiceData.pad || false);
      setZip(currentInvoiceData.zip || false);
      setBackOpen(currentInvoiceData.back_open || false);
      setFrontOpen(currentInvoiceData.front_open || false);
      setImage(currentInvoiceData.image || "");
      setDateIn(currentInvoiceData.date_in || "");
      setCompletedDate(currentInvoiceData.completed_date || "");
      setTotalPrice(currentInvoiceData.total_price || "");
      setAdvancedPrice(currentInvoiceData.advanced_price || "");
      setBalancePrice(currentInvoiceData.balance_price || "");
      setDiscount(currentInvoiceData.discount || "");
      setNote(currentInvoiceData.note || "");
      setCategories(currentInvoiceData.categories || []);
      setSelectedCategory(currentInvoiceData.cust_itemcategory)
      setStockReport(currentInvoiceData.stock_report || []);
      setCutting(currentInvoiceData.cacutting || "");
      setStitching(currentInvoiceData.stitching || "");
      setHandWork(currentInvoiceData.hand_work || "");
      setMeasurer(currentInvoiceData.measurer || "");
      setChecker(currentInvoiceData.checker || "");
      setCuttingPrice(currentInvoiceData.cutting_price || "");
      setStitchingPrice(currentInvoiceData.stitching_price || "");
      setHandWorkPrice(currentInvoiceData.hand_work_price || "");
      setMeasurerPrice(currentInvoiceData.measurer_price || "");
      setCheckerPrice(currentInvoiceData.checker_price || "");
      setSelectedStock(currentInvoiceData.selected_stock || "");
      setDesigners(currentInvoiceData.designers || []);
      setDesignerPhoneNumber(currentInvoiceData.cust_designerphone || "");
      setInputValues(currentInvoiceData.input_values || []);
      setTotalMRP(currentInvoiceData.total_mrp || 0);
      setCgst(currentInvoiceData.cgst || "");
      setSgst(currentInvoiceData.sgst || "");
      setTotalBill(currentInvoiceData.total_bill || "");
    }
  }, [currentInvoiceData]);

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setOrderDate(currentDate);
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=employee"
      );
      setDesigners(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

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

  const handleInputChange = (e, index, field) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = e.target.value;
    setRows(updatedRows);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);
    setCategory(newCategory);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !customerName ||
      !contactNumber ||
      !trialDate ||
      !expectedDelivery ||
      !category ||
      !designerName ||
      !orderNumber ||
      !orderDate ||
      !designerPhoneNumber ||
      !emergency ||
      !status
    ) {
      toast.error("Please fill in all mandatory fields.");
      return;
    }

    const formData = new FormData();

    formData.append("cust_name", customerName);
    formData.append("cust_phone", contactNumber);
    formData.append("cust_trialdate", trialDate);
    formData.append("cust_expecteddelivery", expectedDelivery);
    formData.append("cust_itemcategory", category);
    formData.append("cust_designername", designerName);
    formData.append("cust_designerphone", designerPhoneNumber);
    formData.append("cust_orderno", orderNumber);
    formData.append("cust_orderdate", orderDate);
    formData.append("cust_emergency", emergency);
    formData.append("status", status);

    formData.append("yoke_length", yokeLength);
    formData.append("yoke_round", yokeRound);
    formData.append("full_length", fullLength);
    formData.append("shoulder", shoulder);
    formData.append("sleeve_length", sleeveLength);
    formData.append("mid_waist", midWaist);
    formData.append("arm_hole", armHole);
    formData.append("hip", hip);
    formData.append("upper_bust", upperBust);
    formData.append("bust", bust);
    formData.append("under_bust", underBust);
    formData.append("slit_round", slitRound);
    formData.append("shoulder_wide", shoulderWidth);
    formData.append("slit_length", slitLength);
    formData.append("tuck_point", tuckPoint);
    formData.append("point_to_point", pointToPoint);
    formData.append("collor_round", collarRound);
    formData.append("neck", neck);
    formData.append("fn", frontNeck);
    formData.append("bn", backNeck);
    formData.append("sleeve_type", sleeveType);
    formData.append("wrist", wrist);
    formData.append("three_fourth", threeFourth);
    formData.append("elbow", elbow);
    formData.append("arm_round", armRound);

    formData.append("skirt_full_length", skirtFullLength);
    formData.append("skirt_seat", seat);
    formData.append("skirt_knee", knee);
    formData.append("skirt_thigh", thigh);
    formData.append("skirt_calf", calf);
    formData.append("skirt_bottom_round", bottomRound);

    formData.append("pad", pad);
    formData.append("zip", zip);
    formData.append("back_open", backOpen);
    formData.append("front_open", frontOpen);

    if (image) {
      formData.append("image", image);
    }
    formData.append("cutting", cutting);
    formData.append("stiching", stitching);
    formData.append("handwork", handWork);
    formData.append("measurer", measurer);
    formData.append("checker", checker);
    formData.append("date_in", dateIn);
    formData.append("completed_date", completedDate);

    formData.append("stock_values", JSON.stringify(inputValues));

    formData.append("cutting1", cuttingPrice);
    formData.append("stiching1", stitchingPrice);
    formData.append("handwork1", handWorkPrice);
    formData.append("measurer1", measurerPrice);
    formData.append("checker1", checkerPrice);
    formData.append("total1", total);

    formData.append("totalprice", totalBill);
    formData.append("advanceprice", advancedPrice);
    formData.append("balanceprice", balancePrice);
    formData.append("note", note);
    formData.append("cgst", cgst);
    formData.append("sgst", sgst);
    formData.append("materialprice", totalMRP);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_customer.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        toast.success("Customer added successfully");
        setOpen(false);
        resetFormFields();
        onSuccess();
      }
    } catch (error) {
      toast.error("network error:", error);
    } finally {
      setLoading(false);
    }
  };

  const resetFormFields = () => {
    setCustomerName("");
    setContactNumber("");
    setTrialDate("");
    setExpectedDelivery("");
    setCategory("");
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
    setImage(null);
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
            workOrders={workOrders}
            setWorkOrder={setWorkOrder}
            handleWorkOrderChange={handleWorkOrderChange}
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
                designers={designers}
                emergency={emergency}
                status={status}
                designerPhoneNumber={designerPhoneNumber}
                setDesignerPhoneNumber={setDesignerPhoneNumber}
                currentInvoicedata={currentInvoiceData}
              />
              <div className="border-t border-gray-300 my-6 pt-4 lg:flex md:flex gap-8">
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
                  designerPhoneNumber={designerPhoneNumber}
                  setDesignerPhoneNumber={setDesignerPhoneNumber}
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
                cgst={cgst}
                setCgst={setCgst}
                sgst={sgst}
                setSgst={setSgst}
                totalBill={totalBill}
                setTotalBill={setTotalBill}
                totalMRP={totalMRP}
                total={total}
              />
            </div>
          )}
          {activeSection === "materialInformation" && (
            <MeterialIfo
              stockReport={stockReport}
              setStockReport={setStockReport}
              handleInputChange={handleInputChange}
              selectedStock={selectedStock}
              setSelectedStock={setSelectedStock}
              inputValues={inputValues}
              setInputValues={setInputValues}
              totalMRP={totalMRP}
              setTotalMRP={setTotalMRP}
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
              total={total}
              setTotal={setTotal}
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
