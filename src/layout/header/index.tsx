import { setGlobalState } from '@/redux/global-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Button, Layout, Typography } from 'antd';
import { FaRegMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { DASHBOARD_PATH } from '@/data/constant';

const { Header } = Layout;

const HeaderComponent = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.global.theme);

  const onChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    dispatch(
      setGlobalState({
        theme: newTheme,
      })
    );
  };

  return (
    <Header className="bg-inherit">
      <div
        className="fixed h-16 inset-x-0 z-30 flex justify-between items-center px-4"
        // style={{ backgroundColor: "#BE984E4D" }}
        style={{ backgroundColor: 'rgba(190, 152, 78, 0.3)' }}
        // style={{ backgroundColor: "rgb(255, 198, 57)" }}
      >
        <Link to={DASHBOARD_PATH} className="flex items-center">
          <img className="h-14 mr-8" src="/logo.svg" alt="Brand logo" />
          <Typography className="text-lg font-bold">ADMIN PANEL</Typography>
        </Link>
        <Button
          onClick={onChangeTheme}
          type="ghost"
          icon={
            theme === 'dark' ? <FaRegMoon size={20} /> : <BsSun size={20} />
          }
        />
      </div>
    </Header>
  );
};

export default HeaderComponent;
