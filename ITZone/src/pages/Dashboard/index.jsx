import UserHeader from "../../components/UserHeader";
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import TasksList from "../../components/TasksList";
import Notifications from "../../components/Notifications";
import Attendance from "../../components/Attendance";
import Statistics from "../../components/Statistics";

const Dashboard = () => {
  return (
    <div className="bg-zinc-200 flex h-screen">
      <div className="left flex justify-center w-[10%] h-full pt-5"> 
        <Sidebar />
      </div>
      <div className="right w-[90%] h-full pr-[5rem] pt-5">
        <UserHeader />
        {/* Conditional rendering based on the route or state */}
        {/* For example, if the route is '/profile', render MemberProfile */}
        {/* If the route is '/tasks', render MemberTasks */}
        {/* If the route is '/calendar', render MemberCalendar */}
        {/* If the route is '/notifications', render MemberNotifications */}
        {/* If the route is '/settings', render MemberSettings */}
        {/* You can use React Router for routing */}
        {/* Example: <Route path="/profile" component={MemberProfile} /> */}
        <div className="child-nav"></div>
        <div className="flex justify-between my-[2rem]">
          <Profile />
          <Notifications />
          <TasksList />
        </div>
        <div className="flex justify-between ">
          <Statistics />
          <Attendance />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
