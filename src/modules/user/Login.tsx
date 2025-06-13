import { useState } from 'react';
import { Input, Button, Form, Toast } from 'antd-mobile';
import './Login.css';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const onFinish = () => {
    setLoading(true);
    // TODO: 调用登录API
    setTimeout(() => {
      setLoading(false);
      Toast.show({ content: '登录成功', position: 'bottom' });
    }, 1000);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Sign in</h2>
      <Form
        onFinish={onFinish}
        footer={
          <Button block color="primary" size="large" loading={loading} type="submit">
            登录
          </Button>
        }
      >
        <Form.Item name="username" rules={[{ required: true, message: '请输入教师账号' }]}>
          <Input placeholder="教师账号" clearable />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input placeholder="密码" type="password" clearable />
        </Form.Item>
      </Form>
    </div>
  );
}