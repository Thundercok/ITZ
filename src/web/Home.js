// Home.js
import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header />
      <div className='greeting'>
        <h1>IT-Zone xin chào!</h1>
        <p>Bạn cần giúp đỡ gì ?</p>
        <button>Nhận sự hỗ trợ ngay!</button>
      </div>
    </div>
  );
}

export default Home;
