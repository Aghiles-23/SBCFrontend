import React, { useState, useEffect } from "react";
import { FaTimes, FaCheck } from "react-icons/fa";
import ButtonCarre from "./ButtonCarre";
import axios from "axios";

function NouvelleOffre({ onClose, onConfirm }) {
  const [selected, setSelected] = useState("");
  const [metiers, setMetiers] = useState([]);

  const [data, setData] = useState({
    Titre: null,
    Source: "BNA",
    PlafondPaiment: null,
    PlafondRetrait: null,
    Tarification: null,
    bank: "2",
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

  // useEffect(() => {
  // 	getMetiers();
  // }, []);

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
    const image = await uploadImage(selectedImage);
    const newData = {
      ...data,
      Image: image,
    };

    const response = await axios.post(
      `http://localhost:1337/api/carte-credits`,
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
    console.log(data);
    await onConfirm();
    await onClose();
  }

  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrlImage, setPreviewUrlImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    console.log(file);
    if (file) {
      setUploadedImage(false);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrlImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrlImage(null);
    }
  };

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
      <div className="fixed z-50 overlay flex flex-col items-center p-4 w-3/4 h-fit bg-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
        <div className="flex justify-between w-full mb-6">
          <h1 className="text-xl text-vert font-bold mb-6">Nouvelle Offre</h1>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-4 w-full">
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
            <label className="text-vert text-xs font-bold">
              Plafond Paiement
            </label>
            <input
              className="bg-violet border-gray-400 rounded-md p-1 focus:outline-none focus:border-blue-500"
              type="number"
              onChange={(e) => handleInputChange(e, "PlafondPaiment")}
              value={data.PlafondPaiment || ""}
            ></input>
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <label
              htmlFor="imageInput"
              className="rounded bg-violet text-bleuF text-sm h-fit font-bold px-2 py-1 cursor-pointer"
            >
              Importer
            </label>

            <input
              id="imageInput"
              className="hidden"
              type="file"
              onChange={handleImageChange}
            />

            <div>
              <img src={previewUrlImage} className={`w-16 h-16 border-bleuF`} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 mx-4 mb-10 w-full">
          <div className="flex flex-col">
            <label className="text-vert text-xs font-bold">
              Plafond Retrait
            </label>
            <input
              className="bg-violet border-gray-400 rounded-md p-1 focus:outline-none focus:border-blue-500"
              type="number"
              onChange={(e) => handleInputChange(e, "PlafondRetrait")}
              value={data.PlafondRetrait || ""}
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="text-vert text-xs font-bold">Tarification</label>
            <input
              className="bg-violet border-gray-400 rounded-md p-1 focus:outline-none focus:border-blue-500"
              type="number"
              onChange={(e) => handleInputChange(e, "Tarification")}
              value={data.Tarification || ""}
            ></input>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-end space-x-2">
            <ButtonCarre
              couleur={"bleuF"}
              couleurTexte={"violet"}
              contenu={"Annuler"}
              width={"fit text-xs"}
              height={"fit"}
              onClick={onClose}
            ></ButtonCarre>
            <ButtonCarre
              couleur={"vert"}
              couleurTexte={"violet"}
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
