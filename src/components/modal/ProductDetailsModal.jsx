import React from "react";
import { Button } from "../../components/ui/button";
import { FiPlus } from "react-icons/fi";
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
import { AiFillEye } from "react-icons/ai";
import { LayoutGridDemo } from "../ImgGrid/LayoutGridDemo";

function ProductDetailsModal({ product }) {
  console.log(product);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <AiFillEye className="text-[#495057] text-xl transition-transform transform hover:scale-110 cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1200px] max-h-[900px] overflow-scroll lg:mt-0 mt-40">
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div class="pt-6">
              <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
                    alt="Two each of gray, white, and black shirts laying flat."
                    class="h-full w-full object-cover object-center"
                  />
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                  <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
                      alt="Model wearing plain black basic tee."
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
                      alt="Model wearing plain gray basic tee."
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
                    alt="Model wearing plain white basic tee."
                    class="h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    {product.productname}
                  </h1>
                </div>

                <div class="mt-4 flex flex-col gap-10 lg:row-span-3 lg:mt-0">
                  <h2 class="">Payment Information</h2>
                  <hr />
                  <div className="flex gap-3">
                    <span>Dealerprice:</span>
                    <p class="text-3xl tracking-tight text-gray-900">
                    ₹{product.dealerprice}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span>Purchaseprice:</span>
                    <p class="text-3xl tracking-tight text-gray-900">
                    ₹{product.purchaseprice}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span>Retailprice:</span>
                    <p class="text-3xl tracking-tight text-gray-900">
                    ₹{product.retailprice}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span>Specialprice:</span>
                    <p class="text-3xl tracking-tight text-gray-900">
                    ₹{product.specialprice}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span>Wholesaleprice:</span>
                    <p class="text-3xl tracking-tight text-gray-900">
                    ₹{product.wholesaleprice}
                    </p>
                  </div>
                </div>

                <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  <div>
                    <h3 class="sr-only">Description</h3>

                    <div class="space-y-6">
                      <p class="text-base text-gray-900">
                        {product.productdescription}
                      </p>
                    </div>
                  </div>

                  <div class="mt-10">
                    <h3 class="text-sm font-medium text-gray-900">Details</h3>

                    <div class="mt-4">
                      <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            category : {product.cateoryid}
                          </span>
                        </li>
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            Quantity : {product.openqty}
                          </span>
                        </li>
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            Packsize : {product.packsize}
                          </span>
                        </li>
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            Product User Code : {product.productusercode}
                          </span>
                        </li>
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            ReOrder Level : {product.reorderlevel}
                          </span>
                        </li>
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            Sales Unit: {product.salesunit}
                          </span>
                        </li>
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            SGST: {product.sgst}
                          </span>
                        </li>
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            CGST: {product.cgst}
                          </span>
                        </li>
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            HSN/ACS Code: {product.hsn}
                          </span>
                        </li>
                        <li class="text-gray-400">
                          <span class="text-gray-600">
                            Unit ID: {product.unitid}
                          </span>
                        </li>
                      </ul>
                    </div>
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
