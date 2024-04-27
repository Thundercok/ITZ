import React, { useState } from "react";

import Header from "ITZone/src/components/User_Header";
import Sidebar from "ITZone/src/components/Sidebar";
import Profile from 'ITZone/src/components/Profile';
import TasksList from 'ITZone/src/components/TasksList';
import Calendar from 'ITZone/src/components/Calendar';
import Notifications from 'ITZone/src/components/Notifications';


const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <MainContent>
          {/* Conditional rendering based on the route or state */}
          {/* For example, if the route is '/profile', render MemberProfile */}
          {/* If the route is '/tasks', render MemberTasks */}
          {/* If the route is '/calendar', render MemberCalendar */}
          {/* If the route is '/notifications', render MemberNotifications */}
          {/* If the route is '/settings', render MemberSettings */}
          {/* You can use React Router for routing */}
          {/* Example: <Route path="/profile" component={MemberProfile} /> */}
          <Profile />
          <TasksList /> 
          <Calendar /> 
          <Notifications /> 
         
        </MainContent>
      </div>
    </div>
  );
}

export default Dashboard;
