import "./index.css"
const Profile = () => {
  return (
    <div className="bg-white w-[18rem] h-[18rem] rounded flex justify-center items-center">
      <div className="avatar flex flex-col items-center">
        <img
          src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
          alt=""
          className="w-[8rem]"
        />
        <p className="pt-[2rem] text-2xl font-semibold">IT-Zone Member</p>
      </div>
    </div>
  );
}

export default Profile;
