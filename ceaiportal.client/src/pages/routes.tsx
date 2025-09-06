import { lazy } from "react";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
const Agents = lazy(() => import("./agents/index"));
const TwoByTwoStewardship = lazy(
  () => import("./tools/two-by-two-stewardship/index")
);
const Dashboard = lazy(() => import("./dashboard/index"));

const pagesRoutes = [
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
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
