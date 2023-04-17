import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./header";
import MenuComponent from "./menu";

const { Content } = Layout;

const LayoutComponent = () => {
  return (
    <Layout className="min-h-screen">
      <HeaderComponent />
      {/* <MenuComponent /> */}

      <Layout>
        <MenuComponent />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
