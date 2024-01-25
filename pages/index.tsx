import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {/* Example image card */}
      <Card
        hoverable
        style={{ width: 240, margin: 10 }}
        cover={<img alt="example" src="https://www.paxetv.com/news/photo/201911/81641_53676_5257.jpg" />}
      >
        <Meta title="Tech Image" description="This is an example using Ant Design's Card component." />
      </Card>

      {/* Add more cards as needed */}
    </div>
  );
};

export default Home;