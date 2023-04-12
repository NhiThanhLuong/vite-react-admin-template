import { FC, lazy } from "react";
import { RouteObject, useRoutes } from "react-router-dom";

const Home = lazy(() => import("../pages/home"));

const routes: RouteObject[] = [
  {
    path: "home",
    element: <Home />,
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
