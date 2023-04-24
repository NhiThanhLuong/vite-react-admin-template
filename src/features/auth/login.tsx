import { login } from '@/redux/auth-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { Button, Card, Checkbox, Form, Input, Space } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReadLocalStorage } from 'usehooks-ts';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token);
  const tokenLocal = useReadLocalStorage('token');

  useEffect(() => {
    if (token || tokenLocal) {
      navigate('/docs', { replace: true });
    }
  }, [navigate, token, tokenLocal]);

  const handleClick = () => {
    dispatch(login({ token: '123' }));
  };

  return (
    <div
      className="relative min-h-screen min-w-screen 
      flex items-center justify-center 
      bg-no-repeat bg-center bg-cover"
      style={{
        // backgroundImage: `url('/login_background.png')`,
        backgroundColor: '#95de64',
      }}
    >
      <Card
        className="row flex-column align-items-center"
        style={{
          width: 'min(100%, 500px)',
          borderRadius: '8px',
        }}
      >
        <Form
          size="large"
          // initialValues={{ email, password, is_save }}
          // disabled={isSubmitting}
          // onFinish={onFinish}
        >
          <div
            style={{
              textAlign: 'center',
              marginTop: 24,
              marginBottom: 24,
            }}
          >
            <h1 className="text-yellow-500 text-5xl font-black login-title">
              Poca Admin Panel
            </h1>
          </div>
          <Space direction="vertical" size={16} className="w-full">
            <Form.Item
              name="email"
              // rules={validator(["required", "email", "noWhiteSpace"])}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              // rules={validator(["required", "noWhiteSpace"]).concat(
              //   validator("minAndMax")(8, 16)
              // )}
            >
              <Input.Password placeholder="Mật khẩu" />
            </Form.Item>

            <Form.Item name="is_save" valuePropName="checked">
              <Checkbox>
                <span className="text-yellow-500">Nhớ mật khẩu</span>
              </Checkbox>
            </Form.Item>
          </Space>
          <Form.Item className="text-center">
            <Button
              className="w-full flex align-middle justify-center bg-yellow-500 hover:!bg-yellow-400"
              htmlType="submit"
              type="primary"
              // loading={isSubmitting}
            >
              <span className="text-black font-bold text-xl">Đăng nhập</span>
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Button onClick={handleClick}>Pass token</Button>
    </div>
  );
};

export default Login;
