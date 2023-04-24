import { Breadcrumb } from 'antd';
import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { DASHBOARD_PATH } from '@/data/constant';
import { BreadcrumsType } from '@/ts/types';

const defaultRoutes = { url: DASHBOARD_PATH, title: 'Trang chủ' };

function itemRender(route: any, _: any, routes: any) {
  const isLast = routes.indexOf(route) === routes.length - 1;
  return isLast ? (
    <span>{route.title}</span>
  ) : (
    <Link to={route.url}>{route.title}</Link>
  );
}

type Props = {
  routes?: BreadcrumsType[];
};

const CustomBreadcrumb: FC<Props> = ({ routes = [] }) => {
  const currentRoutes = useMemo(() => [defaultRoutes, ...routes], [routes]);

  return (
    <Breadcrumb
      style={{ marginBottom: currentRoutes.length > 0 ? 10 : 0 }}
      items={currentRoutes}
      itemRender={itemRender}
    />
  );
};

export default CustomBreadcrumb;
