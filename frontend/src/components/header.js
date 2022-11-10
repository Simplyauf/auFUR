import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { NavTabs } from "./navTabs";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const [isHamburgerBtnClicked, setIsHamburgerBtnClicked] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const { allProductsData, isLoading, loadingOrErrorMessage } = useSelector((state) => state.productsData);

  const navigateToSearchPage = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsLargeScreen(true);
    } else if (window.innerWidth < 768) {
      setIsLargeScreen(false);
    }
    window.addEventListener("resize", (e) => {
      if (e.currentTarget.innerWidth >= 768) {
        setIsLargeScreen(true);
      } else if (e.currentTarget.innerWidth < 768) {
        setIsLargeScreen(false);
      }
    });
  }, [isLargeScreen]);

  // SEARCH ENTER BUTTON WONT WORK WHEN THE allProducts IS LOADING OR THERE IS AN ERROR
  const handleSearching = (e) => {
    if (isLoading && loadingOrErrorMessage === "Loading") {
      console.log("pls wait");
    }
    if (isLoading && loadingOrErrorMessage !== "Loading") {
      console.log("err fetch");
    } else if (allProductsData.length > 0) {
      navigateToSearchPage(
        {
          pathname: "/search",
          search: `?searchedProduct=${e.currentTarget.previousElementSibling.value}`,
        },
        {
          state: location.pathname,
        }
      );
    }
  };

  // on entering a new pathname these should be falses
  useEffect(() => {
    setIsSearchClicked(false);
    setIsHamburgerBtnClicked(false);
  }, [location.pathname]);

  return (
    <header className="h-[80px] sticky top-0 z-[1000] bg-[#ffffff]">
      <nav className="w-[100%] h-[100%] font-Roboto px-[5%] font-medium flex items-center justify-between shadow-[0px_0px_4px_0px_rgba(14,19,24,0.7)] ">
        <h1 className="text-[24px]">AUFUR</h1>
        {isLargeScreen && <NavTabs />}
        <div className="flex items-center gap-4 md:basis-[25%] text-[18px]">
          <BiSearch
            className="w-6 h-6 stroke-[#14213d] stroke-1"
            onClick={() => setIsSearchClicked(!isSearchClicked)}
          />
          {isLargeScreen && (
            <div>
              <span className="">Register</span>
            </div>
          )}
          <div className="relative p-3 bg-[#e5e5e5] rounded-[50%]">
            <FiHeart className="w-6 h-6 stroke-[#14213d]" />
            <span className="absolute text-[12px] top-1 right-1 z-10 bg-[#fca311] text-white px-[5px]  rounded-[50%]">
              0
            </span>
          </div>
          <div className="relative p-3 bg-[#e5e5e5] rounded-[50%]">
            <AiOutlineShoppingCart className="w-6 h-6" />
            <span className="absolute text-[12px] top-1 right-1 z-10 bg-[#fca311] text-white px-[5px]  rounded-[50%]">
              0
            </span>
          </div>
          <button className="p-3 bg-[#e5e5e5]">
            {isHamburgerBtnClicked ? (
              <IoCloseOutline className="w-6 h-6" onClick={() => setIsHamburgerBtnClicked(false)} />
            ) : (
              <GiHamburgerMenu className="w-6 h-6" onClick={() => setIsHamburgerBtnClicked(true)} />
            )}
          </button>
        </div>
      </nav>
      {isSearchClicked && (
        <div className="w-[100%] absolute top-[100%] left-0 bottom-auto searchBar h-[45px] bg-[#e5e5e5] text-[#000000]  z-50  shadow-sm shadow-[#14213d] flex">
          <input
            className="w-[85%] text-[18px] pl-6 h-[100%] bg-[#e5e5e5] border-none outline-none"
            type="search"
            name=""
            placeholder="search ..."
            id=""
          />
          <button
            className="bg-[#fca311] w-[15%] h-[100%] flex justify-center items-center"
            onClick={(e) => handleSearching(e)}
          >
            <BiSearch className="w-6 h-6" fill="#14213D" />
          </button>
        </div>
      )}
      {isHamburgerBtnClicked && <NavTabs />}
    </header>
  );
};
