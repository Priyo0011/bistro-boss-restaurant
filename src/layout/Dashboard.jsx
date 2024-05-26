import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping, FaUsers } from "react-icons/fa6";
import { IoHomeSharp, IoWallet } from "react-icons/io5";
import {
  FaCalendarAlt,
  FaStar,
  FaShoppingBag,
  FaEnvelope,
} from "react-icons/fa";
import { TbCalendarCheck } from "react-icons/tb";
import { MdMenu } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="flex">
        <div className="w-[280px] min-h-screen bg-[#D1A054]">
          <div className="flex-1 px-8 pt-6 ">
            <div className="flex gap-2 items-center">
              <div className="text-white">
                <h1 className="text-xl font-bold">BISTRO BOSS</h1>
                <h2 className="uppercase font-normal">
                  R e s t a u r a n t . .
                </h2>
              </div>
            </div>
          </div>

          <ul className="menu px-8 pt-6 space-y-2">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/adminHome"
                    
                  >
                    <IoHomeSharp />
                    ADMIN HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addItems"
                    
                  >
                    <IoHomeSharp />
                    ADD ITEMS
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageItems"
                    
                  >
                    <MdMenu />
                    MANAGE ITEM
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/bookings"
                    
                  >
                    <RiContactsBook2Fill />
                    MANAGE BOOKING
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/users"
                    
                  >
                    <FaUsers />
                    ALL USERS
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "text-sm" : "text-sm "
                    }
                  >
                    <IoHomeSharp />
                    USER HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payment"
                    className={({ isActive }) =>
                      isActive ? "text-sm" : "text-sm"
                    }
                  >
                    <FaCalendarAlt />
                    RESERVATION
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/paymentHistory"
                    className={({ isActive }) =>
                      isActive ? "text-sm" : "text-sm "
                    }
                  >
                    <IoWallet />
                    PAYMENT HISTORY
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/cart"
                    className={({ isActive }) =>
                      isActive ? "text-sm " : "text-sm"
                    }
                  >
                    <FaCartShopping />
                    MY CART
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "text-sm" : "text-sm"
                    }
                  >
                    <FaStar />
                    ADD REVIEW
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "text-sm" : "text-sm "
                    }
                  >
                    <TbCalendarCheck />
                    MY BOOKING
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <IoHomeSharp />
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <MdMenu />
                MENU
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop/category">
                <FaShoppingBag />
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">
                <FaEnvelope />
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bg-base-200">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
