"use client";
import React from "react";
import bell from "../../../public/assets/icons/bell.svg";
import Image from "next/image";
import "./result-header.css";
import { Switch, Select } from "antd";

const ResultHeader = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="result-header">
        <div className="left">
          <label>180 659 announces</label>

          <span>
            <div className="icon">
              <Image
                src={bell}
                alt="Next.js Logo"
                width={16}
                height={16}
                priority
              />
            </div>
            Créer une alerte
          </span>
        </div>
        <div className="right">
          <div className="toggle-btn">
            <Switch onChange={onChange} />
            <label>Location (LOA)</label>
          </div>
          <div className="drop-down-wrapper">
            <span>Trier par :</span>
            <Select
              defaultValue="lucy"
              style={{
                width: 120,
              }}
              onChange={handleChange}
              options={[
                {
                  value: "Pertinence ",
                  label: "Pertinence ",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                  disabled: true,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultHeader;
