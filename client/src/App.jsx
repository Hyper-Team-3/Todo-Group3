import {useCookies} from 'react-cookie'
import TodoBoard from "./pages/TodoBoardPage";
import Auth from "./components/Auth/Auth";
import { useState, useEffect } from "react";
import TodoBoardPage from './pages/TodoBoardPage';

function App() {

  const [tasks, setTasks] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const userEmail = cookies.Email
  const authToken = cookies.AuthToken

  async function getData(){
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`)
      const json = await response.json()
      console.log(json);
      setTasks(json)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    if(authToken){
      getData()
    }
  }, [])

  //Sort by date
  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date))

  console.log(sortedTasks, 'sort')
console.log(authToken, "authToken")
  return (
    <div>
      {!authToken && <Auth />}
      {authToken && <TodoBoardPage sortedTasks={sortedTasks}/>}
    </div>
  );
}

export default App;
