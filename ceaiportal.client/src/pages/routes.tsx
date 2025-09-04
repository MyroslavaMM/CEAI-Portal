import { lazy } from "react";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import TwoByTwoStewardship from "./tools/two-by-two-stewardship";
const Agents = lazy(() => import("./agents/index"));
const pagesRoutes = [
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Agents />,
      },
      {
        path: "/agents/:id",
        element: <Agents />,
      },
      {
        path: "/agents/create",
        element: <Agents />,
      },
      {
        path: "/tools/:id",
        element: <TwoByTwoStewardship />,
      },
    ],
  },
];

export const routes = () => {
  return pagesRoutes;
};
