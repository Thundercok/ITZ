import Header from "../../components/Header/index.jsx";
import LoginForm from "../../components/LoginForm/index.jsx";

const Main = () => {
  return (
    <>
      <Header />
        <div className="center p-10 pr-24 ring-1 ">
          <h1 className="flex justify-center w-full pb-6 text-5xl font-bold">
          Hãy có một ngày làm việc năng suất nha!
          </h1>
        </div>
        <LoginForm />

    </>
  );
};

export default Main;
