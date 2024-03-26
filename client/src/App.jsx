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

  const getData = async () => {
    try {
      // richiesta fetch per effettuare la richiesta al server locale
      const response = await fetch(`${import.meta.env.VITE_SERVERURL}/todos`, {
        headers: {
          "X-Token": cookies.AuthToken,
        },
      });
      //se la risposta non è 200, lanciamo un errore
      if (!response.ok) {
        throw new Error("Unauthorized");
      }
      //json.() serve a convertire la risposta in un oggetto Javascript
      const json = await response.json();
      //per aggiornare lo stato con i dati ricevuti
      setTasks(json);
    } catch (error) {
      console.error(error);
    }
  };

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
