import { lazy } from "react";
import _ from "lodash";

import PrivateRoute from "@/routes/private-route";
import { AiOutlineDashboard } from "react-icons/ai";
import { Tnavs, Troutes } from "./type-navs";
import { DASHBOARD_PATH } from "./path";
import { capitalizeFirstLetter } from "@/utils";

const Dashboard = lazy(() => import("@/pages/dashboard"));
const Home = lazy(() => import("@/pages/home"));
const MyHome = lazy(() => import("@/pages/home/my-home"));

const navs: Tnavs[] = [
  {
    key: DASHBOARD_PATH,
    label: "dashboard",
    element: <Dashboard />,
  },
  {
    key: "/home",
    label: "Home",
    icon: <AiOutlineDashboard />,
    children: [
      {
        key: "/my-home",
        label: "My Home",
        element: <MyHome />,
      },
      {
        key: "/my-home1",
        label: "My Home1",
        element: <Home />,
      },
      {
        key: "/my-home2",
        label: "My Home2",
        element: <Home />,
      },
      {
        key: "/my-home3",
        label: "My Home3",
        element: <Home />,
      },
      {
        key: "/hide-home",
        label: "Hide Home",
        element: <MyHome />,
        hidden: true,
      },
    ],
  },
  {
    key: "/docs",
    label: "Home",
    element: <Home />,
    hidden: true,
    children: [
      {
        key: "/my-docs",
        label: "My Home",
        element: <MyHome />,
      },
      {
        key: "/hide-docs",
        label: "Hide Home",
        element: <MyHome />,
      },
    ],
  },
  {
    key: "/docs1",
    label: "Home1",
    element: <Home />,
  },
];

const getRoutes = (arr: Troutes[], nav: Tnavs, basePath = "") => {
  if (nav.children) {
    for (const n of nav.children) {
      getRoutes(arr, n, nav.key);
    }
  }
  if (!nav.element) return;

  arr.push({
    path: basePath + nav.key,
    element: nav.element && <PrivateRoute>{nav.element}</PrivateRoute>,
  });
  return arr;
};

const getShowNavigation = (nav: Tnavs, basePath = ""): Tnavs | undefined => {
  if (nav.hidden === true) return;
  if (nav.children) {
    const arr: Tnavs[] = [];
    for (const n of nav.children) {
      const formatN = getShowNavigation(n, nav.key);
      if (formatN) arr.push(formatN);
    }

    nav.children = arr.length > 0 ? arr : undefined;
  }

  return {
    key: basePath + nav.key,
    icon: nav.icon,
    title: capitalizeFirstLetter(nav.label),
    label: capitalizeFirstLetter(nav.label),
    children: nav.children,
    element: nav.element,
  };
};

const menuList: Tnavs[] = [];
const routeList: Troutes[] = [];

for (const nav of navs) {
  const nav1 = _.cloneDeep(nav);
  const n = getShowNavigation(nav1);
  n && menuList.push(n as Tnavs);

  const nav2 = _.cloneDeep(nav);
  getRoutes(routeList, nav2);
}

export { menuList, routeList };
