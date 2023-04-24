import { setGlobalState } from "@/redux/global-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button, Layout } from "antd";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

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
    <Header className="bg-inherit">
      <div
        className="fixed inset-x-0 z-30 flex justify-between items-center px-4"
        // style={{ backgroundColor: "#BE984E4D" }}
        style={{ backgroundColor: "rgba(190, 152, 78, 0.3)" }}
        // style={{ backgroundColor: "rgb(255, 198, 57)" }}
      >
        abc
        <Button
          onClick={onChangeTheme}
          type="ghost"
          icon={
            theme === "dark" ? <FaRegMoon size={20} /> : <BsSun size={20} />
          }
        />
      </div>
    </Header>
  );
};

export default HeaderComponent;
