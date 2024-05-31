import { Tabs, Tab, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const OfferTabs = () => {
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [value, setValue] = useState("");


    useEffect(() => {
        setValue(location.pathname);
    }, [location]);

    return (
        <Box sx={{ width: "100%", mt: 6 }}>
            <Tabs
                // className="border"
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
                sx={{
                    mt: -6,
                    width: "100%",
                    pl: { xs: "12%", md: 58 },
                    "& .MuiTab-root": {
                        fontFamily: "Acme",

                        // Appliquer des styles aux onglets individuels
                        fontWeight: 600, // Police en gras
                        fontSize: "13px", // Taille de la police
                        //textTransform: "none", // Pas de transformation de texte (tout en minuscules)
                    },
                    "& .Mui-selected": {},
                }}
            >
                <Tab
                    value="/offres"
                    label="Particulier"
                    component={Link}
                    to="/offres"
                />
                <Tab value="/offresProfessionel"
                    label="Professionel"
                    component={Link}
                    to="/offresProfessionel"  />
                <Tab value="/offresEntreprise"
                    label="Entreprise"
                    component={Link}
                    to="/offresEntreprise" />
            </Tabs>
        </ Box >


    );
};

export default OfferTabs;