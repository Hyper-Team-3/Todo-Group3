import { useState, createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoBoard from "./pages/TodoBoardPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

export const ThemeContext = createContext();

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <TodoBoard /> },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
  ]);

  const [darkMode, setDarkMode] = useState(false);

  function toggleMode() {
    setDarkMode(!darkMode);
    console.log("mmm", darkMode);
  }

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, toggleMode }}>
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
