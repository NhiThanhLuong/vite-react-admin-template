import { routeList } from "@/data/constant/navs";
import { LOGIN_PATH } from "@/data/constant/path";
import Login from "@/features/auth/login";
import LayoutComponent from "@/layout";
import { FC, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import PrivateRoute from "./private-route";

const NotFound = lazy(() => import("@/pages/not-found"));

const routes = [
  {
    path: LOGIN_PATH,
    element: <Login />,
  },
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        path: "",
        element: <Navigate to="dashboard" />,
      },
      ...routeList,
      {
        path: "*",
        element: (
          <PrivateRoute>
            <NotFound />
          </PrivateRoute>
        ),
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
