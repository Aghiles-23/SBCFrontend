import Cookies from "js-cookie";

export const Logout = () => {
  // const navigate = useNavigate();

  Cookies.remove("mode");
  Cookies.remove("user");
  Cookies.remove("avatar");
  // navigate("/login");
};

export default Logout;
