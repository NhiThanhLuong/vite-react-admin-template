import { Layout } from "antd";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header>
      <div
        className="fixed inset-x-0 z-30 flex justify-between items-center px-4"
        style={{ backgroundColor: "#ffc639" }}
      >
        abc
      </div>
    </Header>
  );
};

export default HeaderComponent;
