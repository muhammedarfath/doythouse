import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import SupplierModal from "@/components/modal/SupplierModal";
import { BiSolidTrashAlt } from "react-icons/bi";
import EditSupplierModal from "@/components/modal/EditSupplierModal";
import axios from "axios";
import { toast } from "react-hot-toast";

function SupplierList() {
  const [suppliers, setSupplier] = useState([]);

  useEffect(() => {
    fetchSuppliers();
  }, []);


  const fetchSuppliers = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=supplier"
      );
      setSupplier(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleDelete = (supplierId) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this supplier?</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => confirmDelete(supplierId, t.id)}
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

  const confirmDelete = async (supplierId, toastId) => {
    try {
      await axios.post(
        `https://storeconvo.com/php/delete.php/`,
        {
          id: supplierId,
          typ: "supplier",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setSupplier((prevSupplier) =>
      prevSupplier.filter((supplier) => supplier.supplier_id !== supplierId)
      );
      toast.success("Delete successful", { id: toastId });
    } catch (error) {
      console.error("Error deleting supplier:", error);
    }
  };


  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full lg:max-w-screen-xl md:max-w-[35rem] max-w-[22rem] mx-auto ">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Supplier List</h2>
          <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex items-center justify-between mb-4 lg:flex-row gap-4 lg:gap-0  flex-col">
              <div className="flex gap-2">
                <span className="">Search</span>
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 border rounded px-4 w-64 bg-[#fff] border-gray-300 text-gray-900 text-sm focus:ring-black focus:border-black block pl-5 pr-3 py-4"
                />
              </div>
              <SupplierModal setSupplier={setSupplier}/>
            </div>

            <Table className="w-full">
              <TableCaption>List of Suppliers</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">S.No</TableHead>
                  <TableHead>Supplier Name</TableHead>
                  <TableHead>Contact Person</TableHead>
                  <TableHead>Mobile No</TableHead>
                  <TableHead className="text-right">Balance Amount</TableHead>
                  <TableHead className="text-center w-[120px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {suppliers.map((supplier, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="font-medium">
                      {supplier.supplier_name}
                    </TableCell>
                    <TableCell>{supplier.supplier_contactperson}</TableCell>
                    <TableCell>{supplier.supplier_mobile1}</TableCell>
                    <TableCell className="text-right">
                      {supplier.supplier_balancedmoney}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <EditSupplierModal supplier={supplier} onSuccess={fetchSuppliers} />
                        <BiSolidTrashAlt
                          className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
                          onClick={() => handleDelete(supplier.supplier_id)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplierList;
