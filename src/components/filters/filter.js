"use client";
import React, { useState } from "react";
import "./filter.css";
import { Collapse } from "antd";
import pen from "../../../public/assets/icons/pen.svg";
import bin from "../../../public/assets/icons/bin.svg";
import Image from "next/image";
const Filter = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const [checkBoxMarques, setCheckMarques] = useState([
    { id: 1, name: "Renault", checked: false },
    { id: 2, name: "Peugeot", checked: false },
    { id: 3, name: "Citroen", checked: false },
    { id: 4, name: "Volkswagen", checked: false },
    { id: 5, name: "Abarth", checked: false },
    { id: 6, name: "AC", checked: false },
    { id: 7, name: "Always", checked: false },
  ]);

  const [checkBoxLocation, setCheckLocation] = useState([
    { id: 1, name: "- de 150 € / mois", checked: false },
    { id: 2, name: "- de 200 € / mois", checked: false },
    { id: 3, name: "- de 300 € / mois", checked: false },
    { id: 4, name: "- de 400 € / mois", checked: false },
    { id: 5, name: "+ de 400 €", checked: false },
  ]);

  const [checkBoxService, setCheckService] = useState([
    { id: 1, name: "Location", checked: false },
    { id: 2, name: "Sans location", checked: false },
    { id: 3, name: "Livraison", checked: false },
  ]);

  const [checkBoxÉnergie, setCheckÉnergie] = useState([
    { id: 1, name: "Diesel", checked: false },
    { id: 2, name: "Essence", checked: false },
    { id: 3, name: "Électrique", checked: false },
    { id: 3, name: "GPL", checked: false },
    { id: 3, name: "Hybride", checked: false },
    { id: 3, name: "Hybride rechargeable", checked: false },
    { id: 3, name: "Bioéthanol", checked: false },
    { id: 3, name: "GNV", checked: false },
  ]);

  const handleMarqueBox = (id) => {
    setCheckMarques((prevState) =>
      prevState.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const handleLocationBox = (id) => {
    setCheckLocation((prevState) =>
      prevState.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const handleServiceBox = (id) => {
    setCheckService((prevState) =>
      prevState.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const handleÉnergieBox = (id) => {
    setCheckÉnergie((prevState) =>
      prevState.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const items = [
    // localisation
    {
      key: "1",
      label: "Localisation ",
      children: (
        <>
          <div className="filter-box">
            <ul className="">
              {checkBoxMarques.map((checkbox) => (
                <li key={checkbox.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleMarqueBox(checkbox.id)}
                    />

                    {checkbox.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </>
      ),
    },

    // Modeles
    {
      key: "2",
      label: "MODÈLES",
      children: (
        <>
          <div className="filter-box">
            <ul className="">
              {checkBoxMarques.map((checkbox) => (
                <li key={checkbox.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleMarqueBox(checkbox.id)}
                    />

                    {checkbox.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </>
      ),
    },

    // Marques
    {
      key: "19",
      label: "MARQUES",
      children: (
        <>
          <div className="filter-box">
            <ul className="">
              {checkBoxMarques.map((checkbox) => (
                <li key={checkbox.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleMarqueBox(checkbox.id)}
                    />

                    {checkbox.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </>
      ),
    },

    // LOCATION
    {
      key: "3",
      label: "LOCATION (LOA)",
      children: (
        <>
          <div className="filter-box no-separtor">
            <ul className="">
              {checkBoxLocation.map((checkbox) => (
                <li key={checkbox.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleLocationBox(checkbox.id)}
                    />

                    {checkbox.name}
                  </label>
                </li>
              ))}
              <li className="v-center icon-mode-edit">
                <Image
                  src={pen}
                  alt="Next.js Logo"
                  width={18}
                  height={18}
                  priority
                />
                Indiquer une mensualité
              </li>
            </ul>
          </div>
        </>
      ),
    },

    // SERVICES
    {
      key: "4",
      label: "SERVICES",
      children: (
        <>
          <div className="filter-box no-separtor">
            <ul className="">
              {checkBoxService.map((checkbox) => (
                <li key={checkbox.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleServiceBox(checkbox.id)}
                    />

                    {checkbox.name}
                  </label>
                </li>
              ))}
              <li className="v-center icon-mode-edit">
                <Image
                  src={pen}
                  alt="Next.js Logo"
                  width={18}
                  height={18}
                  priority
                />
                Indiquer une mensualité
              </li>
            </ul>
          </div>
        </>
      ),
    },

    // PRIX
    {
      key: "5",
      label: "PRIX",
      children: <p>{text}</p>,
    },

    // Annee
    {
      key: "6",
      label: "ANNÉE / KM",
      children: (
        <>
          <div className="filter-box no-separtor">
            <ul className="">
              <li>
                <b>Énergie</b>
              </li>
              {checkBoxLocation.map((checkbox) => (
                <li key={checkbox.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleMarqueBox(checkbox.id)}
                    />

                    {checkbox.name}
                  </label>
                </li>
              ))}
              <li className="v-center icon-mode-edit">
                <Image
                  src={pen}
                  alt="Next.js Logo"
                  width={18}
                  height={18}
                  priority
                />
                Indiquer une mensualité
              </li>
            </ul>
          </div>
        </>
      ),
    },

    // energies
    {
      key: "7",
      label: "ÉNERGIE / BOÎTE",
      children: (
        <>
          <div className="filter-box no-separtor energi">
            <ul className="">
              <li>
                <b>Énergie</b>
              </li>
              {checkBoxÉnergie.map((checkbox) => (
                <li key={checkbox.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleÉnergieBox(checkbox.id)}
                    />

                    {checkbox.name}
                  </label>
                </li>
              ))}
            </ul>
            <div className="divider"></div>
            <ul className="">
              <li style={{ marginTop: "5px" }}>
                <b>Boîte de vitesse</b>
              </li>
              <li>
                <label>
                  <input type="checkbox" />
                  Manuelle
                </label>
              </li>{" "}
              <li>
                <label>
                  <input type="checkbox" />
                  Automatique
                </label>
              </li>
            </ul>
          </div>
        </>
      ),
    },

    {
      key: "8",
      label: "CRIT'AIR",
      children: (
        <>
          <div className="filter-box no-separtor energi">
            <ul className="">
              <li>
                <label>
                  <input type="checkbox" />
                  Manuelle
                </label>
              </li>{" "}
              <li>
                <label>
                  <input type="checkbox" />
                  Automatique
                </label>
              </li>
            </ul>
          </div>
        </>
      ),
    },

    {
      key: "9",
      label: "MOTORISATION",
      children: (
        <>
          <div className="filter-box no-separtor energi">
            <ul className="">
              <li>
                <label>
                  <input type="checkbox" />
                  Manuelle
                </label>
              </li>{" "}
              <li>
                <label>
                  <input type="checkbox" />
                  Automatique
                </label>
              </li>
            </ul>
          </div>
        </>
      ),
    },

    {
      key: "10",
      label: "TRANSMISSION",
      children: (
        <>
          <div className="filter-box no-separtor energi">
            <ul className="">
              <li>
                <label>
                  <input type="checkbox" />
                  Manuelle
                </label>
              </li>{" "}
              <li>
                <label>
                  <input type="checkbox" />
                  Automatique
                </label>
              </li>
            </ul>
          </div>
        </>
      ),
    },

    {
      key: "11",
      label: "CHASSIS",
      children: (
        <>
          <div className="filter-box no-separtor energi">
            <ul className="">
              <li>
                <label>
                  <input type="checkbox" />
                  Manuelle
                </label>
              </li>{" "}
              <li>
                <label>
                  <input type="checkbox" />
                  Automatique
                </label>
              </li>
            </ul>
          </div>
        </>
      ),
    },

    {
      key: "12",
      label: "NOMBRE DE PORTE",
      children: (
        <>
          <div className="filter-box no-separtor energi">
            <ul className="">
              <li>
                <label>
                  <input type="checkbox" />
                  Manuelle
                </label>
              </li>{" "}
              <li>
                <label>
                  <input type="checkbox" />
                  Automatique
                </label>
              </li>
            </ul>
          </div>
        </>
      ),
    },

    {
      key: "13",
      label: "NOMBRE DE PLACES",
      children: (
        <>
          <div className="filter-box no-separtor energi">
            <ul className="">
              <li>
                <label>
                  <input type="checkbox" />
                  Manuelle
                </label>
              </li>{" "}
              <li>
                <label>
                  <input type="checkbox" />
                  Automatique
                </label>
              </li>
            </ul>
          </div>
        </>
      ),
    },

    {
      key: "14",
      label: "VOLUME DU COFFRE",
      children: (
        <>
          <div className="filter-box no-separtor energi">
            <ul className="">
              <li>
                <label>
                  <input type="checkbox" />
                  Manuelle
                </label>
              </li>{" "}
              <li>
                <label>
                  <input type="checkbox" />
                  Automatique
                </label>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      key: "15",
      label: "DIMENSIONS",
      children: (
        <>
          <div className="filter-box no-separtor energi">
            <ul className="">
              <li>
                <label>
                  <input type="checkbox" />
                  Manuelle
                </label>
              </li>{" "}
              <li>
                <label>
                  <input type="checkbox" />
                  Automatique
                </label>
              </li>
            </ul>
          </div>
        </>
      ),
    },

    {
      key: "16",
      label: "COULEURS",
      children: (
        <>
          <div className="filter-box no-separtor energi">
            <ul className="">
              <li>
                <label>
                  <input type="checkbox" />
                  Manuelle
                </label>
              </li>{" "}
              <li>
                <label>
                  <input type="checkbox" />
                  Automatique
                </label>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      key: "17",
      label: "AUTRES CRITÈRES",
      children: (
        <>
          <div className="filter-box no-separtor energi">
            <ul className="">
              <li>
                <label>
                  <input type="checkbox" />
                  Manuelle
                </label>
              </li>{" "}
              <li>
                <label>
                  <input type="checkbox" />
                  Automatique
                </label>
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="filters-pc">
        <Collapse accordion items={items} className="filter-accordian" />

        <ul className="mots">
          <li className="">
            <label htmlFor="">Mots clés</label>
            <input type="text" placeholder="Saisissez un mot clé" />
          </li>
        </ul>
        <div className="filters-footer">
          <button>
            <Image
              src={bin}
              alt="Next.js Logo"
              width={22}
              height={22}
              priority
            />
          </button>
          <p>Valider (1)</p>
        </div>
      </div>
    </>
  );
};

export default Filter;
