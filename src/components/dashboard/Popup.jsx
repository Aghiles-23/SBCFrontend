/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ButtonCarre from "./ButtonCarre";
import { CircularProgress } from "@mui/material";

function Popup({ Titre, Texte, onConfirm, onDismiss }) {
	const [loading, setLoading] = useState(false);

	const handleConfirm = async () => {
		try {
			setLoading(true);

			await onConfirm();
			setLoading(false);
			onDismiss();
		} catch (error) {
			console.error("Confirmation error:", error);
			setLoading(false);
		}
	};

	return (
		<div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center z-50 justify-center'>
			{!loading && (
				<div className=' w-1/4 h-fit bg-white p-4 rounded-md space-y-8'>
					<div className='space-y-2'>
						<p className='text-lg font-bold text-center'>{Titre}</p>
						<p className='text-sm'>{Texte}</p>
					</div>
					<div className='flex justify-between'>
						<ButtonCarre
							couleur={"bleuF"}
							couleurTexte={"violet"}
							contenu={"Annuler"}
							width={"fit text-xs"}
							height={"fit"}
							onClick={onDismiss}
						></ButtonCarre>
						<ButtonCarre
							couleur={"vert"}
							couleurTexte={"violet"}
							contenu={"Continuer"}
							width={"fit text-xs"}
							height={"fit"}
							onClick={handleConfirm}
						></ButtonCarre>
					</div>
				</div>
			)}
			{loading && <CircularProgress />}
		</div>
	);
}

export default Popup;
