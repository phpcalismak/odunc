import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import '../css/Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
      form.setFieldsValue(storedUser);
    }
  }, [form]);

  const onFinish = (values) => {
    localStorage.setItem('user', JSON.stringify(values));
    setUser(values);
    alert('Profil bilgileri güncellendi');
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h2 className="page-title">Profil Bilgileri</h2>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Şifre" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="phone" label="Telefon Numarası" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="address" label="Adres" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>Güncelle</Button>
          </Form.Item>
        </Form>
        <Button type="primary" onClick={handleLogout} block>Çıkış Yap</Button>
      </div>
    </div>
  );
};

export default Profile;
