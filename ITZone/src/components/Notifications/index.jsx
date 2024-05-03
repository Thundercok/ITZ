import "./index.css";

const NotificationItem = ({ iconColor, message, timestamp }) => {
  return (
    <li className="flex pt-[10px]">
      <span className={`bullet ${iconColor} mt-[7px]`}></span>
      <div className="w-[90%] pl-[1rem]">
        <p>{message}</p>
        <p className="w-[90%] border-b text-xs text-gray-500 pl-[4px] pb-[10px]">
          {timestamp}
        </p>
      </div>
    </li>
  );
};

const Notifications = () => {
  // Sample data for notifications
  const notifications = [
    {
      iconColor: "blue",
      message: "10 tin nhắn mới",
      timestamp: "1 day ago",
    },
    {
      iconColor: "red",
      message: "20 tin nhắn mới",
      timestamp: "2 days ago",
    },
    {
      iconColor: "purple",
      message: "5 tin nhắn mới",
      timestamp: "3 days ago",
    },
    {
      iconColor: "green",
      message: "15 tin nhắn mới",
      timestamp: "4 days ago",
    },
  ];

  return (
    <div className="bg-white w-[24rem] h-[18rem] pt-[0.5rem] pl-[2rem]">
      <div className="flex items-center gap-[0.5rem]">
        <h1 className="text-xl font-semibold">Thông báo</h1>
        <span className="notify red text-[10px] pl-[4px] text-white">
          {notifications.length}
        </span>
      </div>
      <ul className="font-semibold flex-col">
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            iconColor={notification.iconColor}
            message={notification.message}
            timestamp={notification.timestamp}
          />
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
