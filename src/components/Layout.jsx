import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { baseUrl } from "../utils/constants";
import { addUser } from "../slices/userSlice";
import axios from "axios";

const Layout = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUserInfo = async () => {
    try {
      const response = await axios.get(`${baseUrl}/profile/view`, {
        withCredentials: true,
      });
      const userData = response.data;
      dispatch(addUser(userData.responseData));
    } catch (error) {
      navigate("login");
    }
  };

  useEffect(() => {
    if(!user) {
      fetchUserInfo();
    }
  }, []);

  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
