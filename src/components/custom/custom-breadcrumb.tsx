import { Breadcrumb } from "antd";
import { useMemo } from "react";
import { Link } from "react-router-dom";

import { DASHBOARD_PATH } from "@/data/constant";

const defaultRoutes = { url: DASHBOARD_PATH, title: "Trang chủ" };

function itemRender(route: any, _: any, routes: any) {
  const isLast = routes.indexOf(route) === routes.length - 1;
  return isLast ? (
    <span>{route.title}</span>
  ) : (
    <Link to={route.url}>{route.title}</Link>
  );
}

export function CustomBreadcrumb({ routes = [] }) {
  const currentRoutes = useMemo(() => [defaultRoutes, ...routes], [routes]);

  return (
    <Breadcrumb
      style={{ marginBottom: currentRoutes.length > 0 ? 10 : 0 }}
      items={currentRoutes}
      itemRender={itemRender}
    />
  );
}
