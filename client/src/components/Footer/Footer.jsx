import { ThemeContext } from "../../App";
import { useContext } from "react";

const Footer = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <footer className={`flex flex-col justify-center items-center p-5 ${darkMode ? "bg-[#1f1f1f]" : "bg-white"} ${darkMode ? "text-[#a7a7a7]" : "text-[#4d4d4d]"} shadow-lg transition-colors duration-500`}>
            <p>Alexander - Jaemin - Simon - Heidi - Carmela</p>
            <p className="text-[0.8rem]">© Hyper Island Project 2024 </p>
        </footer>
    )
}

export default Footer;