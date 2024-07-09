import React, { useState, useEffect } from 'react';
import { List, Input, Button, Form } from 'antd';
import '../css/Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const onFinish = (values) => {
    console.log('Kart Bilgileri:', values);
    alert('Ödünç Alma İşlemi Tamamlandı');
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <div className="page-container">
      <div className="cart-container">
        <h1>Sepet</h1>
        <List
          itemLayout="horizontal"
          dataSource={cart}
          renderItem={(item, index) => (
            <List.Item
              actions={[<Button onClick={() => removeFromCart(index)}>Kaldır</Button>]}
            >
              <List.Item.Meta
                title={item.name}
                description={item.description}
              />
              <div>{item.duration}</div>
            </List.Item>
          )}
        />
        <h2>Kart Bilgileri</h2>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="cardNumber" label="Kart Numarası" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="expiryDate" label="Son Kullanma Tarihi" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="cvc" label="CVC" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>Ödünç Al</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Cart;
