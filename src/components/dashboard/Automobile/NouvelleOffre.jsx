import React, { useState, useEffect } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import ButtonCarre from "../ButtonCarre";
import axios from "axios";
import Cookies from "js-cookie";

function NouvelleOffre({ categorie, onClose, onConfirm }) {
  const [selected, setSelected] = useState("");
  const [metiers, setMetiers] = useState([]);

  const [image, setImage] = useState(null);
  const [bankId, setBankId] = useState(null);

  const [data, setData] = useState({
    Titre: null,
    Source: "BNA",
    DureeCredit: null,
    MontantFinancement: null,
    TauxInteret: null,
    Type: "Particulier",
    DescriptionEtConditions: "",
  });

  // async function getMetiers() {
  // 	try {
  // 		const response = await axiosInstance.get("/offres/metiers");

  // 		console.log(response);

  // 		if (response.request.status === 200) {
  // 			setMetiers(response.data);
  // 		}
  // 	} catch (e) {
  // 		console.log(e);
  // 	}
  // }

  useEffect(() => {
    setBankId(JSON.parse(Cookies.get("user")).id);
    setImage(JSON.parse(Cookies.get("user")).image);
    console.log(JSON.parse(Cookies.get("user")));
  }, []);

  function handleInputChange(event, field) {
    const value = event.target.value;
    setData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  }

  // async function addOffre() {
  // 	const accessToken = localStorage.getItem("accessToken");
  // 	const response = await axiosInstance.post(
  // 		`/offres/employeur/add`,
  // 		formData,
  // 		{
  // 			headers: {
  // 				Authorization: `Bearer ${accessToken}`,
  // 			},
  // 		}
  // 	);

  // 	if (response.status === 201) {
  // 		console.log(response.data.data);
  // 	}
  // }

  async function addOffre() {
    const newData = {
      ...data,
      bank: bankId,
      SourceImage: image,
    };

    console.log(newData);

    let url = "http://localhost:1337/api/";

    switch (categorie) {
      case "Crédit automobile":
        url = url + "credit-automobiles";
        break;

      case "Crédit moto":
        url = url + "credit-motos";
        break;

      case "Crédit à la consommation":
        url = url + "credit-consommations";
        break;

      case "Crédit immobilier":
        url = url + "credit-immobiliers";
        break;

      default:
        break;
    }

    const response = await axios.post(
      url,
      { data: newData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 201) {
      console.log(response);
    }
  }

  async function handleClick() {
    await addOffre();
    await onConfirm();
    await onClose();
  }

  const uploadImage = async (imageFile) => {
    try {
      const formData = new FormData();
      formData.append("files", imageFile);
      console.log(imageFile);
      const res = await axios.post(
        "http://localhost:1337/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      if (res.data && res.data[0]) {
        return res.data[0]; // Adjust based on your API's response
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      throw error;
    }
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 block`}
      />
      <div className="fixed z-50 overlay flex flex-col items-center p-4 w-1/2 h-fit bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
        <div className="flex justify-between w-full mb-6">
          <h1 className="text-xl text-vert font-bold mb-6">Nouvelle Offre</h1>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-4 w-full">
          <div className="flex flex-col">
            <label className="text-vert text-xs font-bold">Titre</label>
            <input
              className="bg-violet border-gray-400 rounded-md p-1 focus:outline-none focus:border-blue-500"
              type="text"
              onChange={(e) => handleInputChange(e, "Titre")}
              value={data.Titre || ""}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-vert text-xs font-bold">Duree Credit</label>
            <input
              className="bg-violet border-gray-400 rounded-md p-1 focus:outline-none focus:border-blue-500"
              type="number"
              onChange={(e) => handleInputChange(e, "DureeCredit")}
              value={data.DureeCredit || ""}
            ></input>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mx-4 mb-10 w-full">
          <div className="flex flex-col">
            <label className="text-vert text-xs font-bold">
              Montant Financement
            </label>
            <input
              className="bg-violet border-gray-400 rounded-md p-1 focus:outline-none focus:border-blue-500"
              type="number"
              onChange={(e) => handleInputChange(e, "MontantFinancement")}
              value={data.MontantFinancement || ""}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-vert text-xs font-bold">Taux Interet</label>
            <input
              className="bg-violet border-gray-400 rounded-md p-1 focus:outline-none focus:border-blue-500"
              type="number"
              onChange={(e) => handleInputChange(e, "TauxInteret")}
              value={data.TauxInteret || ""}
            ></input>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-end space-x-2">
            <ButtonCarre
              couleur={"bleuF"}
              couleurTexte={"white"}
              contenu={"Annuler"}
              width={"fit text-xs"}
              height={"fit"}
              onClick={onClose}
            ></ButtonCarre>
            <ButtonCarre
              couleur={"vert"}
              couleurTexte={"white"}
              contenu={"Ajouter"}
              width={"fit text-xs"}
              height={"fit"}
              onClick={() => handleClick()}
            ></ButtonCarre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NouvelleOffre;
