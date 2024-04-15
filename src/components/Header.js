import React from 'react';

function Header() {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <a href='/'>Trang chủ</a>
          </li>
          <li>
            <a href='/dat-lich'>Đặt lịch</a>
          </li>
          <li>
            <a href='/phan-hoi'>Phản hồi</a>
          </li>
          <li>
            <a href='/thanh-vien'>Thành viên</a>
          </li>
        </ul>
      </nav>
      <div className='greeting'>
        <h1>IT-Zone xin chào!</h1>
        <p>Bạn cần giúp đỡ gì ?</p>
        <button>Nhận sự hỗ trợ ngay!</button>
      </div>
    </header>
  );
}

export default Header;
