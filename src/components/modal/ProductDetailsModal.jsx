import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { AiFillEye } from "react-icons/ai";

function ProductDetailsModal({ product }) {
  const imageUrls = product.image_url ? product.image_url.split(",") : [];

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <AiFillEye className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1200px] max-h-[900px] overflow-scroll lg:mt-0 mt-40">
          <DialogHeader>
            <DialogTitle>Product Details</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="pt-6">
              <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {imageUrls[0] && (
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                      <img
                        src={`https://storeconvo.com/php/uploads/${imageUrls[0]}`}
                        alt="Featured Product"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  )}

                  {imageUrls.slice(1).map((url, index) => (
                    <div key={index} className="aspect-h-5 aspect-w-4 overflow-hidden rounded-lg">
                      <img
                        src={`https://storeconvo.com/php/uploads/${url}`}
                        alt={`Product Image ${index + 1}`}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {product.productname}
                  </h1>
                </div>

                <div className="mt-4 flex flex-col gap-10 lg:row-span-3 lg:mt-0">
                  <h2 className="">Payment Information</h2>
                  <hr />
                  {['Dealerprice', 'Purchaseprice', 'Retailprice', 'Specialprice', 'Wholesaleprice'].map((priceType, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span>{priceType}:</span>
                      <p className="text-3xl tracking-tight text-gray-900">₹{product[priceType.toLowerCase()]}</p>
                    </div>
                  ))}
                </div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  <div>
                    <h3 className="sr-only">Description</h3>
                    <p className="text-base text-gray-900">{product.productdescription}</p>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">Details</h3>
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
                        <li key={idx} className="text-gray-400">
                          <span className="text-gray-600">{`${detail.label}: ${detail.value}`}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductDetailsModal;
