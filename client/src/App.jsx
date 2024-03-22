import { useState, createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoBoard from "./pages/TodoBoardPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login"; //

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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
