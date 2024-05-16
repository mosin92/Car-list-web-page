"use client";
import React from "react";
import "./footer.css";
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
  return (
    <>
      <footer>
        <div className="footer-top container-wrapper">
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
      </footer>
    </>
  );
};

export default Footer;
