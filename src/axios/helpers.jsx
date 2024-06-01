import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { useEffect } from "react"; // Import React from 'react' for JSX
import { useNavigate } from "react-router-dom";

export const storeUser = (data, image) => {
  Cookies.set(
    "user",
    JSON.stringify({
      username: data.user.username,
      email: data.user.email,
      avatar: image.data.avatar.url,
      role: data.user.role,
      jwt: data.jwt,
      id: data.user.id,
    })
  );
};

export const storeBank = (data) => {
  // console.log(data);
  // console.log(data[0].attributes);
  Cookies.set(
    "user",
    JSON.stringify({
      id: data[0].id,
      email: data[0].attributes.email,
      bankName: data[0].attributes.Titre,
      avatar: data[0].attributes.BankImg.data.attributes.url,
      image: data[0].attributes.BankImg.data.attributes,
      //    // avatar:data.user.avatar,
      //     //role:data.user.role,
      //     //jwt: data.jwt,
    })
  );
};
export const userData = () => {
  const stringifiedUser = Cookies.get("user") || '""';

  return JSON.parse(stringifiedUser || "");
};

export const BankData = () => {
  const stringifiedBank = Cookies.get("user") || '""';
  return JSON.parse(stringifiedBank || "");
};

export const Protector = ({ Component }) => {
  const navigate = useNavigate();

  const { jwt } = userData();

  useEffect(() => {
    if (!jwt) {
      navigate("/login");
    }
  }, [navigate, jwt]);

  return <Component />;
};

// Define prop types for the Protector component
Protector.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
