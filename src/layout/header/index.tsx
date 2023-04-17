import { setGlobalState } from "@/redux/global-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button, Layout } from "antd";

const { Header } = Layout;

const HeaderComponent = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.global.theme);

  const onChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    dispatch(
      setGlobalState({
        theme: newTheme,
      })
    );
  };

  return (
    <Header>
      <div
        className="fixed inset-x-0 z-30 flex justify-between items-center px-4"
        style={{ backgroundColor: "#ffc639" }}
      >
        abc
        <Button onClick={onChangeTheme}>Switch mode</Button>
      </div>
    </Header>
  );
};

export default HeaderComponent;
