import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex justify-center w-screen h-auto p-4 quick_sand">
        <ul className="header-default flex justify-around w-4/5 text-2xl">
          <Link className="header-font" to="/">
            Trang chủ
          </Link>
          <Link className="header-font" to="/booking">
            Đặt lịch
          </Link>
          <Link className="header-font" to="/feedback">
            Phản hồi
          </Link>
          <Link className="header-font" to="/login">
            Thành viên
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
