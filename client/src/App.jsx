import { useState, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import TodoBoard from "./pages/TodoBoardPage";
import Auth from "./components/Auth";

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userEmail = cookies.Email;
  const authToken = cookies.AuthToken;

  async function getData(){
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVERURL}/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
      console.log("GOT DATA")
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    if (authToken) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <ThemeContext.Provider
        value={{ darkMode, toggleMode, userEmail, tasks, getData }}
      >
        {!authToken && <Auth />}
        {authToken && <TodoBoard />}
      </ThemeContext.Provider>
    </>
  );
}

export default App;
