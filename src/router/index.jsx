import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import NotFound from "../pages/notFound";
import About from "../pages/About";
import Profile from "../pages/Profile";


export const router = createBrowserRouter([
  
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/profile",
        element: <Profile />
      },
 
    
  
]);
