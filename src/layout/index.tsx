import { Layout } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from './header';
import MenuComponent from './menu';

const { Content } = Layout;

const LayoutComponent = () => {
  return (
    <Layout className="min-h-screen">
      <HeaderComponent />
      <Layout>
        <MenuComponent />
        <Content className="p-4">
          <Suspense fallback="Loading...">
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
