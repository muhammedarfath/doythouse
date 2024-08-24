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
    <div className="lg:col-span-2 border-l-2 border-l-[#ECF3F3] pl-5">
      <div className="grid gap-4 gap-y-2 lg:w-[45rem] text-sm grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3 flex flex-col gap-4">
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
        <div className="md:col-span-2 flex flex-col gap-4">
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
