import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className=" lg:grid lg:grid-cols-5 xl:grid-cols-6 h-screen flex flex-col">
      <div className="flex-none lg:col-span-1 lg:border-r border-b lg:border-b-0 border-gray-700">
        <Sidebar />
      </div>
      <div className="flex-auto overflow-auto lg:col-span-4 xl:col-span-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
