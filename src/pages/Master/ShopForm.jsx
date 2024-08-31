import { LayoutGridDemo } from "@/components/ImgGrid/LayoutGridDemo";
import Footer from "@/components/Layout/Footer";
import ShopInformationModal from "@/components/modal/ShopInformationModal";
import React from "react";
import LoadingSpinner from '../../components/Loading/LoadingSpinner'

function ShopForm({ shopInformation,setShopInformation }) {
  if (!shopInformation || shopInformation.length === 0) {
    return <LoadingSpinner />;
  }

  const shop = shopInformation[0];

  return (
    <section className="relative py-16 bg-blueGray-200">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-end">
              <div className="w-full lg:w-4/12 p-4 lg:order-3 lg:text-right lg:self-center">
                <ShopInformationModal shopInformation={shopInformation} setShopInformation={setShopInformation}/>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                {shop.shop_name} - Boutique & Salon
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                {shop.shop_email}
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
                {shop.shop_phone}
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                Manager - {shop.shop_manager}
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-id-card mr-2 text-lg text-blueGray-400"></i>
                GST Number: {shop.shop_gstno}
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                State: {shop.shop_state}
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-building mr-2 text-lg text-blueGray-400"></i>
                Bank: {shop.shop_bank}
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-branch mr-2 text-lg text-blueGray-400"></i>
                Branch: {shop.shop_branch}
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-credit-card mr-2 text-lg text-blueGray-400"></i>
                Account Number: {shop.shop_bankacno}
              </div>
              <div className="mb-2 text-blueGray-600">
                <i className="fas fa-code mr-2 text-lg text-blueGray-400"></i>
                IFSC Code: {shop.shop_bankifsc}
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <h3 className="font-bold text-2xl">Caption</h3>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    Discover a world where fashion and beauty intertwine. At{" "}
                    {shop.shop_name}, we offer a curated selection of chic clothing
                    and expert salon services to enhance your personal style.
                    Located in the heart of {shop.shop_branch}, we provide a luxurious
                    experience tailored to your unique needs. Elevate your look
                    and embrace elegance with us.
                  </p>
                </div>
                <div className="w-full lg:w-9/12 px-4">
                  <h3 className="font-bold text-2xl">Address Line</h3>
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    Opposite G- Mart, Muthoor, {shop.shop_branch} - Changanassery Rd,
                    Thiruvalla, {shop.shop_state} 689107
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center mt-16">
          <h1 className="text-2xl font-bold underline">Gallery</h1>
        </div>
        <div>
          <LayoutGridDemo />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default ShopForm;
