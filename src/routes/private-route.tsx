import { LOGIN_PATH } from '@/data/constant/path';
import { useAppSelector } from '@/redux/hooks';
import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: ReactElement;
};

const PrivateRoute = ({ children }: Props) => {
  const token = useAppSelector((state) => state.auth.token);

  return token ? children : <Navigate to={LOGIN_PATH} replace />;
};

export default PrivateRoute;
