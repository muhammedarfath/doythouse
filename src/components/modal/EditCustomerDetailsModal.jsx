import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "../../components/ui/dialog";
import { AiFillEdit } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-hot-toast";
import EditUserInfo from "@/pages/Workorder/EditUserInfo";
import EditMeasurmentFirst from "@/pages/Workorder/EditMeasurmentFirst";
import EditMeasurmentSecond from "./WorkOrder/EditMeasurmentSecond";
import EditMeasurmentThird from "@/pages/Workorder/EditMeasurmentThird";
import EditMeterialIfo from "@/pages/Workorder/EditMeterialIfo";
import EditPaymentInfo from "@/pages/Workorder/EditPaymentInfo";
import MeasurmentImg from "./WorkOrder/MeasurmentImg";
import { useReactToPrint } from "react-to-print";
import EditWorkOrderHeader from "./WorkOrder/EditWorkOrderHeader";


function EditCustomerDetailsModal({ customer, onSuccess }) {
  console.log(customer);
  const [quantityDifferences, setQuantityDifferences] = useState({});
  const [inputValues, setInputValues] = useState(customer.cm_stockused || "");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(customer.cust_itemcategory);
  const [activeSection, setActiveSection] = useState("userInformation");
  const [customerName, setCustomerName] = useState(customer.cust_name || "");
  const [contactNumber, setContactNumber] = useState(customer.cust_phone || "");
  const [trialDate, setTrialDate] = useState(customer.cust_trialdate || "");
  const [expectedDelivery, setExpectedDelivery] = useState(
    customer.cust_expecteddelivery || ""
  );
  const [designerName, setDesignerName] = useState(
    customer.cust_designername || ""
  );
  const [orderNumber, setOrderNumber] = useState(customer.cust_orderno || "");
  const [orderDate, setOrderDate] = useState(customer.cust_orderdate || "");
  const [emergency, setEmergency] = useState(customer.cust_emergency || "");
  const [status, setStatus] = useState(customer.status || "");
  const [selectedCategory, setSelectedCategory] = useState(
    customer.cust_itemcategory
  );
  const [yokeLength, setYokeLength] = useState(customer.yoke_length || "");
  const [yokeRound, setYokeRound] = useState(customer.yoke_round || "");
  const [fullLength, setFullLength] = useState(customer.full_length || "");
  const [upperBust, setUpperBust] = useState(customer.upper_bust || "");
  const [bust, setBust] = useState(customer.bust || "");
  const [underBust, setUnderBust] = useState(customer.under_bust || "");
  const [midWaist, setMidWaist] = useState(customer.mid_waist || "");
  const [hip, setHip] = useState(customer.hip || "");
  const [shoulder, setShoulder] = useState(customer.shoulder || "");
  const [shoulderWidth, setShoulderWidth] = useState(
    customer.shoulder_wide || ""
  );
  const [slitLength, setSlitLength] = useState(customer.slit_length || "");
  const [slitRound, setSlitRound] = useState(customer.slit_round || "");
  const [sleeveType, setSleeveType] = useState(customer.sleeve_type || "");
  const [sleeveLength, setSleeveLength] = useState(
    customer.sleeve_length || ""
  );
  const [wrist, setWrist] = useState(customer.wrist || "");
  const [threeFourth, setThreeFourth] = useState(customer.three_fourth || "");
  const [elbow, setElbow] = useState(customer.elbow || "");
  const [armRound, setArmRound] = useState(customer.arm_round || "");
  const [armHole, setArmHole] = useState(customer.arm_hole || "");
  const [neck, setNeck] = useState(customer.neck || "");
  const [frontNeck, setFrontNeck] = useState(customer.fn || "");
  const [backNeck, setBackNeck] = useState(customer.bn || "");
  const [collarRound, setCollarRound] = useState(customer.collor_round || "");
  const [tuckPoint, setTuckPoint] = useState(customer.tuck_point || "");
  const [pointToPoint, setPointToPoint] = useState(
    customer.point_to_point || ""
  );
  const [skirtFullLength, setSkirtFullLength] = useState(
    customer.skirt_full_length || ""
  );
  const [seat, setSeat] = useState(customer.skirt_seat || "");
  const [thigh, setThigh] = useState(customer.skirt_thigh || "");
  const [knee, setKnee] = useState(customer.skirt_knee || "");
  const [calf, setCalf] = useState(customer.skirt_calf || "");
  const [bottomRound, setBottomRound] = useState(
    customer.skirt_bottom_round || ""
  );
  const [pad, setPad] = useState(customer.pad === "true");
  const [zip, setZip] = useState(customer.zip === "true");
  const [backOpen, setBackOpen] = useState(customer.back_open === "true");
  const [frontOpen, setFrontOpen] = useState(customer.front_open === "true");
  const [image, setImage] = useState(customer.image || "");
  const [dateIn, setDateIn] = useState(customer.cadate_in || "");
  const [completedDate, setCompletedDate] = useState(
    customer.cacompleted_date || ""
  );
  const [totalPrice, setTotalPrice] = useState(customer.total || "");
  const [advancedPrice, setAdvancedPrice] = useState(
    customer.advanceprice || ""
  );
  const [balancePrice, setBalancePrice] = useState(
    customer.balance_price || ""
  );
  const [discount, setDiscount] = useState(customer.discount || "");
  const [note, setNote] = useState(customer.note || "");
  const [categories, setCategories] = useState([]);
  const [stockReport, setStockReport] = useState([]);
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(customer.total || "");

  const [cutting, setCutting] = useState(customer.cacutting || "");
  const [stitching, setStitching] = useState(customer.castiching || "");
  const [handWork, setHandWork] = useState(customer.cahandwork || "");
  const [measurer, setMeasurer] = useState(customer.cameasurer || "");
  const [checker, setChecker] = useState(customer.cachecker || "");

  const [cuttingPrice, setCuttingPrice] = useState(customer.cutting || "");
  const [stitchingPrice, setStitchingPrice] = useState(customer.stiching || "");
  const [handWorkPrice, setHandWorkPrice] = useState(customer.handwork || "");
  const [measurerPrice, setMeasurerPrice] = useState(customer.measurer || "");
  const [checkerPrice, setCheckerPrice] = useState(customer.checker || "");
  const [selectedStock, setSelectedStock] = useState("");
  const [designers, setDesigners] = useState([]);
  const [designerPhoneNumber, setDesignerPhoneNumber] = useState(customer.cust_designerphone || "");
  const [totalMRP, setTotalMRP] = useState(customer.materialprice || "");
  const [cgst, setCgst] = useState("");
  const [sgst, setSgst] = useState("");
  const [totalBill, setTotalBill] = useState("");
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

    const formData = new FormData();

    formData.append("id", customer.cust_id);
    formData.append("cust_name", customerName);
    formData.append("cust_phone", contactNumber);
    formData.append("cust_trialdate", trialDate);
    formData.append("cust_expecteddelivery", expectedDelivery);
    formData.append("cust_itemcategory", category);
    formData.append("cust_designername", designerName);
    formData.append("cust_designername", designerPhoneNumber);
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

    formData.append("stock_values", inputValues);
    const formattedStockValues = Object.entries(quantityDifferences)
      .map(([key, value]) => `${key}=${value}`)
      .join(",");
    formData.append("quantity_differences", formattedStockValues);

    formData.append("cutting1", cuttingPrice);
    formData.append("stiching1", stitchingPrice);
    formData.append("handwork1", handWorkPrice);
    formData.append("measurer1", measurerPrice);
    formData.append("checker1", checkerPrice);
    formData.append("total1", total);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit_customer.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Customer edit successfully");
        setOpen(false);
        onSuccess();
      }
    } catch (error) {
      toast.error("Error editing customer:", error);
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


  const section1Ref = useRef(); 
  const section2Ref = useRef(); 

  const handlePrint2 = useReactToPrint({
    content: () => section2Ref.current,  
    pageStyle: `
      @page {
        size: auto;
        margin: 20mm;
      }
    `,  
  });


  const handlePrint = useReactToPrint({
    content: () => section1Ref.current,  
    pageStyle: `
      @page {
        size: auto;
        margin: 20mm;
      }
    `,  
  });

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <span>
            <AiFillEdit
              className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </span>
        </DialogTrigger>
        <DialogContent className="lg:max-w-[90%] overflow-auto lg:max-h-[90%] h-full  mt-3 sm:max-w-[900px]">
          <EditWorkOrderHeader
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
          {activeSection === "userInformation" && (
            <div >
              <EditUserInfo
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
              />
              <div className="border-t  border-gray-300 my-6 pt-4 lg:flex md:flex gap-8">
                <EditMeasurmentFirst 
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

                <EditMeasurmentSecond
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

              <EditMeasurmentThird
                section2Ref={section2Ref}
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
                setTotalMRP={setTotalMRP}
              />
            </div>
          )}
          {activeSection === "materialInformation" && (
            <EditMeterialIfo
              stockReport={stockReport}
              setStockReport={setStockReport}
              handleInputChange={handleInputChange}
              selectedStock={selectedStock}
              setSelectedStock={setSelectedStock}
              inputValue={inputValues}
              setInputValues={setInputValues}
              totalMRP={totalMRP}
              setTotalMRP={setTotalMRP}
              quantityDifferences={quantityDifferences}
              setQuantityDifferences={setQuantityDifferences}
            />
          )}
          {activeSection === "paymentInformation" && (
            <EditPaymentInfo
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
            <Button
              type="print"
              className="bg-[#308E87] hover:bg-[#308E87]"
              onClick={handlePrint}
            >
              User Info Print
            </Button>
            <Button
              type="print"
              className="bg-[#308E87] hover:bg-[#308E87]"
              onClick={handlePrint2}
            >
              Payment Info Print
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditCustomerDetailsModal;
