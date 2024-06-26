import React, { useState, useEffect } from "react";
import ButtonCarre from "../../components/dashboard/ButtonCarre";
import TableauOffres from "../../components/dashboard/CreditCard/TableauOffres";
import TableauAuto from "../../components/dashboard/Automobile/TableauAuto";
import TableauCategories from "../../components/dashboard/TableauCategories";
import NouvelleOffre from "../../components/dashboard/CreditCard/NouvelleOffre";
import ModifierOffre from "../../components/dashboard/CreditCard/ModifierOffre";
import H1 from "../../components/header/H1";
import { CircularProgress } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";

function Dashboard() {
  const [showModify, setShowModify] = useState(false);

  const id = JSON.parse(Cookies.get("user")).id;
  console.log(id);
  let [selected, setSelected] = useState(0);
  let [selectedCategorie, setSelectedCategorie] = useState("All");
  let [selectedSubCategorie, setSelectedSubCategorie] = useState("All");
  console.log(selected);

  // Offres variables
  let [offresCreditImmobilier, setOffresImmobilier] = useState([]);
  let [offresCreditCard, setOffresCreditCard] = useState([]);
  let [offresAuto, setOffresAuto] = useState([]);
  let [OffresConsommation, setOffresConsommation] = useState([]);
  let [OffresMoto, setOffresMoto] = useState([]);

  let [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState(false);
  let [vide, setVide] = useState(false);
  let [idOffre, setIdOffre] = useState(null);

  async function getOffres() {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:1337/api/banks/${id}?populate=*`
      );

      console.log(response);

      if (response.status === 200) {
        console.log(response.data.data.attributes);
        setOffresCreditCard(response.data.data.attributes.carte_credits.data);
        setOffresAuto(response.data.data.attributes.credit_automobiles.data);
        setOffresConsommation(
          response.data.data.attributes.credit_consommations.data
        );
        setOffresImmobilier(
          response.data.data.attributes.credit_immobiliers.data
        );
        setOffresMoto(response.data.data.attributes.credit_motos.data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  // async function getCategories() {
  // 	try {
  // 		setLoading(true);
  // 		let accessToken = localStorage.getItem("accessToken");
  // 		const response = await axiosInstance.get("/offres/employeur/categories", {
  // 			headers: {
  // 				Authorization: `Bearer ${accessToken}`,
  // 			},
  // 		});

  // 		console.log(response);

  // 		if (response.request.status === 200) {
  // 			setCategories(response.data);
  // 			if (response.data.length === 0) {
  // 				setVide(true);
  // 			}
  // 			setLoading(false);
  // 		}
  // 	} catch (e) {
  // 		console.log(e);
  // 		setLoading(false);
  // 		setVide(true);
  // 	}
  // }

  // async function deleteOffre(id) {
  // 	const accessToken = localStorage.getItem("accessToken");
  // 	const response = await axiosInstance.delete(`/offres/employeur/${id}`, {
  // 		headers: {
  // 			Authorization: `Bearer ${accessToken}`,
  // 		},
  // 	});

  // 	if (response.request.status === 200) {
  // 		console.log(response.data);
  // 	}
  // }

  // async function deleteCategorie(id) {
  // 	const accessToken = localStorage.getItem("accessToken");
  // 	const response = await axiosInstance.delete(
  // 		`/offres/employeur/categories/${id}`,
  // 		{
  // 			headers: {
  // 				Authorization: `Bearer ${accessToken}`,
  // 			},
  // 		}
  // 	);

  // 	if (response.status === 200) {
  // 		console.log(response.data);
  // 	}
  // }

  // async function deplacerOffre(idCategorie, idOffre) {
  // 	const accessToken = localStorage.getItem("accessToken");
  // 	const response = await axiosInstance.post(
  // 		`/offres/employeur/categories/${idCategorie}`,
  // 		{ id: idOffre },
  // 		{
  // 			headers: {
  // 				Authorization: `Bearer ${accessToken}`,
  // 			},
  // 		}
  // 	);

  // 	if (response.status === 200) {
  // 		console.log(response.data);
  // 	}
  // }

  useEffect(() => {
    getOffres();
  }, []);

  const handleClick = () => {};

  const handleCategorieClick = (id, categorie, subCategorie) => {
    setSelected(id);
    setSelectedCategorie(categorie);
    setSelectedSubCategorie(subCategorie);
  };

  // const handleAddOffre = async () => {
  // 	setLoading(true);
  // 	await getOffres();
  // 	setLoading(false);
  // 	setShowNouvelleOffre(false);
  // };

  // const handleUpdateOffre = async () => {
  // 	setLoading(true);
  // 	await getOffres();
  // 	setLoading(false);
  // 	setShowModifyOffre(false);
  // };

  // const handleModifyOffre = async (id) => {
  // 	setShowModifyOffre(true);
  // 	setIdOffre(id);
  // };

  // const handleDeleteOffre = async (id) => {
  // 	await deleteOffre(id);
  // 	setLoading(true);
  // 	await getOffres();
  // 	setLoading(false);
  // };

  // const handleAddCategorie = async () => {
  // 	setLoading(true);
  // 	await getCategories();
  // 	setLoading(false);
  // 	setShowNouvelleCategorie(false);
  // };

  // const handleDeleteCategorie = async (id) => {
  // 	await deleteCategorie(id);
  // 	setLoading(true);
  // 	await getCategories();
  // 	setLoading(false);
  // };

  // const handleMoveOffre = async (idCategorie, idOffre) => {
  // 	await deplacerOffre(idCategorie, idOffre);
  // 	setLoading(true);
  // 	await getOffres();
  // 	setLoading(false);
  // };

  const [showNouvelleOffre, setShowNouvelleOffre] = useState(false);
  const [showModifyOffre, setShowModifyOffre] = useState(false);

  const subCategoryComponents = {
    "Cartes de crédit": {
      component: TableauOffres,
      data: offresCreditCard,
    },
    "Crédit automobile": {
      component: TableauAuto,
      data: offresAuto,
    },
    "Crédit moto": {
      component: TableauAuto,
      data: OffresMoto,
    },
    "Crédit à la consommation": {
      component: TableauAuto,
      data: OffresConsommation,
    },
    "Crédit immobilier": {
      component: TableauAuto,
      data: offresCreditImmobilier,
    },
  };

  const SelectedComponent = subCategoryComponents[selectedSubCategorie];

  return (
    <div className="min-h-screen pb-10">
      <H1 />
      <div className="grid grid-cols-4 mx-6 gap-6 mt-20">
        <div className="bg-white rounded-lg p-4 mt-2 shadow">
          <div className="flex justify-between">
            <p className="text-xl font-bold text-black">Mes catégories</p>
          </div>
          <div>
            <TableauCategories
              data={categories}
              onRowClick={(id, categorie, subCategorie) =>
                handleCategorieClick(id, categorie, subCategorie)
              }
              onDelete={() => {}}
              onModify={() => {}}
              vide={vide}
            ></TableauCategories>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 mt-2 col-span-3 shadow">
          <div className="flex justify-between">
            <p className="text-xl font-bold text-black">
              Mes offres {"> "}
              {selectedCategorie} {"> "}
              {selectedSubCategorie}
            </p>
          </div>
          <div>
            {SelectedComponent && (
              <div>
                <SelectedComponent.component
                  data={SelectedComponent.data}
                  onRowClick={handleClick}
                  onDelete={getOffres}
                  onModify={getOffres}
                  onAdd={getOffres}
                  vide={vide}
                  categorie={selectedSubCategorie}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {showModifyOffre && (
        <ModifierOffre
          id={idOffre}
          onClose={() => setShowModifyOffre(false)}
          onConfirm={() => getOffres()}
        />
      )}

      {loading && <CircularProgress />}
    </div>
  );
}

export default Dashboard;
