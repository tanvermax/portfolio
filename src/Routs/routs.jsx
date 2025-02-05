import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Components/MainLayout/Mainlayout";
import Aboutme from "../Components/Pages/Aboutme";
import Service from "../Components/Pages/Service";
import Skilss from "../Components/Pages/Skilss";
import Portfolio from "../Components/Pages/Portfolio";
import Blog from "../Components/Pages/Blog";
import Homee from "../Components/Pages/Homee";
import Contact from "../Components/Pages/Contact";

export const routs = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Homee></Homee>,
      },
      {
        path: "aboutme",
        element: <Aboutme></Aboutme>,
      },
      {
        path: "service",
        element: <Service></Service>,
      },
      {
        path: "skill",
        element: <Skilss></Skilss>,
      },
      {
        path: "portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path:"contact",
        element:<Contact></Contact>
      }
    ],
  },
]);
