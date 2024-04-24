import Header from "../../components/Header/index.jsx";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <div className="flex items-center w-full h-auto pt-40 roboto_slab">
        <div className="left w-7/12 h-2/3">
          <div className="image-holder w-full">
            <img src="" alt="" />
            <h1>Hello</h1>
          </div>
        </div>

        <div className="right p-10 pr-24">
          <h1 className="flex justify-end w-full pb-6 text-5xl font-bold">
            IT-Zone xin chào!
          </h1>
          <h2 className="flex justify-end w-full pb-4 text-4xl">
            Bạn cần giúp đỡ gì?
          </h2>
          <Link
            className="w-full flex justify-end text-2xl text-blue-500 underline"
            to="/tutorial"
          >
            Nhận sự hỗ trợ ngay!
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
