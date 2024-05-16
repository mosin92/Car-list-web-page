import React, { useState } from "react";
import "./pagination.css";

const Pagination = () => {
  const [selected, setSelected] = useState(1);

  const handleButtonClick = (pageNumber) => {
    setSelected(pageNumber);
  };

  return (
    <div className="pagination">
      {[...Array(10)].map((_, index) => (
        <button
          key={index + 1}
          className={`pagination-btn ${
            selected === index + 1 ? "active-paginate" : ""
          }`}
          onClick={() => handleButtonClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
