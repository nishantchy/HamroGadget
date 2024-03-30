import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import userImg from "../assets/images/user.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { login, register, logout } = useKindeAuth();
  const [searchTerm, setSearchTerm] = useState("");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <>
      <header className="w-full mx-auto shadow-md fixed bg-white py-4">
        <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
          <div className="flex justify-between items-center px-4 text-6xl uppercase font-bold">
            <Link to="/">Logo</Link>
            <div
              onClick={() => setNav(!nav)}
              className="cursor-pointer xl:hidden"
            >
              {nav ? (
                <BiX className="text-4xl" />
              ) : (
                <BiMenuAltRight className="text-4xl" />
              )}
            </div>
          </div>
          <nav
            className={`${
              nav
                ? "py-8 px-4 flex flex-col w-full bg-white gap-y-6 overflow-hidden"
                : "hidden xl:flex xl:justify-center xl:flex-row xl:items-center xl:gap-6"
            } transition-all duration-150 text-center`}
          >
            <form onSubmit={handleSubmit} action="">
              <div className="w-72 mx-auto">
                <Input
                  label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
            <Link
              className="hover:text-white hover:bg-gray-900 p-1"
              onClick={() => scrollToSection("about")}
            >
              About
            </Link>
            <Link
              className="hover:text-white hover:bg-gray-900 p-1"
              to="/products"
            >
              Products
            </Link>
            <Link className="hover:text-white hover:bg-gray-900 p-1" to="/cart">
              Cart
            </Link>
            <div>
              <div
                className="flex justify-center rounded-full p-1 cursor-pointer"
                onClick={handleMenuOpen}
              >
                {/* User Icon */}
                <img src={userImg} alt="" />
              </div>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                getContentAnchorEl={null}
              >
                {/* Kinde login and signup buttons */}
                <MenuItem onClick={register}>Register</MenuItem>
                <MenuItem onClick={login}>Log In</MenuItem>
                <MenuItem onClick={logout}>Log Out</MenuItem>
              </Menu>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
