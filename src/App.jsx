import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MainLayout from "./layouts/MainLayout";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleProducts from "./pages/SingleProducts";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/singleProduct/:id",
          element: <SingleProducts/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
