import React, { useState } from "react";
import { FaTrash, FaPen, FaArrowsAlt } from "react-icons/fa";

function TableauCategories({ data, onRowClick, vide, onModify, onDelete }) {
  const categories = {
    Particulier: [
      "Cartes de crédit",
      "Crédit immobilier",
      "Crédit automobile",
      "Crédit moto",
      "Crédit à la consommation",
    ],
    Entreprise: [
      "Crédit d'exploitation",
      "Crédit Financement",
      "Promotion immobilière",
    ],
    Professionel: ["Crédit d'exploitation", "Crédit Financement"],
  };

  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div>
      <div className="w-full mt-6 space-y-1">
        <div className="w-full space-y-1">
          {Object.keys(categories).map((category, index) => (
            <div key={index}>
              <div
                className={`flex text-center justify-between items-center p-2 rounded-lg cursor-pointer hover:filter hover:brightness-90 transition-all duration-300 ${
                  expandedCategory === category ? "bg-vertF" : "bg-violet"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                <p className="text-black text-sm font-semibold text-left">
                  {category}
                </p>
              </div>
              {expandedCategory === category &&
                categories[category].map((subCategory, subIndex) => (
                  <div
                    key={subIndex}
                    className="flex text-center justify-between items-center my-1 ml-4 p-2 pl-6 rounded-lg cursor-pointer hover:filter hover:brightness-90 transition-all duration-300 border-2 border-black"
                    onClick={() => onRowClick(index, category, subCategory)}
                  >
                    <p className="text-black text-sm font-semibold text-left ">
                      {subCategory}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableauCategories;
