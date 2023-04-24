import { menuList } from "@/data/constant/navs";
import { getFirstPathCode } from "@/utils";
import { Layout, Menu, theme } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const MenuComponent = () => {
  const token = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();
  const [openKey, setOpenkey] = useState<string>();
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);

  useEffect(() => {
    const code = getFirstPathCode(location.pathname);

    setOpenkey(code);
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const onMenuClick = (path: string) => {
    setSelectedKey(path);
    navigate(path);
  };

  const onOpenChange = (keys: string[]) => {
    const key = keys.pop();
    setOpenkey(key as string);
  };

  return (
    <Sider
      collapsible
      collapsedWidth={80}
      style={{ backgroundColor: token.token.colorBgContainer }}
    >
      <Menu
        mode="inline"
        items={menuList}
        selectedKeys={[selectedKey]}
        openKeys={openKey ? [openKey] : []}
        onOpenChange={onOpenChange}
        onSelect={(k) => onMenuClick(k.key)}
      />
    </Sider>
  );
};

export default MenuComponent;
