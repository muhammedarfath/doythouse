import React from "react";
import { LuBadgeCheck } from "react-icons/lu";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { RiShoppingBag4Line } from "react-icons/ri";
import { TiUserOutline } from "react-icons/ti";
import { TbTruck } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { GiThermometerScale } from "react-icons/gi";
import { TbFileInvoice } from "react-icons/tb";
import { useSelector } from "react-redux";

function Items({ open }) {
  const { role } = useSelector((state) => state.auth);

  const masterSubItems = [
    {
      label: "Shop Information",
      path: "/shopinformation",
    },
    {
      label: "Expense List",
      path: "/expenselist",
    },
    {
      label: "Employee List",
      path: "/employelist",
    },
  ];

  const customerSubItems = [
    {
      label: "Work Orders",
      path: "/workorder",
    },
  ];

  const productSubItems = [
    { label: "Product List", path: "/product" },
    { label: "Add Product", path: "/addproduct" },
    { label: "Category", path: "/category" },
    { label: "SubCategory", path: "/subcategory" },
  ];

  const ReportSubItems = [
    {
      label: "Stock Report",
      path: "/stockreport",
    }
  ];

  const InvoiceItems = [
    {
      label: "Pre-Invoice",
      path: "/invoice",
    },
  ];

  if (role !== "employee") {
    InvoiceItems.push({
      label: "Closed-Invoice",
      path: "/finalinvoice",
    });

    ReportSubItems.push(
      {
        label: "Sales List",
        path: "/salesreport",
      },
      {
        label: "Tax Report",
        path: "/taxreport",
      }
    );
  }

  return (
    <ul
      className={`pt-6 ${
        open ? "pl-4" : "pl-1"
      } transition-all duration-300 flex h-full gap-4 flex-col`}
    >
      <Link to="/">
        <MenuItem icon={BiHomeSmile} label="Dashboard" open={open} />
      </Link>
      <MenuItem
        icon={LuBadgeCheck}
        label="Master"
        open={open}
        subItems={masterSubItems}
      />
      <MenuItem
        icon={RiShoppingBag4Line}
        label="Product"
        open={open}
        subItems={productSubItems}
      />
      <Link to="/units">
        <MenuItem icon={GiThermometerScale} label="Units" open={open} />
      </Link>
      <MenuItem
        icon={TiUserOutline}
        label="Orders"
        open={open}
        subItems={customerSubItems}
      />
      <Link to="/supplier">
        <MenuItem icon={TbTruck} label="Supplier" open={open} />
      </Link>

      <MenuItem
        icon={TbFileInvoice}
        label="Invoice"
        open={open}
        subItems={InvoiceItems}
      />
      <MenuItem
        icon={TbReportAnalytics}
        label="Sales Report"
        open={open}
        subItems={ReportSubItems}
      />
    </ul>
  );
}

export default Items;
