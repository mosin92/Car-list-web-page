"use client";
import React from "react";
import "./researchResult.css";
import Filter from "../filters/filter";
import ResultHeader from "../resultHead/resultHeader";
import ProductCard from "../productCard/productCard";
import car1 from "../../../public/assets/images/car.webp";
import car2 from "../../../public/assets/images/car2.webp";
import Pagination from "../pagination/pagination";

const ResearchResult = () => {
  return (
    <>
      <div className="container-wrapper">
        <div className="researchResult">
          <h1>Ocasion Voitures</h1>
          <div className="researchResult-content">
            <Filter />
            <div className="results">
              <ResultHeader />
              <div className="products-wrapper">
                {dummyProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
                <Pagination />
              </div>
              <label className="credit-label">
                Un crédit vous engage et doit être remboursé. Vérifiez vos
                capacités de remboursement avant de vous engager.
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const dummyProducts = [
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car1,
  },
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car2,
  },
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car1,
  },
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car1,
  },
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car1,
  },
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car1,
  },
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car1,
  },
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car1,
  },
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car1,
  },
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car1,
  },
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car1,
  },
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car1,
  },
  {
    title: "Citroen C1",
    subtitle: "VTI 72 S&S Live 3p E6.d",
    location: "Grasse (06) - Essence - 2021 manuelle",
    description:
      "C1, Vti 72 s&s feel, Citadine, 06/2021, 72ch, 4cv, 4 places, Climatisation manuelle, Abs, Esp, Direction assistée, Fermeture centralisée, Bluetooth, 9450 € Citroen C1 VTi 72 S&S Feel, Argent, Citadine, date de mise en circulation (b)",
    price: 8980,
    seller: "Legrand Auto - Citroen Coutances",
    image: car1,
  },
];
export default ResearchResult;
