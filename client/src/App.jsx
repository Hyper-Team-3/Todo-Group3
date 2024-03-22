import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TodoBoard from "./pages/TodoBoardPage";
import Auth from "./components/Auth/Auth";



function App() {
  const router = createBrowserRouter([
    { path: "/", element: <TodoBoard /> },
    { path: "/signup", element: <Auth /> },
 
  ]);
  return (
    <>
      <RouterProvider router={router} />
  
    </>
  );
}

export default App;
