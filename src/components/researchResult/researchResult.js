"use client";
import React from "react";
import "./researchResult.css";
import Filter from "../filters/filter";
const ResearchResult = () => {
  return (
    <>
      <div className="container-wrapper">
        <div className="researchResult">
          <h1>Ocasion Voitures</h1>
          <div className="researchResult-content">
            <Filter />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchResult;
