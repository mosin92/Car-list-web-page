"use client";
import React, { useState } from "react";
import "./filter.css";
import { Collapse } from "antd";

const Filter = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

  const [checkboxes, setCheckboxes] = useState([
    { id: 1, name: "Renault", checked: false },
    { id: 2, name: "Peugeot", checked: false },
  ]);
  const handleCheckboxChange = (id) => {
    setCheckboxes((prevState) =>
      prevState.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };
  const items = [
    {
      key: "1",
      label: "Localisation ",
      children: (
        <>
          <div className="filter-box">
            <ul className="">
              <li>
                <label>
                  <input type="checkbox" name="" id="" />
                  label
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="" id="" />
                  label
                </label>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: "MODÈLES",
      children: <p>{text}</p>,
    },
    {
      key: "20",
      label: "MARQUES",
      children: (
        <>
          <div className="filter-box">
            <ul className="">
              {checkboxes.map((checkbox) => (
                <li key={checkbox.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={() => handleCheckboxChange(checkbox.id)}
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
    {
      key: "3",
      label: "LOCATION (LOA)",
      children: <p>{text}</p>,
    },
    {
      key: "4",
      label: "SERVICES",
      children: <p>{text}</p>,
    },
    {
      key: "5",
      label: "PRIX",
      children: <p>{text}</p>,
    },
    {
      key: "6",
      label: "ANNÉE / KM",
      children: <p>{text}</p>,
    },
    {
      key: "7",
      label: "ÉNERGIE / BOÎTE",
      children: <p>{text}</p>,
    },
    {
      key: "8",
      label: "CRIT'AIR",
      children: <p>{text}</p>,
    },
    {
      key: "9",
      label: "MOTORISATION",
      children: <p>{text}</p>,
    },
    {
      key: "10",
      label: "TRANSMISSION",
      children: <p>{text}</p>,
    },
    {
      key: "11",
      label: "CHASSIS",
      children: <p>{text}</p>,
    },
    {
      key: "12",
      label: "NOMBRE DE PORTE",
      children: <p>{text}</p>,
    },
    {
      key: "13",
      label: "NOMBRE DE PLACES",
      children: <p>{text}</p>,
    },
    {
      key: "14",
      label: "VOLUME DU COFFRE",
      children: <p>{text}</p>,
    },
    {
      key: "15",
      label: "DIMENSIONS",
      children: <p>{text}</p>,
    },
    {
      key: "16",
      label: "COULEURS",
      children: <p>{text}</p>,
    },
    {
      key: "17",
      label: "AUTRES CRITÈRES",
      children: <p>{text}</p>,
    },
    {
      key: "18",
      label: "Mots clés",
      children: <p>{text}</p>,
    },
  ];

  return (
    <>
      <div className="filters-pc">
        <Collapse accordion items={items} className="filter-accordian" />
      </div>
    </>
  );
};

export default Filter;
