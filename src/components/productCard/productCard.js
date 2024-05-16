"use client";
import React from "react";
import "./productCard.css";
import Image from "next/image";
import car1 from "../../../public/assets/images/car.webp";
import location from "../../../public/assets/images//location.svg";

const ProductCard = () => {
  return (
    <>
      <div className="product-card">
        <div className="left">
          <Image src={car1} alt="car1" priority />
        </div>
        <div className="right">
          <h6>
            Citroen C1 <span>VTI 72 S&S Live 3p E6.d</span>
          </h6>
          <label htmlFor="">
            <Image src={location} alt="car1" priority />
            Grasse (06) - Essence - 2021 manuelle
          </label>
          <p className="discription">
            C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places,
            Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture
            centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent,
            Citadine, date de mise en circulation (b)
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
