import { Link, NavLink } from "react-router-dom";
import shop from '../assets/icon/15596567 (1).jpg'
import useCart from "../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] =useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-[#EEFF25] text-lg"
              : "font-semibold text-white text-lg"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-[#EEFF25] text-lg"
              : "font-semibold text-white text-lg"
          }
        >
          CONTACT US
        </NavLink>
      </li>
      <li>
      <NavLink
          to="dashboard"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-[#EEFF25] text-lg"
              : "font-semibold text-white text-lg"
          }
        >
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-[#EEFF25] text-lg"
              : "font-semibold text-white text-lg"
          }
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop/category"
          className={({ isActive }) =>
            isActive
              ? "font-semibold text-[#EEFF25] text-lg"
              : "font-semibold text-white text-lg"
          }
        >
          OUR SHOP
        </NavLink>
      </li>
      <li>
        <NavLink to='/dashboard/cart'>
          <button>
            <img className="w-8 rounded-full relative" src={shop} alt="" />
            <div className="badge bg-red-600 border-none text-white absolute z-10 -mt-3">{cart.length}</div>
          </button>
        </NavLink>
      </li>
      <li>
      {user ? (
        <>
          <button
            onClick={handleLogOut}
            className=" text-[#BB8506] border-4 border-[#BB8506] rounded-lg px-4 font-bold"
          >
            logout
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">
              <button className=" text-[#BB8506] border-4 border-[#BB8506] rounded-lg px-4 font-bold">
                Login
              </button>
            </Link>
          </li>
        </>
      )}
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-50 bg-black max-w-[1920px] px-8 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex-1">
            <div className="flex gap-2 items-center">
              <div className="text-white">
                <h1 className="text-2xl font-bold">BISTRO BOSS</h1>
                <h2 className="uppercase font-normal">
                  R e s t a u r a n t . . .
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-6 text-sm">{navLinks}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
