import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useLocation, Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  const path = useLocation().pathname;

  return (
    <div className="  relative h-full w-[15%] md:w-[26%] lg:w-[15.6%] bg-white border-r border-gray-300 flex flex-col items-center ">
      <Link
        to="/"
        className=" w-full pl-0 md:pl-6 lg:pl-10 pt-10 flex items-center justify-center md:justify-start lg:justify-start"
      >
        <div className=" h-[35px] w-[35px] rounded-lg bg-prefixblue-dark flex items-center justify-center mr-0 md:mr-5 lg:mr-5 ">
          <p className=" text-white text-lg font-bold ">Z</p>
        </div>
        <h1 className=" hidden md:inline-flex lg:inline-flex text-lg font-bold">
          Z.S.T
        </h1>
      </Link>
      <ul className=" pl-0 md:pl-6 lg:pl-10 mt-4 md:mt-8 lg:mt-20 text-gray-400 text-sm font-bold w-full ">
        <Link to="/">
          <li
            className={
              path === "/" || path === "/search"
                ? "flex items-center justify-center md:justify-start lg:justify-start h-[40px] w-full text-black border-r-4 border-prefixblue-dark my-6"
                : " flex items-center justify-center md:justify-start lg:justify-start h-[40px] w-full my-6"
            }
          >
            <i
              className={
                path === "/" || path === "/search"
                  ? "text-prefixblue-dark mr-0 md:mr-4 lg:mr-4 "
                  : " mr-0 md:mr-4 lg:mr-4 "
              }
            >
              <CampaignOutlinedIcon fontSize="medium" />
            </i>
            <p className=" hidden md:inline-flex lg:inline-flex ">Listings </p>
          </li>
        </Link>
        <Link to="/dashboard">
          <li
            className={
              path === "/dashboard"
                ? "flex items-center justify-center md:justify-start lg:justify-start h-[40px] w-full text-black border-r-4 border-prefixblue-dark my-6"
                : " flex items-center justify-center md:justify-start lg:justify-start h-[40px] w-full my-6"
            }
          >
            <i
              className={
                path === "/dashboard"
                  ? "text-prefixblue-dark mr-0 md:mr-4 lg:mr-4 "
                  : " mr-0 md:mr-4 lg:mr-4 "
              }
            >
              <DashboardOutlinedIcon fontSize="medium" />
            </i>
            <p className=" hidden md:inline-flex lg:inline-flex ">Dashboard </p>
          </li>
        </Link>
        <Link to="/providers">
          <li
            className={
              path === "/providers"
                ? "flex items-center justify-center md:justify-start lg:justify-start h-[40px] w-full text-black border-r-4 border-prefixblue-dark my-6"
                : " flex items-center justify-center md:justify-start lg:justify-start h-[40px] w-full my-6"
            }
          >
            <i
              className={
                path === "/providers"
                  ? "text-prefixblue-dark mr-0 md:mr-4 lg:mr-4 "
                  : " mr-0 md:mr-4 lg:mr-4 "
              }
            >
              <FeedOutlinedIcon fontSize="medium" />
            </i>
            <p className=" hidden md:inline-flex lg:inline-flex ">Providers </p>
          </li>
        </Link>
        <Link to="/billing">
          <li
            className={
              path === "/billing"
                ? "flex items-center justify-center md:justify-start lg:justify-start h-[40px] w-full text-black border-r-4 border-prefixblue-dark my-6"
                : " flex items-center justify-center md:justify-start lg:justify-start h-[40px] w-full my-6"
            }
          >
            <i
              className={
                path === "/billing"
                  ? "text-prefixblue-dark mr-0 md:mr-4 lg:mr-4 "
                  : " mr-0 md:mr-4 lg:mr-4 "
              }
            >
              <CreditCardOutlinedIcon fontSize="medium" />
            </i>{" "}
            <p className=" hidden md:inline-flex lg:inline-flex ">Billing </p>
          </li>
        </Link>
        <Link to="/settings">
          <li
            className={
              path === "/settings"
                ? "flex items-center justify-center md:justify-start lg:justify-start h-[40px] w-full text-black border-r-4 border-prefixblue-dark my-6"
                : " flex items-center justify-center md:justify-start lg:justify-start h-[40px] w-full my-6"
            }
          >
            <i
              className={
                path === "/settings"
                  ? "text-prefixblue-dark mr-0 md:mr-4 lg:mr-4 "
                  : " mr-0 md:mr-4 lg:mr-4 "
              }
            >
              <SettingsOutlinedIcon fontSize="medium" />
            </i>
            <p className=" hidden md:inline-flex lg:inline-flex ">Settings </p>
          </li>
        </Link>
        <Link
          to="/"
          onClick={() => {
            localStorage.removeItem("user");
            return window.location.reload();
          }}
        >
          <li
            className={
              " flex items-center justify-center md:justify-start lg:justify-start h-[40px] w-full my-6"
            }
          >
            <i className={" mr-0 md:mr-4 lg:mr-4 "}>
              <LogoutIcon fontSize="medium" />
            </i>
            <p className=" hidden md:inline-flex lg:inline-flex ">Logout </p>
          </li>
        </Link>
      </ul>
      <div className=" hidden md:inline-flex lg:inline-flex absolute bottom-10 flex-col items-center justify-end h-[300px] w-[235px] md:w-[90%] lg:w-[85%] rounded-lg bg-prefixblue-dark bg-opacity-20 ">
        <p className=" text-[250px] font-black text-prefixblue-dark opacity-10 leading-none ">
          Z
        </p>
        <div className=" z-10 absolute bottom-[60px] flex flex-col items-center text-prefixblue-dark text-center px-2 md:px:-4 lg:px-8 ">
          <p className=" font-semibold mb-2 ">Upgrade to Pro</p>
          <p className=" text-sm font-medium mb-4 ">
            Make the most out of Z.S.T with Pro.{" "}
          </p>
          <button className=" focus:outline-none h-[40px] w-[90px] bg-prefixblue-dark rounded-[10px] text-sm text-white ">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
