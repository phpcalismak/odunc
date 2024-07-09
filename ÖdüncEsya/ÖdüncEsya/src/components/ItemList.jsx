import React, { useEffect, useState } from 'react';
import { List, Button } from 'antd';
import '../css/ItemList.css';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    setItems(updatedItems);
  };

  return (
    <div className="page-container">
      <div className="item-list">
        <h1>Eşyalar</h1>
        <List
          itemLayout="horizontal"
          dataSource={items}
          renderItem={(item, index) => (
            <List.Item
              actions={[<Button onClick={() => deleteItem(index)}>Sil</Button>]}
            >
              <List.Item.Meta
                title={item.name}
                description={item.description}
              />
              <div>{item.duration}</div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ItemList;
