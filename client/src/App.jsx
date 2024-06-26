import { useState, createContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import TodoBoard from "./pages/TodoBoardPage";
import Auth from "./components/Auth";

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState();
  const [tasks, setTasks] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const userEmail = cookies.Email;
  const authToken = cookies.AuthToken;

  async function getData() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVERURL}/todos/${userEmail}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json", "authorization": `Bearer ${cookies.AuthToken}`
          }
        }
      )
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    if (authToken) {
      getData();
    }
  }, []);

  function toggleMode() {
    setDarkMode(prevDarkMode => !prevDarkMode);
  }
  
  useEffect(() => {
    const getDarkMode = localStorage.getItem('darkMode');
    if (getDarkMode === 'true') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, [])
  
  useEffect(() => {
    if (darkMode !== undefined) {
      localStorage.setItem('darkMode', darkMode);
    }
  }, [darkMode]);
  

  return (
    <>
      <ThemeContext.Provider
        value={{ darkMode, setDarkMode, toggleMode, userEmail, tasks, getData }}
      >
        {!authToken && <Auth />}
        {authToken && <TodoBoard />}
      </ThemeContext.Provider>
    </>
  );
}

export default App;
