/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDelete, FiMoon, FiPlus, FiSun } from "react-icons/fi";
import { BiBell, BiChevronDown, BiSearch, BiMenu } from "react-icons/bi";
import { useUiContext } from "../../contexts/UiContext";
import { actioTypes } from "../../reducers/uiReducer";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { candidateLinks, employerLinks, links } from "../../data/links";
import Notifications from "./Notifications";
import Dropdown from "./Dropdown";
import ActiveLink from "./ActiveLink";
import useDarkMode from "../../helpers/useDarkMode";
import { imageUrl, userImage, userTypes } from "../../constants";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [userType, setUserType] = useState("Employer");
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [mode, toggleMode] = useDarkMode("JobIt-Next-theme-mode");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const router = useRouter();

  const { dispatch, isSidebarOpen } = useUiContext();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUser(prevUser => {
        const userData = JSON.parse(storedUserData);
        // Here you can perform any additional logic before updating the state
        return userData;
      });
      // loginAndPersistUser(JSON.parse(storedUserData));
    }
  }, []);

  const handleDropdown = () => {
    dispatch({ type: actioTypes.toggleDropdown });
  };

  const handleClose = (e) => {
    if (!e.target.classList.contains("dropdown-btn")) {
      dispatch({ type: actioTypes.closeDropdown });
    }
    if (!e.target.classList.contains("notification-btn")) {
      dispatch({ type: actioTypes.closeNotifications });
    }
  };

  const handleNotifications = () => {
    dispatch({ type: actioTypes.toggleNotifications });
  };

  const handleCloseSidebar = (e) => {
    if (e.target.classList.contains("mobile-modal"))
      dispatch({ type: actioTypes.closeSidebar });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) {
      setSearch("");
      router.push(`/employer/search/${search}`);
    }
  };

  useEffect(() => {
    setUserType(user?.userType);
  }, [userType]);

  const logoUrl = imageUrl.logoDoubleColor;

  return (
    <div
      className="navbar fixed w-full z-10 top-0 left-0 px-[2%]  md:px-[6%] flex-center-between py-[0.5rem] bg-white dark:bg-dark-card border-b dark:border-slate-800"
      onClick={handleClose}
    >
      <Link
        href={
          userType == userTypes.candidate
            ? "/candidateDashboard"
            : "/employerDashboard"
        }
      >
        <div className="hidden md:block flex-shrink-0">
          <div className="image-wrapper">
            <Image
              src={logoUrl}
              alt="logo"
              layout="fill"
              className="!object-contain !h-10 !w-20 !relative bg-white rounded"
            />
          </div>
        </div>
      </Link>
      <Link
        href={
          userType == userTypes.candidate
            ? "/candidateDashboard"
            : "/employerDashboard"
        }
      >
        <div className="md:hidden">
          <Image src={logoUrl} alt="logo" width={32} height={32} />
        </div>
      </Link>

      {/*-------------------------------------- Desktop Menu------------------------------------- */}
      {userType == userTypes.candidate && (
        <DesktopMenu links={candidateLinks} />
      )}
      {userType == userTypes.employer && <DesktopMenu links={employerLinks} />}

      {/*---------------------------------------- Mobile Menu------------------------------------- */}
      <div
        className={`mobile-modal fixed w-screen h-screen top-0 left-0 bg-black/50 z-10 opacity-0 pointer-events-none transition-a ${
          isSidebarOpen && "open"
        }`}
        onClick={handleCloseSidebar}
      >
        <ul
          className={`mobile-dialog absolute flex flex-col space-y-4 p-3 bg-white dark:bg-dark-card h-screen max-w-[300px] w-full -translate-x-[500px] transition-a ${
            isSidebarOpen && "open"
          }`}
        >
          <div className="flex-center-between border-b dark:border-slate-800">
            <p className="uppercase">menu</p>
            <div
              className="icon-box md:hidden"
              onClick={() => dispatch({ type: actioTypes.closeSidebar })}
            >
              <FiDelete />
            </div>
          </div>
          {userType == userTypes.candidate && (
            <MobileMenu links={candidateLinks} />
          )}
          {userType == userTypes.employer && (
            <MobileMenu links={employerLinks} />
          )}
        </ul>
      </div>

      <div className="flex-align-center space-x-2">
        {/*-------------------------------- Post Job------------------------------------------------------- */}
        {userType == userTypes.employer && (
          <Link href="/post">
            <div
              className={`btn !p-2 md:!px-4 btn-primary-light flex-align-center gap-x-2 ${
                showSearchBar && "hidden"
              }`}
            >
              <FiPlus /> <span className="hidden md:block">post job</span>
            </div>
          </Link>
        )}

        {/*---------------------- Notifications toggle------------------------------------------------ */}
        <div
          className={`icon-box !opacity-100 relative notification-btn ${
            showSearchBar && "!hidden"
          }`}
          onClick={handleNotifications}
        >
          <motion.div className="relative" whileTap={{ scale: 0.5 }}>
            <BiBell className="notification-btn text-muted" />
            <div className="absolute w-2 h-2 bg-primary top-0 right-0 rounded-full notification-btn"></div>
          </motion.div>
          <Notifications />
        </div>

        {/*----------------------------- search Bar----------------------------------------------------- */}
        <form onSubmit={handleSearch}>
          <div
            className={`flex-align-center relative h-9 w-9 transition-a  border-slate-300 dark:border-hover-color rounded-full ${
              showSearchBar && "!w-[150px] md:!w-[200px] border"
            }`}
          >
            <input
              type="search"
              className={`outline-none border-none h-0 w-0 bg-transparent ${
                showSearchBar && "!w-full !h-full px-4"
              }`}
              placeholder="search by title or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span
              className="w-9 h-9 grid place-items-center hover:bg-slate-100 sm:cursor-pointer dark:hover:bg-hover-color rounded-full flex-shrink-0"
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
              <BiSearch className="text-muted" />
            </span>
          </div>
        </form>

        {/*----------------------------- Dark mode toggle-------------------------------------------------- */}
        <motion.div
          className="icon-box bg-slate-100 dark:bg-[#2b2b35]"
          onClick={toggleMode}
          whileTap={{ scale: 0.5 }}
        >
          {mode === "dark" ? <FiSun /> : <FiMoon />}
        </motion.div>
        <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-700"></div>

        {/*------------------------------- Profile Dropdown toggle-------------------------------------------- */}
        <div
          className="dropdown-btn flex-align-center space-x-1  md:pl-4 flex-shrink-0 relative"
          onClick={handleDropdown}
        >
          <motion.img
            src={user?.avatar ? user.avatar : userImage.imageUrl}
            alt="User Image"
            className="w-8 h-8 rounded-full sm:cursor-pointer dropdown-btn"
            whileTap={{ scale: 0.5 }}
          />
          <BiChevronDown className="dropdown-btn" />
          <Dropdown />
        </div>

        {/*------------------------------- Mobile Menu Toogle------------------------- */}
        <motion.div
          className="icon-box md:hidden"
          onClick={() => dispatch({ type: actioTypes.openSidebar })}
          whileTap={{ scale: 0.5 }}
        >
          <BiMenu />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
