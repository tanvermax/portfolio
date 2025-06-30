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

  },
]);
