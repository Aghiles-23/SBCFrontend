const Logout = () => {
  // const navigate = useNavigate();

  localStorage.removeItem("mode");
  localStorage.removeItem("user");
  // navigate("/login");
};

export default Logout;
