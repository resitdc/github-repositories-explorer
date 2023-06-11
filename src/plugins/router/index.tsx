import type { RouteObject } from "react-router";

// #region - IMPORTING PAGES
import Error from "pages/Error";
import Home from "pages/Home";
// #endregion - IMPORTING PAGES

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
