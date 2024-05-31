import axios from "axios";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import H1 from "../../components/header/H1";
import { useMode } from "../../theme";


import {
	Box,
	Button,
	Stack,
	TextField,
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Container,
	Grid,
} from "@mui/material";
import CreditCardComponent from "../../Pages/Offres/Particulier/composantsComparaison/cartecredit";
import AutreCardComponent from "../../Pages/Offres/Particulier/composantsComparaison/autrecard";

const initialUser = {
	username: "",
	email: "",
	password: "",
	role: "",
	type: "",
	subtype: "",
};

const Comparaison = () => {
	// @ts-ignore
	const [theme, ] = useMode();

	const inputs = {
		Particulier: {
			"Cartes de crédit": {
				PlafondMax: {
					question: "Quelle est votre limite de cartes de crédit ?",
					value: 0,
				},
				RetraitMax: {
					question: "Quelle est votre limite de retrait ?",
					value: 0,
				},
				TraitementMax: {
					question: "Quelle est votre limite de traitement ?",
					value: 0,
				},
			},
			"Crédit immobilier": {
				Montant: {
					question: "Quel est le montant de votre crédit immobilier ?",
					value: 0,
				},
			},
			"Crédit automobile": {
				Montant_de_financement: {
					question: "Quel est le montant de votre crédit automobile ?",
					value: 0,
				},
				Taux_dinteret: {
					question: "Quel est le taux d'intérêt souhaité ?					",
					value: 0,
				},

				Duree_Credit: {
					question: "Quelle est la durée totale du crédit souhaitée ?	",
					value: 0,
				},

			},
			"Crédit moto": {
				Montant_de_financement: {
					question: "Quel est le montant de votre crédit moto ?",
					value: 0,
				},
				Taux_dinteret: {
					question: "Quel est le taux d'intérêt souhaité ?",
					value: 0,
				},

				Duree_Credit: {
					question: "Quelle est la durée totale du crédit souhaitée ?",
					value: 0,
				},
			},
			"Crédit à la consommation": {
				Montant: {
					question: "Quel est le montant de votre crédit à la consommation ?",
					value: 0,
				},
			},
		},
		Entreprise: {
			"Crédit entreprise": {
				Montant: {
					question: "Quel est le montant de votre crédit entreprise ?",
					value: 0,
				},
			},
			Leasing: {
				Montant: {
					question: "Quel est le montant de votre leasing ?",
					value: 0,
				},
			},
		},
		Professionel: {
			"Crédit professionnel": {
				Montant: {
					question: "Quel est le montant de votre crédit professionnel ?",
					value: 0,
				},
			},
			Equipement: {
				Montant: {
					question: "Quel est le montant de votre équipement ?",
					value: 0,
				},
			},
		},
	};

	const [user, setUser] = useState(initialUser);
	const [fields, setFields] = useState(null);
	const [step, setStep] = useState(1);
	const [fieldIndex, setFieldIndex] = useState(0);
	// @ts-ignore
	//const navigate = useNavigate();

	const handleChange = ({ target }) => {
		const { name, value } = target;
		setUser((currentUser) => ({
			...currentUser,
			[name]: value,
		}));
		// Reset fields and subtypes when the type changes
		if (name === "type") {
			setFields({});
			setUser((currentUser) => ({
				...currentUser,
				subtype: "",
			}));
			setFieldIndex(0);
		}
	};

	const handleFieldChange = ({ target }) => {
		const { name, value } = target;
		setFields((currentFields) => ({
			...currentFields,
			[name]: value,
		}));
	};

	const handleNext = () => {
		if (step === 1 && user.type) {
			setStep(2);
		} else if (step === 2 && user.subtype) {
			setStep(3);
			setFieldIndex(0); // Reset field index when moving to the questions step
		} else if (step === 3) {
			if (
				fieldIndex <
				Object.keys(inputs[user.type][user.subtype]).length - 1
			) {
				setFieldIndex(fieldIndex + 1);
			} else {
				// Check if it's the last step and trigger filtering
				setStep(4);
				filterData();
			}
		}
	};

	const handleBack = () => {
		if (step > 1 && fieldIndex === 0) {
			setStep(step - 1);
		} else if (step === 3 && fieldIndex > 0) {
			setFieldIndex(fieldIndex - 1);
		}
	};

	const renderFields = () => {

		if (!user.type || !user.subtype) return null;
		const questions = inputs[user.type][user.subtype];
		const keys = Object.keys(questions);
		const field = questions[keys[fieldIndex]];

		return (
			<Container sx={{ mb: 10, ml: -3, width: "54%" }} >
				<Typography sx={{
					fontSize: "18px",
					fontWeight: 500,
					color: "#000000",
					cursor: "pointer",
					fontFamily: "Acme",
					//ml: "10%",
				}}>{field.question}</Typography>
				<TextField
					type={"number"}
					label={keys[fieldIndex]}
					name={keys[fieldIndex]}
					value={fields[keys[fieldIndex]] || ""}
					onChange={handleFieldChange}
					margin='normal'
					fullWidth
				/>
			</Container>
		);
	};

	const [filtredData, setFiltredData] = useState([]);
	const filterData = async () => {
		let url;
		if (user.subtype === "Cartes de crédit") {
			url = "http://localhost:1337/api/carte-credits?populate=*";
		} else if (user.subtype === "Crédit automobile") {
			url = "http://localhost:1337/api/credit-automobiles?populate=*";
		} else if (user.subtype === "Crédit moto") {
			url = "http://localhost:1337/api/credit-motos?populate=*";
		} else if (user.subtype === "Crédit  à la consommation") {
			url = "http://localhost:1337/api/credit-automobiles?populate=*";
		} else if (user.subtype === "Crédit immobilier") {
			url = "http://localhost:1337/api/credit-automobiles?populate=*";
		}

		if (url) {
			try {
				const response = await axios.get(url);
				console.log(response);

				if (user.type === "Particulier") {
					if (user.subtype === "Cartes de crédit") {
						const filteredData = response.data.data.filter(
							(item) =>
								item.attributes.PlafondPaiment <= parseInt(fields.PlafondMax) &&
								item.attributes.PlafondRetrait <= parseInt(fields.RetraitMax)
						);
						setFiltredData(filteredData);
					} else {
						const filteredData = response.data.data.filter(
							(item) =>
								item.attributes.MontantFinancement <= parseInt(fields.Montant_de_financement) //&&
							//item.attributes.TauxInteret <= parseInt(fields.RetraitMax)
						);
						setFiltredData(filteredData);

					}

				}
			} catch (error) {
				console.error("Erreur lors de la récupération des données:", error);
			}
		} else {
			console.error("Aucune URL correspondante trouvée pour le subtype:", user.subtype);
		}
	};

	const renderResults = () => (
		<Container sx={{ width: "100%" }}>
			<Typography variant='h6' justifyContent="center">Résultats</Typography>
			<pre>{JSON.stringify(fields, null, 2)}</pre>

			{filtredData && (
				<Grid container spacing={2} mt={0.5} sx={{ cursor: "pointer" }}>
					{filtredData.map((item) => {
						if (user.type === "Particulier") {
							if (user.subtype === "Cartes de crédit") {
								return <CreditCardComponent key={item.id} item={item} theme={theme} />;

							} else {
								return <AutreCardComponent key={item.id} item={item} theme={theme} />;

							}
						}
						return null;
					})}
				</Grid>
			)}
		</Container>
	);



	return (
		<Stack sx={{ width: "100%" }}>
			<H1 />
			<Stack
				sx={{
					display: "flex",
					direction: "column",
					gap: 1,
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					mt: 10,

				}}
			>
				<Box sx={{ width: "100%" }}>
					<Typography
						sx={{
							fontWeight: 600,
							fontSize: "30px",
							fontFamily: "Acme",
							textDecoration: "none",
							ml: "18%",
							mb: 10,
						}}
					>
						Bienvenue a notre comparateur d&apos;offres de crédits bancaires

					</Typography>
				</Box>
				<Box

					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 3,
						width: "98%",
						padding: 3,
						border: "1px solid #ccc",
						borderRadius: 2,
					}}
				>
					<form >
						{step === 1 && (
							<Box sx={{ ml: 0, mb: 10, width: "50%" }}>
								<FormControl fullWidth margin="normal" sx={{ mb: 2 }}>
									<InputLabel id="type-select-label">Sélectionnez votre type d&apos;offres de credit</InputLabel>
									<Select
										labelId="type-select-label"
										name="type"
										value={user.type}
										onChange={handleChange}
										label="Sélectionnez votre type d'offres de credit"
										sx={{ fontSize: "1rem" }}
									>
										<MenuItem value="Particulier">Particulier</MenuItem>
										<MenuItem value="Entreprise">Entreprise</MenuItem>
										<MenuItem value="Professionel">Professionel</MenuItem>
									</Select>
								</FormControl>
							</Box>
						)}
						{step === 2 && (
							<Box sx={{ mb: 10, width: "50%" }}>
								<FormControl fullWidth margin="normal" sx={{ mb: 2 }}>
									<InputLabel id="subtype-select-label">Sélectionnez votre sous-type</InputLabel>
									<Select
										labelId='subtype-select-label'
										name='subtype'
										value={user.subtype}
										onChange={handleChange}
										label='Sélectionnez votre sous-type'
										inputProps={{
											sx: { fontSize: "1rem" },
										}}
									>
										{Object.keys(inputs[user.type]).map((subtype) => (
											<MenuItem key={subtype} value={subtype}>
												{subtype}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Box>
						)}
						{step === 3 && renderFields()}
						{step === 4 && renderResults()}
						<Box sx={{ width: "50%", display: "flex", justifyContent: "space-between" }}>
							{step < 4 && (
								<>
									<Button
										sx={{
											fontFamily: "Acme",
											backgroundColor: "#068548",
											color: "#FFFFFF",
											"&:hover": {
												backgroundColor: "#ffffff",
												color: "#068548",
											},
										}}
										onClick={handleBack}
										disabled={step === 1 && fieldIndex === 0}
									>
										Précédent
									</Button>
									<Button
										sx={{
											fontFamily: "Acme",
											backgroundColor: "#068548",
											color: "#FFFFFF",
											"&:hover": {
												backgroundColor: "#ffffff",
												color: "#068548",
											},
										}}
										onClick={handleNext}
										disabled={
											(step === 1 && !user.type) ||
											(step === 2 && !user.subtype) ||
											(step === 3 &&
												!inputs[user.type][user.subtype][
												Object.keys(inputs[user.type][user.subtype])[
												fieldIndex
												]
												])
										}
									>
										{step === 4 ? "Terminer" : "Suivant"}
									</Button>
								</>
							)}
						</Box>
					</form>
				</Box>
			</Stack>
		</Stack>
	);
};

export default Comparaison;
