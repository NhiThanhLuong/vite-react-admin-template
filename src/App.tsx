import { ConfigProvider, theme as ThemeConfig } from "antd";
import "./App.css";
import { setGlobalState } from "@/redux/global-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Routes from "./routes";
import { useCallback, useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.global.theme);

  const setTheme = useCallback(
    (dark = true) => {
      dispatch(
        setGlobalState({
          theme: dark ? "dark" : "light",
        })
      );
    },
    [dispatch]
  );

  const matchMode = useCallback(
    (e: MediaQueryListEvent) => {
      setTheme(e.matches);
    },
    [setTheme]
  );

  useEffect(() => {
    setTheme(theme === "dark");

    // watch system theme change
    if (!localStorage.getItem("theme")) {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");

      mql.addEventListener("change", matchMode);
    }
  }, [matchMode, setTheme, theme]);

  return (
    <div className="App">
      <ConfigProvider
        // locale={getAntdLocale()}
        componentSize="middle"
        theme={{
          token: { colorPrimary: "#13c2c2" },
          algorithm:
            theme === "dark"
              ? ThemeConfig.darkAlgorithm
              : ThemeConfig.defaultAlgorithm,
        }}
      >
        <Routes />
      </ConfigProvider>
    </div>
  );
}

export default App;
