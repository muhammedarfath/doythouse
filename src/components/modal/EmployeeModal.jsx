import React, { useState } from "react";
import axios from "axios";
import { Button } from "../../components/ui/button";
import { FiPlus, FiEye, FiEyeOff } from "react-icons/fi";
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
import { toast } from "react-hot-toast";

function EmployeeModal({ setEmployees }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validateFields = () => {
    if (!name || !department || !mobile || !address || !username || !password) {
      toast.error("All fields are required");
      return false;
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateFields()) {
      return;
    }
    setLoading(true);

    try {
      const response = await axios.post(
        "https://storeconvo.com/php/add_employee.php",
        new URLSearchParams({
          employee_name: name,
          employee_phone: mobile,
          employee_department: department,
          employee_address: address,
          employee_username: username,
          employee_password: password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          }
        }
      );
      if (response.status === 200) {
        toast.success("Employee added successfully");
        setEmployees((prevEmployees) => [...prevEmployees, response.data]);
        setIsOpen(false);
        setName("");
        setDepartment("");
        setMobile("");
        setAddress("");
        setUsername("");
        setPassword("");
      } else {
        toast.error("Failed to save employee");
      }
    } catch (error) {
      console.error("Error saving employee:", error);
      toast.error("Failed to save employee");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="bg-[#308E87] hover:bg-[#308E87]"
            onClick={() => setIsOpen(true)}
          >
            <FiPlus className="text-white text-xl" />
            Add New Employee
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add Employee</DialogTitle>
              <DialogDescription>
                Fill in the details of the new employee
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Employee Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter employee name"
                  className="col-span-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="department" className="text-right">
                  Department
                </Label>
                <Input
                  id="department"
                  placeholder="Enter department"
                  className="col-span-3"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mobile" className="text-right">
                  Mobile No
                </Label>
                <Input
                  id="mobile"
                  placeholder="Enter 10-digit mobile number"
                  className="col-span-3"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="address" className="text-right">
                  Address
                </Label>
                <textarea
                  id="address"
                  placeholder="Enter address"
                  className="col-span-3 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-black"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="Enter username"
                  className="col-span-3"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4 relative">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="col-span-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {!showPassword ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="bg-[#308E87] text-white hover:bg-[#308E87]"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Employee"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EmployeeModal;
