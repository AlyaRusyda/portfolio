"use client";
import React from "react";

function page() {
  return (
    <div className="h-screen bg-product">
      <div className="md:min-h-screen md:h-screen py-80 text-center bg-black/80">
        <p className="text-white text-xl">Anda lapar?</p>
        <h1 className="text-white font-gloock text-6xl">
          jan<span className="text-orange-500">cook</span>
        </h1>
        <h4 className="text-white text-xl mb-4">Beli makan disini</h4>
        <a href="https://belimakandisini.vercel.app/" target="_blank" className='bg-sec text-md m:text-lg px-3 py-2'>See all product!</a>
      </div>
    </div>
  );
}

export default page;
