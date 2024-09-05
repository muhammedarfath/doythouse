import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import axios from "axios";
import ShopForm from "./ShopForm";

function Shopinformation() {
  const [shopInformation, setShopInformation] = useState(null);

  useEffect(() => {
    fetchShopInformation();
  }, []);

  const fetchShopInformation = async () => {
    try {
      const response = await axios.get(
        "https://storeconvo.com/php/fetch.php?typ=shop"
      );
      console.log(response.data);
      setShopInformation(response.data);
    } catch (error) {
      console.error("Error fetching shop details:", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-6 mt-8">
            <h2 className="font-semibold text-xl text-black mt-7">
              Shop Information
            </h2>
            <div className="bg-white flex gap-5 flex-col rounded-2xl shadow-sm p-4 md:p-8 w-full">
              <section className="relative block h-[500px]">
                <div
                  className="absolute top-0 w-full h-full bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${logo})`,
                  }}
                >
                  <span
                    id="blackOverlay"
                    className="w-full h-full absolute opacity-50 bg-black"
                  ></span>
                </div>
                <div
                  className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
                  style={{ transform: "translateZ(0px)" }}
                >
                  <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                  >
                    <polygon
                      className="text-blueGray-200 fill-current"
                      points="2560 0 2560 100 0 100"
                    ></polygon>
                  </svg>
                </div>
              </section>
              <ShopForm shopInformation={shopInformation} onChange={fetchShopInformation}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopinformation;
