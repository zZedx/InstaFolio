import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className=" flex h-screen flex-col lg:grid lg:grid-cols-5 xl:grid-cols-6">
      <div className="flex-none border-b border-gray-700 lg:col-span-1 lg:border-b-0 lg:border-r">
        <Sidebar />
      </div>
      <div className="flex-auto overflow-auto lg:col-span-4 xl:col-span-5">
        <Outlet />
        <footer className="mt-12 flex h-28 items-center justify-center border-t border-white/40 text-white/60">
          @InstaFolio
        </footer>
      </div>
    </div>
  );
};

export default AppLayout;
