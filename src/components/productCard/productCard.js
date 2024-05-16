"use client";
import React from "react";
import "./productCard.css";
import Image from "next/image";
import car1 from "../../../public/assets/images/car.webp";
import location from "../../../public/assets/images//location.svg";
import like from "../../../public/assets/icons/heart-2.svg";
import cam from "../../../public/assets/icons/camera.svg";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="product-card ">
        <div className="left">
          <Image src={product?.image} alt="car1" priority />

          <div className="badge">à la une</div>
        </div>
        <div className="right">
          <h6>
            {product?.title} <span>{product?.subtitle}</span>
          </h6>
          <label htmlFor="">
            <Image src={location} alt="car1" priority />
            {product?.location}
          </label>
          <p className="discription">{product?.description}</p>
          <div className="pricing">
            <h5>{product?.price} &euro;</h5>
            <p>{product?.seller}</p>
          </div>
        </div>
        <Image src={like} alt="car1" priority className="like-btn" />
        <button>Voir le détail</button>
        <div className="cam-icon">
          <Image src={cam} alt="cam" priority />
          13
        </div>
      </div>
    </>
  );
};

export default ProductCard;
