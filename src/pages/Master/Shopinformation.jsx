import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import ShopInformationModal from "@/components/modal/ShopInformationModal";
import { LayoutGridDemo } from "@/components/ImgGrid/LayoutGridDemo";

function Shopinformation() {
  const [shopInformation,setShopInformation] = useState(null)
  useEffect(() => {
    const fetchShopInformation = async () => {
      try {
        const response = await axios.get(
          "https://storeconvo.com/fetch.php?typ=shop"
        );
        console.log(response.data);
        setShopInformation(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchShopInformation();
  }, []);

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
              <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                    <div className="px-6">
                      <div className="flex flex-wrap justify-end">
                        <div className="w-full lg:w-4/12 p-4 lg:order-3 lg:text-right lg:self-center">
                          <ShopInformationModal />
                        </div>
                      </div>
                      <div className="text-center mt-12">
                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                          Doyt House - Boutique & Salon
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                          <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                          doythouse@gmail.com
                        </div>
                        <div className="mb-2 text-blueGray-600 mt-10">
                          <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
                          +91 9876543210
                        </div>
                        <div className="mb-2 text-blueGray-600">
                          <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                          Manager - Mangername
                        </div>
                        <div className="mb-2 text-blueGray-600">
                          <i className="fas fa-id-card mr-2 text-lg text-blueGray-400"></i>
                          GST Number: 29AAACZ1234A1Z5
                        </div>
                        <div className="mb-2 text-blueGray-600">
                          <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                          State: Kerala (KL)
                        </div>
                        <div className="mb-2 text-blueGray-600">
                          <i className="fas fa-building mr-2 text-lg text-blueGray-400"></i>
                          Bank: State Bank of India
                        </div>
                        <div className="mb-2 text-blueGray-600">
                          <i className="fas fa-branch mr-2 text-lg text-blueGray-400"></i>
                          Branch: Thiruvalla
                        </div>
                        <div className="mb-2 text-blueGray-600">
                          <i className="fas fa-credit-card mr-2 text-lg text-blueGray-400"></i>
                          Account Number: 123456789012
                        </div>
                        <div className="mb-2 text-blueGray-600">
                          <i className="fas fa-code mr-2 text-lg text-blueGray-400"></i>
                          IFSC Code: SBIN0001234
                        </div>
                      </div>
                      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                          <div className="w-full lg:w-9/12 px-4">
                            <h3 className="font-bold text-2xl">Caption</h3>
                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                              Discover a world where fashion and beauty
                              intertwine. At Doyt House, we offer a curated
                              selection of chic clothing and expert salon
                              services to enhance your personal style. Located
                              in the heart of Thiruvalla, we provide a luxurious
                              experience tailored to your unique needs. Elevate
                              your look and embrace elegance with us.
                            </p>
                          </div>
                          <div className="w-full lg:w-9/12 px-4">
                            <h3 className="font-bold text-2xl">Address Line</h3>
                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                              Opposite G- Mart, Muthoor, Thiruvalla -
                              Changanassery Rd, Thiruvalla, Kerala 689107
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div >
                  <div className="flex items-center justify-center mt-16">
                    <h1 className="text-2xl font-bold underline">Gallery</h1>
                  </div>
                  <div>
                    <LayoutGridDemo />
                  </div>
                </div>
                <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
                  <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                          Made with{" "}
                          <a
                            href="https://www.creative-tim.com/product/notus-js"
                            className="text-blueGray-500 hover:text-gray-800"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Notus JS
                          </a>{" "}
                          by{" "}
                          <a
                            href="https://www.creative-tim.com"
                            className="text-blueGray-500 hover:text-blueGray-800"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Creative Tim
                          </a>
                          .
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shopinformation;
