import "./App.css";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import TodoBoard from "./pages/TodoBoard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <TodoBoard /> },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
  ]);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <BrowserRouter router={router} />
    </>
  );
}

export default App;
