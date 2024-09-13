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
import { AiFillDelete } from "react-icons/ai";
import UnitModal from "@/components/modal/UnitModal";
import axios from "axios";
import UnitEditModal from "@/components/modal/UnitEditModal";
import { toast } from "react-hot-toast";

function Units() {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    fetchUnits();
  }, []);

  const fetchUnits = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=unit"
      );
      setUnits(response.data);
    } catch (error) {
      console.error("Error fetching units:", error);
    }
  };


  const handleDelete = (unitId) => {
    toast(
      (t) => (
        <div>
          <p>Are you sure you want to delete this unit?</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => confirmDelete(unitId, t.id)}
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

  const confirmDelete = async (unitId, toastId) => {
    try {
      await axios.post(
        `https://storeconvo.com/php/delete.php`,
        new URLSearchParams({
          id: unitId,
          typ: "unit",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      setUnits((prevUnits) =>
        prevUnits.filter((unit) => unit.unitid !== unitId)
      );
      toast.success("Delete successful", { id: toastId });
    } catch (error) {
      toast.error("Error deleting unit");
      console.error("Error deleting unit:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Units List</h2>
          <div className="bg-white flex flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex justify-between mb-4">
              <UnitModal onChange={fetchUnits} />
            </div>
            <Table className="w-full">
              <TableCaption>A list of all units available.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">SiNo</TableHead>
                  <TableHead className="w-[150px]">Unit Name</TableHead>
                  <TableHead className="w-[100px]">Unit Code</TableHead>
                  <TableHead className="text-center w-[120px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {units.map((unit, index) => (
                  <TableRow key={unit.unitid}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="font-medium">{unit.unitname}</TableCell>
                    <TableCell>{unit.unitcode}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <UnitEditModal unit={unit} onSuccess={fetchUnits} />
                        <AiFillDelete
                          className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer"
                          onClick={() => handleDelete(unit.unitid)}
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

export default Units;
