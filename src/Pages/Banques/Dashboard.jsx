import React, { useState, useEffect } from "react";
import ButtonCarre from "../../components/dashboard/ButtonCarre";
import TableauOffres from "../../components/dashboard/TableauOffres";
import TableauCategories from "../../components/dashboard/TableauCategories";
import NouvelleOffre from "../../components/dashboard/NouvelleOffre";
import ModifierOffre from "../../components/dashboard/ModifierOffre";
import H1 from "../../components/header/H1";
import { CircularProgress } from "@mui/material";
import { FaPlus } from "react-icons/fa";

function Dashboard() {
	let [selected, setSelected] = useState(0);
	let [selectedCategorie, setSelectedCategorie] = useState("All");
	let [selectedSubCategorie, setSelectedSubCategorie] = useState("All");
	console.log(selected);
	let [data, setData] = useState([
		{
			id: 1,
			titre: "Offre 1",
			métier: "Métier",
			début: "2021-12-12",
			fin: "2024-05-29",
		},
	]);
	let [categories, setCategories] = useState([]);
	let [loading, setLoading] = useState(false);
	let [vide, setVide] = useState(false);
	let [idOffre, setIdOffre] = useState(null);

	// async function getOffres() {
	// 	try {
	// 		setLoading(true);
	// 		let accessToken = localStorage.getItem("accessToken");
	// 		const response = await axiosInstance.get("/offres/employeur", {
	// 			headers: {
	// 				Authorization: `Bearer ${accessToken}`,
	// 			},
	// 		});

	// 		console.log(response);

	// 		if (response.request.status === 200) {
	// 			setData(response.data);
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

	// useEffect(() => {
	// 	getOffres();
	// 	getCategories();
	// }, []);

	const handleClick = (id) => {
		window.location.href = `/employeur/offres/${id}`;
	};

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
	const [showNouvelleCategorie, setShowNouvelleCategorie] = useState(false);

	return (
		<div className='min-h-screen pb-10'>
			<H1 />
			<div className='grid grid-cols-4 mx-6 gap-6 mt-20'>
				<div className='bg-white rounded-lg p-4 mt-2 shadow'>
					<div className='flex justify-between'>
						<p className='text-xl font-bold text-black'>Mes catégories</p>
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
				<div className='bg-white rounded-lg p-4 mt-2 col-span-3 shadow'>
					<div className='flex justify-between'>
						<p className='text-xl font-bold text-black'>
							Mes offres {"> "}
							{selectedCategorie} {"> "}
							{selectedSubCategorie}
						</p>
						<div className='flex space-x-4'>
							<ButtonCarre
								couleur='vert'
								couleurTexte={"violet"}
								contenu={<FaPlus />}
								width={"fit text-sm"}
								height={"fit"}
								onClick={() => setShowNouvelleOffre(true)}
							></ButtonCarre>
						</div>
					</div>
					<div>
						<TableauOffres
							data={data}
							onRowClick={handleClick}
							onDelete={() => {}}
							onModify={() => {}}
							onMove={() => {}}
							vide={vide}
							categorie={selected}
						></TableauOffres>
					</div>
				</div>
			</div>

			{showNouvelleOffre && (
				<NouvelleOffre
					onClose={() => setShowNouvelleOffre(false)}
					onConfirm={() => {}}
				/>
			)}

			{showModifyOffre && (
				<ModifierOffre
					id={idOffre}
					onClose={() => setShowModifyOffre(false)}
					onConfirm={() => {}}
				/>
			)}

			{loading && <CircularProgress />}
		</div>
	);
}

export default Dashboard;
