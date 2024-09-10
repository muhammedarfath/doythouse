import React, { useEffect, useState } from "react";
import CustomerInformationModal from "../../components/modal/CustomerInformationModal";
import { CiFilter } from "react-icons/ci";
import axios from "axios";
import CustomerTable from "./CustomerTable";
import CustomerFilter from "./CustomerFilter";
import Search from "@/components/Search/Search";

function CustomerList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [customer, setCustomer] = useState("");

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=customer"
      );
      setCustomer(response.data);
    } catch (error) {
      console.error("Error fetching Customers:", error);
    }
  };

  const handleChangeStatus = async (e, customerId) => {
    const newStatus = e.target.value;
    try {
    const response =   await axios.post(
        `https://storeconvo.com/php/edit.php/`,
        {
          id: customerId,
          typ: "status",
          status:newStatus
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error deleting expense:", error);
      toast.error("Failed to delete expense", { id: toastId });
    }
  };


  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Order List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0 flex-col">
              <Search/>
              <div className="flex items-center gap-5">
                <div
                  className="border rounded-md p-2 bg-[#D8E9E7] text-[#308E87] "
                  onClick={toggleFilter}
                >
                  <CiFilter className="text-2xl cursor-pointer hover:animate-shake" />
                </div>
                <CustomerInformationModal />
              </div>
            </div>
             <CustomerFilter isFilterVisible={isFilterVisible}/>
             <CustomerTable customer={customer} fetchCustomer={fetchCustomer} handleChangeStatus={handleChangeStatus}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
