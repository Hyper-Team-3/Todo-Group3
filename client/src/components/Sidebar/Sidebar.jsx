import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import { useCookies } from 'react-cookie';
import styles from "./Sidebar.module.css";
import Header from "../Header";

const Sidebar = () => {
  const { darkMode, toggleMode } = useContext(ThemeContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['Email']);


  function SignOut() {
    console.log('sign out');
    removeCookie('Email');
    removeCookie('AuthToken');
    window.location.reload();
  }

  return (
    <aside className={` ${darkMode ? " bg-[#0f061c] " : "bg-[#1f0045]"} flex px-4 md:px-0 md:flex-col justify-between items-center py-4 transition-colors duration-500`}>
      <h1 className={darkMode ? styles.logoDarkM : styles.logo}>TICK<span className="text-[#1cacb4] text-[2rem]">.</span></h1>
      <div className="hidden md:block">
        <button className={"rounded-full bg-[#6a25b8] px-4 py-1 text-white text-[0.8rem]"} onClick={SignOut}>Sign Out</button>
      </div>
      <div className="text-white md:hidden">
        <button onClick={() => setShowMobileMenu(true)}>MENU</button>
      </div>

      {showMobileMenu && (
        <div className={`fixed w-lvw bottom-0 top-0 z-[50] left-0 md:hidden flex flex-col transition-all duration-500 ${darkMode ? "bg-[#1F1F1F]" : "bg-white"}`}>
          <div className={`flex justify-between p-4 transition-all duration-500 ${darkMode ? "bg-[#1f1f1f]" : "bg-[#1f0045]"} `}>
          <h1 className="text-3xl font-semibold font-poppins text-white">TICK<span className="text-[#1cacb4] text-[2rem]">.</span></h1>
          <button onClick={() => setShowMobileMenu(false)} className="text-white block">CLOSE</button>
          </div>
          <div className="flex flex-col justify-between">
            <Header />
          </div>
          <div className={`flex flex-col transition-all duration-500 ${darkMode ? "bg-[#1f1f1f]" : "bg-white"} flex-1 justify-end`}>

          <button className={"bg-[#6a25b8] px-4 py-4 text-white font-bold text-[1rem]"} onClick={SignOut}>SIGN OUT</button>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;