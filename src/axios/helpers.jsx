import PropTypes from "prop-types";
import { useEffect } from "react"; // Import React from 'react' for JSX
import { useNavigate } from "react-router-dom";

export const storeUser = (data) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: data.user.username,
      email: data.user.email,
      avatar:data.user.avatar,
      jwt: data.jwt,
    })
  );
};

export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser || "");
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
