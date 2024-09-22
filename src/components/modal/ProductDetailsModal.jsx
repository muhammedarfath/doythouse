import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { AiFillEye } from "react-icons/ai";

function ProductDetailsModal({ product }) {
  const imageUrls = product.image_url ? product.image_url.split(",") : [];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <AiFillEye className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="max-w-full sm:max-w-[1200px] max-h-[90vh] overflow-scroll lg:mt-0 mt-20 p-4">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Product Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6">
          <div className="pt-6">
            <div className="mx-auto max-w-full sm:px-6 lg:max-w-7xl">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {imageUrls[0] && (
                  <div className="aspect-h-5 aspect-w-4 sm:overflow-hidden">
                    <img
                      src={`https://storeconvo.com/php/uploads/${imageUrls[0]}`}
                      alt="Featured Product"
                      className="h-52 lg:h-full w-full object-contain object-center"
                    />
                  </div>
                )}
                {imageUrls.slice(1).map((url, index) => (
                  <div key={index} className="aspect-h-5 aspect-w-4 overflow-hidden shadow-md">
                    <img
                      src={`https://storeconvo.com/php/uploads/${url}`}
                      alt={`Product Image ${index + 1}`}
                      className="h-52 lg:h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mx-auto max-w-full px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:gap-x-8">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">{product.productname}</h1>
              </div>

              <div className="mt-4 flex flex-col gap-6 lg:row-span-3 lg:mt-0">
                <h2 className="text-lg font-semibold">Payment Information</h2>
                <hr className="border-gray-300 mb-4" />
                {['Dealerprice', 'Purchaseprice', 'Retailprice', 'Specialprice', 'Wholesaleprice'].map((priceType, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="font-medium">{priceType}:</span>
                    <p className="text-xl font-bold text-gray-900">₹{product[priceType.toLowerCase()]}</p>
                  </div>
                ))}
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                <h3 className="text-lg font-semibold">Description</h3>
                <p className="text-base text-gray-900 mb-4">{product.productdescription}</p>

                <h3 className="text-lg font-semibold mt-6">Details</h3>
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {[
                    { label: 'Category', value: product.cat_name },
                    { label: 'Quantity', value: product.openqty },
                    { label: 'Packsize', value: product.packsize },
                    { label: 'Product User Code', value: product.productusercode },
                    { label: 'ReOrder Level', value: product.reorderlevel },
                    { label: 'Sales Unit', value: product.salesunit },
                    { label: 'SGST', value: product.sgst },
                    { label: 'CGST', value: product.cgst },
                    { label: 'HSN/ACS Code', value: product.hsn },
                    { label: 'Unit ID', value: product.unitid },
                  ].map((detail, idx) => (
                    <li key={idx} className="flex justify-between text-gray-600 text-lg border-b p-4">
                      <span className="font-medium">{detail.label}:</span>
                      <span className="text-gray-800">{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductDetailsModal;
