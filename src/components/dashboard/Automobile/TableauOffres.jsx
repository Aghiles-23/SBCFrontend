/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { FaTrash, FaPen, FaArrowsAlt, FaPlus } from "react-icons/fa";
import Popup from "../Popup";
import ModifierOffre from "./ModifierOffre";
import ButtonCarre from "../ButtonCarre";
import NouvelleOffre from "./NouvelleOffre";
import axios from "axios";
// import { DeplacerOffre } from "./DeplacerOffre";

function TableauOffres({
  data,
  onRowClick,
  onDelete,
  onModify,
  onAdd,
  vide,
  categorie,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedOffre, setSelectedOffre] = useState("");
  const [selectedCategorie, setSelectedCategorie] = useState(0);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showModify, setShowModify] = useState(false);
  const [showNouvelleOffre, setShowNouvelleOffre] = useState(false);

  const handleDelete = async () => {
    try {
      console.log(selectedId);
      const response = await axios.delete(
        "http://localhost:1337/api/carte-credits/" + selectedId
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
        <div className="flex space-x-4">
          <ButtonCarre
            couleur="vert"
            couleurTexte={"violet"}
            contenu={<FaPlus />}
            width={"fit text-sm"}
            height={"fit"}
            onClick={() => setShowNouvelleOffre(true)}
          ></ButtonCarre>
        </div>
        {data.length === 0 ? (
          <>
            <div
              className={`grid grid-cols-6 text-center bg-bleuF items-center p-2 rounded-lg`}
            >
              <p className="text-white text-sm font-bold">Titre</p>
              <p className="text-white text-sm font-bold">Source</p>
              <p className="text-white text-sm font-bold">Plafond Paiement</p>
              <p className="text-white text-sm font-bold">Plafond Retrait</p>
              <p className="text-white text-sm font-bold">Tarification</p>
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
              <p className="text-white text-sm font-bold">Plafond Paiement</p>
              <p className="text-white text-sm font-bold">Plafond Retrait</p>
              <p className="text-white text-sm font-bold">Tarification</p>
              <p className="text-white text-sm font-bold">Actions</p>
            </div>
            <div className="w-full space-y-1">
              {data.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`grid grid-cols-6 text-center justify-center bg-violet items-center p-2 rounded-lg cursor-pointer`}
                  // onClick={() =>  }
                >
                  <p className="text-black text-sm font-semibold">
                    {item.attributes ? item.attributes.Titre : ""}
                  </p>
                  <p className="text-black text-sm font-semibold">
                    {item.attributes ? item.attributes.Source : ""}
                  </p>
                  <p className="text-black text-sm font-semibold">
                    {item.attributes ? item.attributes.PlafondPaiment : ""}
                  </p>
                  <p className="text-black text-sm font-semibold">
                    {item.attributes ? item.attributes.PlafondRetrait : ""}
                  </p>
                  <p className="text-black text-sm font-semibold">
                    {item.attributes ? item.attributes.Tarification : ""}
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
                          setShowModify(true);
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
      {showModify && (
        <ModifierOffre
          id={selectedId}
          onConfirm={() => onModify()}
          onClose={() => setShowModify(false)}
        />
      )}
      {showNouvelleOffre && (
        <NouvelleOffre
          onClose={() => setShowNouvelleOffre(false)}
          onConfirm={() => onAdd()}
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

export default TableauOffres;
