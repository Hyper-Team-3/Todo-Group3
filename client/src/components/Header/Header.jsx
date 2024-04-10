import { useContext } from "react";
import { ThemeContext } from "../../App";
import { useCookies } from 'react-cookie';
import SliderToggle from "../ToggleDark";

const Header = () => {
  const { darkMode } = useContext(ThemeContext);
  const [cookies, setCookie, removeCookie] = useCookies(['Email']);

  const userEmail = cookies.Email || ''; 
  
  return (
    <header className={`flex justify-between items-center px-6 py-6  shadow-lg transition-colors duration-500 ${darkMode ? "bg-[#1f1f1f]" : "bg-[#fff]" }`}>
      
    <p className={`text-[1rem] font-bold ${darkMode ? "text-white" : "text-black"}`}>
      {userEmail ? userEmail : 'Guest'}
    </p>
  <div className="border-l-[1px] border-l-[#8d8d8d] pl-4">
  <SliderToggle />
  </div>
</header>
  );
};

export default Header;