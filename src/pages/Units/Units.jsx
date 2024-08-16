import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table"; 
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Button } from "../../components/ui/button"; 
import { useState } from "react";
import UnitModal from "@/components/modal/UnitModal";

const units = [
  {
    id: 1,
    unitName: "Kilogram",
    unitCode: "KG",
  },
  {
    id: 2,
    unitName: "Gram",
    unitCode: "G",
  },
  {
    id: 3,
    unitName: "Liter",
    unitCode: "L",
  },
  {
    id: 4,
    unitName: "Milliliter",
    unitCode: "ML",
  },
];

function Units() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddNewUnit = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-6 mt-8">
          <h2 className="font-semibold text-xl text-black">Units List</h2>
          <div className="bg-white flex flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
            <div className="flex justify-between mb-4">
             <UnitModal/>
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
                  <TableRow key={unit.id}>
                    <TableCell>{index + 1}</TableCell> {/* SiNo */}
                    <TableCell className="font-medium">{unit.unitName}</TableCell>
                    <TableCell>{unit.unitCode}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-4">
                        <AiFillEdit className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer" />
                        <AiFillDelete className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      {isModalOpen && <UnitModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}

export default Units;
