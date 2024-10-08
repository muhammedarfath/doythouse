import React, { useEffect, useState } from "react";
import CustomerInformationModal from "../../components/modal/CustomerInformationModal";
import { CiFilter } from "react-icons/ci";
import axios from "axios";
import CustomerTable from "./CustomerTable";
import CustomerFilter from "./CustomerFilter";
import Search from "@/components/Search/Search";
import { toast } from "react-hot-toast";
import { useOutletContext } from "react-router-dom";

function CustomerList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [customer, setCustomer] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { open } = useOutletContext();
  const [employees, setEmployees] = useState([]);
  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    employeeName: "",
    status: "",
  });
  
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

  useEffect(() => {
    fetchEmployees();
  }, []);


  console.log(customer);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=employee"
      );
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleChangeStatus = async (e, customerId) => {
    const newStatus = e.target.value;
    try {
      const response = await axios.post(
        "https://storeconvo.com/php/edit.php/",
        {
          id: customerId,
          status: newStatus,
          typ: "status",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      fetchCustomer();
    } catch (error) {
      toast.error("Failed to delete expense");
    }
  };

  const filteredCustomers = customer.filter((cust) => {
    const matchesSearch = cust.cust_orderno
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesEmployee = filters.employeeName
      ? cust.employee_name === filters.employeeName
      : true;

    const matchesStatus = filters.status
      ? cust.status === filters.status
      : true;

    const matchesDateRange =
      (!filters.fromDate ||
        new Date(cust.date) >= new Date(filters.fromDate)) &&
      (!filters.toDate || new Date(cust.date) <= new Date(filters.toDate));

    return (
      matchesSearch && matchesEmployee && matchesStatus && matchesDateRange
    );
  });

  const handleDelete = (CustomerId) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this customer?</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => confirmDelete(CustomerId, t.id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 text-black px-4 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 4000 }
    );
  };

  const confirmDelete = async (CustomerId, toastId) => {
    try {
      await axios.post(
        "https://storeconvo.com/php/delete.php/",
        {
          id: CustomerId,
          typ: "customer",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setCustomer((preCustomer) =>
        preCustomer.filter((customer) => customer.cust_id !== CustomerId)
      );

      toast.success("Delete successful", { id: toastId });
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product", { id: toastId });
    }
  };



  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`w-full lg:max-w-screen-xl ${
          open ? "md:max-w-[32rem]" : "md:max-w-[40rem]"
        } max-w-[22rem] mx-auto`}
      >
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Order List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0 flex-col">
              <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                name={"work-order"}
              />
              <div className="flex items-center gap-5">
                <div
                  className="border rounded-md p-2 bg-[#D8E9E7] text-[#308E87] "
                  onClick={toggleFilter}
                >
                  <CiFilter className="text-2xl cursor-pointer hover:animate-shake" />
                </div>
                <CustomerInformationModal onSuccess={fetchCustomer} />
              </div>
            </div>
            <CustomerFilter
              isFilterVisible={isFilterVisible}
              employees={employees}
              filters={filters}
              setFilters={setFilters}
            />{" "}
            <CustomerTable
              fetchCustomer={fetchCustomer}
              handleChangeStatus={handleChangeStatus}
              customer={filteredCustomers}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
