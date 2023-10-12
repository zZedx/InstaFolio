import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className=" lg:grid lg:grid-cols-5 h-screen flex flex-col">
      <div className="flex-none lg:col-span-1 w-screen">
        <Sidebar />
      </div>
      <div className="flex-auto bg-red-100 overflow-auto lg:col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
