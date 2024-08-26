import React, { useEffect } from "react";

function ProductPrices({
  mrp,
  purchasePrice,
  retailPrice,
  wholesalePrice,
  specialPrice,
  dealerPrice,
  openQty,
  setMrp,
  setPurchasePrice,
  setRetailPrice,
  setWholesalePrice,
  setSpecialPrice,
  setDealerPrice,
  setOpenQty,
}) {
  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange({
        mrp,
        retailPrice,
        dealerPrice,
        openQty,
        purchasePrice,
        wholesalePrice,
        specialPrice,
      });
    }
  }, [mrp, retailPrice, dealerPrice, openQty, purchasePrice, wholesalePrice, specialPrice]);

  return (
    <div className="lg:col-span-2 border-l-2 border-l-[#ECF3F3] pl-5 w-full">
      <div className="grid gap-4 gap-y-4 text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        <div className="flex flex-col gap-4">
          <label htmlFor="mrp">MRP</label>
          <input
            type="text"
            name="mrp"
            id="mrp"
            value={mrp}
            onChange={(e) => setMrp(e.target.value)}
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            placeholder="MRP"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="retailPrice">Retail Price</label>
          <input
            type="text"
            name="retailPrice"
            id="retailPrice"
            value={retailPrice}
            onChange={(e) => setRetailPrice(e.target.value)}
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            placeholder="Retail Price"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="dealerPrice">Dealer Price</label>
          <input
            type="text"
            name="dealerPrice"
            id="dealerPrice"
            value={dealerPrice}
            onChange={(e) => setDealerPrice(e.target.value)}
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            placeholder="Dealer Price"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="openQty">Open Qty</label>
          <input
            type="text"
            name="openQty"
            id="openQty"
            value={openQty}
            onChange={(e) => setOpenQty(e.target.value)}
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            placeholder="Open Qty"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="purchasePrice">Purchase Price</label>
          <input
            type="text"
            name="purchasePrice"
            id="purchasePrice"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            placeholder="Purchase Price"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="wholesalePrice">Wholesale Price</label>
          <input
            type="text"
            name="wholesalePrice"
            id="wholesalePrice"
            value={wholesalePrice}
            onChange={(e) => setWholesalePrice(e.target.value)}
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            placeholder="Wholesale Price"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="specialPrice">Special Price</label>
          <input
            type="text"
            name="specialPrice"
            id="specialPrice"
            value={specialPrice}
            onChange={(e) => setSpecialPrice(e.target.value)}
            className="h-10 border mt-1 rounded px-4 w-full bg-[#fff]"
            placeholder="Special Price"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPrices;
