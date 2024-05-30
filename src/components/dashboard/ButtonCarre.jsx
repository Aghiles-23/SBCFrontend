import React from "react";

function ButtonCarre({
	couleur,
	couleurTexte,
	contenu,
	width,
	height,
	onClick,
}) {
	const buttonWidth = width || "w-10";
	const buttonHeight = height || "h-10";

	return (
		<div>
			<button
				className={`flex rounded-lg ${buttonWidth} ${buttonHeight} bg-${couleur} text-${couleurTexte} text-sm justify-center font-bold px-4 py-2 items-center hover:filter hover:brightness-90 transition-all duration-300`}
				onClick={onClick}
			>
				{contenu}
			</button>
		</div>
	);
}

export default ButtonCarre;