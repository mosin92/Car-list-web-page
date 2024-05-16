"use client";
import React from "react";
import "./researchResult.css";
import Filter from "../filters/filter";
import ResultHeader from "../resultHead/resultHeader";
import ProductCard from "../productCard/productCard";
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
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchResult;
