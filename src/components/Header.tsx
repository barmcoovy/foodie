import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import HeaderButton from "./HeaderButton";

const Header: React.FC = () => {
  const MenuNavbar: string[] = ["Log In", "Create an account"];
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toogleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <div className="w-full bg-white h-auto text-black flex justify-between items-center font-display ">
        <div className="m-10 flex justify-center items-center ">
          <img
            src="./src/assets/foodie-logo.png"
            alt="logo"
            className="w-10 md:w-20 "
          />
          <h1 className=" text-md md:text-2xl">Foodie - order & enjoy</h1>
        </div>
        <div className="m-10 text-sm lg:text-lg items-center gap-5 md:flex hidden">
          <div className="bg-black p-3 w-[100px] text-white text-center rounded-2xl cursor-pointer duration-300 ease-in hover:bg-gray-800 ">
            <p>Help</p>
          </div>
          {MenuNavbar.map((value, index) => {
            return <HeaderButton value={value} key={index} />;
          })}
        </div>
        <div className="flex items-center md:hidden m-1.5 mr-10 text-2xl cursor-pointer">
          <FontAwesomeIcon icon={faBars} onClick={toogleVisibility} />
        </div>
      </div>
      {isVisible ? (
        <MobileNavbar
          isVisible={isVisible}
          handleChangeVisibility={toogleVisibility}
        />
      ) : null}
    </>
  );
};

export default Header;
