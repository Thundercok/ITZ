import { CiSearch } from "react-icons/ci";
const UserHeader = () => {
  return (
    <>
      <ul className="header-default rounded-[5px] flex justify-between px-[30px] w-full h-max bg-white ">
        <div className="info flex gap-[5rem]">
          <h1 className="text-4xl font-semibold">Thành viên IT-Zone</h1>
          <div className="text-xs font-semibold pl-[6px] pt-[5px] border-l-2">
            <p>Nguyễn Văn A</p>
            <p>1234567@tdtu.edu.vn</p>
          </div>
        </div>
        <div className="search-bar flex items-center gap-[8px]">
          <CiSearch size={"30px"} />
          <input
            type="text"
            className="text-xl flex justify-end border-b"
            placeholder="Search"
          />
        </div>
      </ul>
    </>
  );
};
export default UserHeader;
