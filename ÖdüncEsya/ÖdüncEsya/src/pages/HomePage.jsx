import React, { useEffect, useState } from 'react';
import { List, Card } from 'antd';
import '../css/HomePage.css';

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  return (
    <div className="page-container">
      <div className="item-list">
        <h1>Eşyalar</h1>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={items}
          renderItem={item => (
            <List.Item>
              <Card title={item.name}>
                {item.description}
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default HomePage;
