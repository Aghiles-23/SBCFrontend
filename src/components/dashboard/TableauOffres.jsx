import React, { useState, useEffect } from "react";
import { FaTrash, FaPen, FaArrowsAlt } from "react-icons/fa";
import Popup from "./Popup";
// import { DeplacerOffre } from "./DeplacerOffre";

function TableauOffres({
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

	return (
		<div>
			<div className='w-full mt-6 space-y-1'>
				{data.length === 0 ? (
					<>
						<div
							className={`grid grid-cols-6 text-center bg-bleuF items-center p-2 rounded-lg`}
						>
							<p className='text-white text-sm font-bold'>Titre</p>
							<p className='text-white text-sm font-bold'>Métier</p>
							<p className='text-white text-sm font-bold'>Début</p>
							<p className='text-white text-sm font-bold'>Fin</p>
							<p className='text-white text-sm font-bold'>
								Date de publication
							</p>
							<p className='text-white text-sm font-bold'>Actions</p>
						</div>
						<p className='text-bleuF text-lg font-bold'>
							{vide ? "Pas d'offre disponible" : ""}
						</p>
					</>
				) : (
					<>
						<div
							className={`grid grid-cols-6 text-center bg-vert items-center p-2 rounded-lg`}
						>
							<p className='text-white text-sm font-bold'>Titre</p>
							<p className='text-white text-sm font-bold'>Métier</p>
							<p className='text-white text-sm font-bold'>Début</p>
							<p className='text-white text-sm font-bold'>Fin</p>
							<p className='text-white text-sm font-bold'>
								Date de publication
							</p>
							<p className='text-white text-sm font-bold'>Actions</p>
						</div>
						<div className='w-full space-y-1'>
							{data
								.filter((item) =>
									categorie !== 0 && categorie
										? item.categorie === categorie
										: true
								)
								.map((item, itemIndex) => (
									<div
										key={itemIndex}
										className={`grid grid-cols-6 text-center justify-center bg-violet items-center p-2 rounded-lg cursor-pointer`}
										onClick={() => onRowClick(item._id)}
									>
										<p className='text-black text-sm font-semibold'>
											{item.titre}
										</p>
										<p className='text-black text-sm font-semibold'>
											{item.metier ? item.metier.nom : ""}
										</p>
										<p className='text-black text-sm font-semibold'>
											{item.debut}
										</p>
										<p className='text-black text-sm font-semibold'>
											{item.fin}
										</p>
										<p className='text-black text-sm font-semibold'>
											{item.date}
										</p>

										<div className='flex justify-center items-center space-x-4'>
											<>
												<FaPen
													size={12}
													color={"#465475"}
													className='cursor-pointer'
													onClick={(e) => {
														setSelectedId(item._id);
														console.log(item._id);
														e.stopPropagation();
														onModify(item._id);
													}}
												/>
												<FaTrash
													size={12}
													className='cursor-pointer'
													color='#FF584D'
													onClick={(e) => {
														setSelectedId(item._id);
														console.log(item._id);
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
					onConfirm={() => onDelete(selectedId)}
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

export default TableauOffres;