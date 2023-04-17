import PrivateRoute from "@/routes/private-route";
import { lazy } from "react";
import { Tnavs, Troutes } from "./type-navs";

const Home = lazy(() => import("@/pages/home"));
const MyHome = lazy(() => import("@/pages/home/my-home"));

const navs: Tnavs[] = [
  {
    key: "/home",
    label: "Home",
    children: [
      {
        key: "/my-home",
        label: "My Home",
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

const getShowNavigation = (nav: Tnavs): Tnavs | undefined => {
  if (nav.hidden === true) return;
  if (nav.children) {
    const arr: Tnavs[] = [];
    for (const n of nav.children) {
      const formatN = getShowNavigation(n);
      if (formatN) arr.push(formatN);
    }
    nav.children = arr.length > 0 ? arr : undefined;
  }

  return {
    key: nav.key,
    label: nav.label,
    children: nav.children,
    element: nav.element,
  };
};

const menuList: Tnavs[] = [];
const routeList: Troutes[] = [];

for (const nav of navs) {
  if (getShowNavigation(nav)) menuList.push(getShowNavigation(nav) as Tnavs);
  getRoutes(routeList, nav);
}

export { menuList, routeList };
