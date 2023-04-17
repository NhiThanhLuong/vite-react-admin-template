import React from "react";
import { Layout, Menu, theme } from "antd";
import { menuList } from "@/data/constant/navs";
// import menuNavs from "@/data/constant/navs";

const { Sider } = Layout;

// const items = [
//   {
//     key: "123",
//     title: "123",
//     label: "1234",
//     children: [
//       {
//         key: "nhi_child",
//         title: "nhi_child",
//         label: "nhi_child2",
//       },
//     ],
//   },
//   {
//     key: "asdf",
//     title: "asdf",
//     label: "asdf2",
//   },
// ];
// console.log(menuList);

const onSelect = ({ item, key, keyPath, selectedKeys, domEvent }: any) => {
  console.log(item, key, keyPath, selectedKeys, domEvent);
};

const MenuComponent = () => {
  const token = theme.useToken();

  return (
    <Sider style={{ backgroundColor: token.token.colorBgContainer }}>
      <Menu
        mode="inline"
        items={menuList}
        theme="light"
        // openKeys={["/home"]}
        selectedKeys={["/home", "/my-home"]}
        onSelect={onSelect}
      />
    </Sider>
  );
};

export default MenuComponent;
