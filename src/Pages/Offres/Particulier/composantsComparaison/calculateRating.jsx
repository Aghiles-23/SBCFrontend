// src/hooks/calculateRating.js

const calculateRating = (reviews) => {
    if (!Array.isArray(reviews)) {
      console.error("reviews is not an array", reviews);
      return 0; // ou une autre valeur par défaut
    }
  
    if (reviews.length === 0) {
      return 0; // ou une autre valeur par défaut
    }
  
    let somme = 0;
    reviews.forEach((item) => {
      somme += item?.attributes?.note || 0;
    });
  
    return somme / reviews.length;
  };
  
  export default calculateRating;
  