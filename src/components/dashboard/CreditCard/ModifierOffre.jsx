import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import ButtonCarre from "../ButtonCarre";
import axios from "axios";

function ModifierOffre({ id, onClose, onConfirm }) {
  const [formData, setFormData] = useState({
    Titre: null,
    PlafondPaiment: null,
    PlafondRetrait: null,
    Tarification: null,
  });

  // Fields present in the initial formData
  const initialFields = Object.keys(formData);

  function handleInputChange(event, field) {
    const value = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
    console.log(formData);
  }

  async function getOffre(id) {
    const response = await axios.get(
      `http://localhost:1337/api/carte-credits/` + id
    );

    if (response.status === 200) {
      const fetchedData = response.data.data.attributes;
      // Only keep the initial fields
      const filteredData = Object.keys(fetchedData)
        .filter((key) => initialFields.includes(key))
        .reduce((obj, key) => {
          obj[key] = fetchedData[key];
          return obj;
        }, {});
      setFormData(filteredData);
      console.log(response.data);
    }
  }

  async function updateOffre(id) {
    // Filter formData to only include initial fields
    const filteredFormData = Object.keys(formData)
      .filter((key) => initialFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = formData[key];
        return obj;
      }, {});

    console.log(filteredFormData);
    const response = await axios.put(
      `http://localhost:1337/api/carte-credits/` + id,
      { data: filteredFormData }
    );

    if (response.status === 200) {
      console.log(response);
    }
  }

  useEffect(() => {
    getOffre(id);
  }, [id]);

  async function handleClick() {
    await updateOffre(id);
    onConfirm();
    onClose();
  }

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 block`}
      />
      <div className="fixed z-50 overlay flex flex-col items-center p-4 w-1/2 h-fit bg-gray-200 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
        <div className="flex justify-between w-full mb-6">
          <h1 className="text-xl text-vert font-bold mb-6">
            Modifier une offre
          </h1>
          <FaTimes className="cursor-pointer text-vert" onClick={onClose} />
        </div>

        <div className="grid grid-cols-2 gap-8 mb-4 w-full">
          <div className="flex flex-col">
            <label className="text-vert text-xs font-bold">Titre</label>
            <input
              className="bg-violet border-gray-400 rounded-md p-1 focus:outline-none focus:border-blue-500"
              type="text"
              onChange={(e) => handleInputChange(e, "Titre")}
              value={formData.Titre || ""}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-vert text-xs font-bold">
              Plafond Paiement
            </label>
            <input
              className="bg-violet border-gray-400 rounded-md p-1 focus:outline-none focus:border-blue-500"
              type="number"
              onChange={(e) => handleInputChange(e, "PlafondPaiment")}
              value={formData.PlafondPaiment || ""}
            ></input>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mx-4 mb-10 w-full">
          <div className="flex flex-col">
            <label className="text-vert text-xs font-bold">
              Plafond Retrait
            </label>
            <input
              className="bg-violet border-gray-400 rounded-md p-1 focus:outline-none focus:border-blue-500"
              type="number"
              onChange={(e) => handleInputChange(e, "PlafondRetrait")}
              value={formData.PlafondRetrait || ""}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-vert text-xs font-bold">Tarification</label>
            <input
              className="bg-violet border-gray-400 rounded-md p-1 focus:outline-none focus:border-blue-500"
              type="number"
              onChange={(e) => handleInputChange(e, "Tarification")}
              value={formData.Tarification || ""}
            ></input>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-end">
            <ButtonCarre
              couleur={"vert"}
              couleurTexte={"violet"}
              contenu={"Modifier"}
              width={"fit"}
              height={"fit"}
              onClick={() => handleClick()}
            ></ButtonCarre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModifierOffre;
