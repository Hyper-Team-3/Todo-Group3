import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoBoard from "./pages/TodoBoardPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login"; //

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <TodoBoard /> },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> },
  ]);
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
