import { useDispatch, useSelector } from "react-redux";
import { resetUser } from "../slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../utils/constants";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${baseUrl}/logout`, { credentials: true });
      dispatch(resetUser());
      navigate("login");
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl">
          Dev Tinder
        </Link>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end mx-5 flex flex-row">
          <div className="flex flex-row items-center">
            <p className="mr-5">Welcome {user?.firstName}</p>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={
                    user?.photoUrl ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
