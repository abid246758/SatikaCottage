import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Image from "../../assets/Navbar/image.png";
import ContactUS from "../../components/ContactUsFrom/ContactUS";
function CatagoryItemList() {
  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-2 gap-4 justify-items-center items-center pt-4 p-3">
        <ItemPriceList />
        <ItemPriceList />
        <ItemPriceList />
        <ItemPriceList />
        <ItemPriceList />
        <ItemPriceList />
        <ItemPriceList />
        <ItemPriceList />
        <ItemPriceList />
        <ItemPriceList />
      </div>



<ContactUS/>



    </div>
  );
}

export default CatagoryItemList;

function ItemPriceList() {
  return (
    <div
      style={{
        width: "85%", 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "300px",
      
      }}
      className="m-0 p-0"
    >
      <div
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "70%",
          width: "100%", 
          borderRadius: "8px", 
        }}
      ></div>

      <p className="text-xs  mt-0">
        Lorem Ipsum Silk Saree Zuzu Zuzu Zuzu Design Done
      </p>
      <div className="flex justify-center items-center mt-2" style={{textSize:"10px"}}>
        <p className="text-red-600 text-sm font-bold mr-2">₹6,999.00</p>
        <p className="text-gray-500 text-xs line-through">₹8,999.00</p>
      </div>
    </div>
  );
}
