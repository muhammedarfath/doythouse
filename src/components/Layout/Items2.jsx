import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../assets/Dashboard SEO.png";
import ShopInformation from "../../assets/Shop search result.png";
import Products from "../../assets/Product search results.png";
import Employee from "../../assets/Employe team.png";

export default function Items2() {
  const navigate = useNavigate();

  const list = [
    {
      title: "Dashboard",
      img: Dashboard,
      path: "/",
    },
    {
      title: "ShopInformation",
      img: ShopInformation,
      path: "/shopinformation",
    },
    {
      title: "Products",
      img: Products,
      path: "/product",
    },
    {
      title: "Employees",
      img: Employee,
      path: "/employelist",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-7 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => {
            if (item.path) {
              navigate(item.path);
            } else {
              console.log("item pressed");
            }
          }}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-contain h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
