import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);



  return (
    <div>
      <nav className="flex flex-col md:flex-row md:justify-between md:items-center py-3 md:py-2  md:px-5 md:ml-0 bg-black">
        <Logo></Logo>
        {/* navbar link page */}
        <div className="lg:w-1/3 lg:ml-[300px] ml-[70px]">
          <ul className="flex gap-5 font-bold text-sm flex-row md:flex-row md:justify-center md:items-center text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#c97d4a] underline"
                    : ""
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rooms"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#c97d4a] underline"
                    : ""
                }
              >
                ROOMS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myBookins"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#c97d4a] underline"
                    : ""
                }
              >
                MY BOOKINGS
              </NavLink>
            </li>
          </ul>
        </div>

        {/* registration and logggin part */}
        <div className="flex  lg:w-[700px] font-bold text-lg flex-col md:flex-row md:justify-end  md:items-center ">
          {/* registration */}
          <div className="mb-3 md:mb-0 ml-[180px] md:ml-0 mr-[5px]">
            <Link to="/register">
              <button className=" btn-sm bg-[#c97d4a] text-white uppercase font-bold">
                Register
              </button>
            </Link>
          </div>

          {/* Login, logout, profile pic and username  */}
          <div className="">
            {user?.email ? (
              <div className="flex gap-4 justify-center items-center w-[300px] ml-[80px] md:ml-0">
                <div className=" rounded-full">
                  <img
                    className="rounded-full w-[90px] h-[50px]"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 w-[400px] z-[1] p-2 shadow bg-base-100 rounded-box "
                >
                  <li>
                    <button className="btn btn-sm  btn-ghost">
                      {user.displayName}
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-sm bg-[#c97d4a] text-white font-bold"
                      onClick={logOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className=" btn-sm bg-[#c97d4a] text-white uppercase font-bold lg:ml-[5px] md:ml-0 ml-[190px]">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
