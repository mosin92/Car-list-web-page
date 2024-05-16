"use client";
import React from "react";
import "./footer.css";
import Image from "next/image";
import facebook from "../../../public/assets/icons/facebook.svg";
import twitter from "../../../public/assets/icons/twitter.svg";
import pinterest from "../../../public/assets/icons/pinterest.svg";
import car from "../../../public/assets/icons/car.svg";
import feed from "../../../public/assets/icons/feed.svg";
import search from "../../../public/assets/icons/search.svg";
import { Select } from "antd";
const Footer = () => {
  const items = [
    {
      label: "Citroen",
      link: "#",
    },
    {
      label: "Citroen C1",
      link: "#",
    },
    {
      label: "Citroen C1 Citadine",
      link: "#",
    },
    {
      label: "Citroen Berline essence",
      link: "#",
    },
    {
      label: "Citroen C1 essence",
      link: "#",
    },
    {
      label: "Citroen C1 essence",
      link: "#",
    },
    {
      label: "Citroen C1 Vendée",
      link: "#",
    },
    {
      label: "Citroen C1 essence Ille-et-Vilaine",
      link: "#",
    },
    {
      label: "Citroen C1 essence Nord",
      link: "#",
    },
    {
      label: "Citroen C1 essence Hérault",
      link: "#",
    },
    {
      label: "Citroen C1 essence Isère",
      link: "#",
    },
    {
      label: "Citroen C1 Maine-et-Loire",
      link: "#",
    },
    {
      label: "Citroen C1 Charente-Maritime",
      link: "#",
    },
    {
      label: "Essence Gard",
      link: "#",
    },
    {
      label: "Challans",
      link: "#",
    },
    {
      label: "Citroen C1 Concarneau",
      link: "#",
    },
    {
      label: "Citroen C1 Crach",
      link: "#",
    },
    {
      label: "Citroen C1 Alès",
      link: "#",
    },
    {
      label: "Citroen Brest",
      link: "#",
    },
  ];
  //   const handleChange = (value) => {
  //     console.log(`selected ${value}`);
  //   };
  return (
    <>
      <footer>
        <div className="footer-wrapper container-wrapper">
          <h1>Votre véhicule se trouve peut-être ici !</h1>
          <p>Retrouvez nos sélections de véhicules d'occasion à vendre</p>

          <div className="car-links">
            {items.map((item, index) => (
              // Render an anchor tag for each item
              <a key={index} href={item.link}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-strip">
          <p>
            Pour les trajets courts, privilégiez la marche ou le vélo
            #SeDeplacerMoinsPolluer
          </p>
        </div>
        <div className="footer-search container-wrapper">
          <div className="footer-search-wrapper">
            <div className="drop-wrapper">
              <Image src={car} alt="car" width={24} priority />
            </div>
            <input type="text" />
            <button>
              <Image src={search} alt="car" width={24} priority />
              Rechercher
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-wrapper container-wrapper">
            <div className="links-wrapper">
              <h2>Ouestfrance-auto.com</h2>
              <div className="links">
                <div>
                  <a href="#">Contact - FAQ</a>
                  <span>|</span>
                  <a href="#">Plan du site</a>
                  <span>|</span>
                  <a href="#">CGU</a>
                </div>
                <div>
                  <a href="#">CGUProtection des données personnelles</a>-
                  <a href="#">Mentions légales</a>-
                  <a href="#">Politique des cookies</a>-
                  <a href="#">Modifier mes cookies</a>
                </div>
              </div>
            </div>
            <div className="social-wrapper">
              <a href="#">
                <Image src={facebook} alt="facebook" priority />
              </a>
              <a href="">
                <Image src={twitter} alt="facebook" priority />
              </a>

              <a href="">
                <Image src={pinterest} alt="facebook" priority />
              </a>

              <a href="">
                <Image src={feed} alt="facebook" priority />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
