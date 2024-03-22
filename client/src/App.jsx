import { useState, createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {useCookies} from 'react-cookie'
import TodoBoard from "./pages/TodoBoardPage";
import Auth from "./components/Auth";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";

export const ThemeContext = createContext();

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <TodoBoard /> },
    { path: "/signup", element: <Auth /> },
  ]);

  const [darkMode, setDarkMode] = useState(false);

  function toggleMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, toggleMode }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>{" "}
    </>
  );
}

export default App;
