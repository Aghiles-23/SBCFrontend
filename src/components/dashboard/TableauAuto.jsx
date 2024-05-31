/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { FaTrash, FaPen, FaArrowsAlt } from "react-icons/fa";
import Popup from "./Popup";
import axios from "axios";
// import { DeplacerOffre } from "./DeplacerOffre";

function TableauAuto({
  data,
  onRowClick,
  onDelete,
  onModify,
  onMove,
  vide,
  categorie,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedOffre, setSelectedOffre] = useState("");
  const [selectedCategorie, setSelectedCategorie] = useState(0);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showDeplacer, setShowDeplacer] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:1337/api/credit-automobiles/" + selectedId
      );
      console.log(response);

      if (response.status === 200) {
        onDelete();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="w-full mt-6 space-y-1">
        {data.length === 0 ? (
          <>
            <div
              className={`grid grid-cols-6 text-center bg-bleuF items-center p-2 rounded-lg`}
            >
              <p className="text-white text-sm font-bold">Titre</p>
              <p className="text-white text-sm font-bold">Source</p>
              <p className="text-white text-sm font-bold">Duree Credit</p>
              <p className="text-white text-sm font-bold">
                Montant Financement
              </p>
              <p className="text-white text-sm font-bold">Taux interet</p>
              <p className="text-white text-sm font-bold">Actions</p>
            </div>
            <p className="text-bleuF text-lg font-bold">
              {vide ? "Pas d'offre disponible" : ""}
            </p>
          </>
        ) : (
          <>
            <div
              className={`grid grid-cols-6 text-center bg-vert items-center p-2 rounded-lg`}
            >
              <p className="text-white text-sm font-bold">Titre</p>
              <p className="text-white text-sm font-bold">Source</p>
              <p className="text-white text-sm font-bold">Duree Credit</p>
              <p className="text-white text-sm font-bold">
                Montant Financement
              </p>
              <p className="text-white text-sm font-bold">Taux interet</p>
              <p className="text-white text-sm font-bold">Actions</p>
            </div>
            <div className="w-full space-y-1">
              {data.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`grid grid-cols-6 text-center justify-center bg-violet items-center p-2 rounded-lg cursor-pointer`}
                  onClick={() => onRowClick(item._id)}
                >
                  <p className="text-black text-sm font-semibold">
                    {item.attributes ? item.attributes.Titre : ""}
                  </p>
                  <p className="text-black text-sm font-semibold">
                    {item.attributes ? item.attributes.Source : ""}
                  </p>
                  <p className="text-black text-sm font-semibold">
                    {item.attributes ? item.attributes.DureeCredit : ""}
                  </p>
                  <p className="text-black text-sm font-semibold">
                    {item.attributes ? item.attributes.MontantFinancement : ""}
                  </p>
                  <p className="text-black text-sm font-semibold">
                    {item.attributes ? item.attributes.TauxInteret : ""}
                  </p>

                  <div className="flex justify-center items-center space-x-4">
                    <>
                      <FaPen
                        size={12}
                        color={"#465475"}
                        className="cursor-pointer"
                        onClick={(e) => {
                          setSelectedId(item.id);
                          console.log(item.id);
                          e.stopPropagation();
                          onModify(item.id);
                        }}
                      />
                      <FaTrash
                        size={12}
                        className="cursor-pointer"
                        color="#FF584D"
                        onClick={(e) => {
                          setSelectedId(item.id);
                          console.log(item.id);
                          e.stopPropagation();
                          setShowDeleteConfirmation(true);
                        }}
                      />
                    </>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {showDeleteConfirmation && (
        <Popup
          Titre={"Confirmation"}
          Texte={"Êtes-vous sûr de vouloir supprimer cette offre ?"}
          onConfirm={() => handleDelete()}
          onDismiss={() => setShowDeleteConfirmation(false)}
        />
      )}
      {/* {showDeplacer && (
				<DeplacerOffre
					id={selectedCategorie}
					offre={selectedOffre}
					onConfirm={(idCategorie) => {
						onMove(idCategorie, selectedId);
						setShowDeplacer(false);
					}}
					onDismiss={() => setShowDeplacer(false)}
				/>
			)} */}
    </div>
  );
}

export default TableauAuto;
