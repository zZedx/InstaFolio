import RecentWork from "../pages/home/RecentWork";
import FvrtProjects from "../pages/home/FvrtProjects";
import HomeSideBar from "../pages/home/HomeSideBar";

const Home = () => {
  return (
    <div className="p-2 md:px-8 md:py-6 lg:grid lg:grid-cols-4 lg:py-6 xl:px-14 2xl:px-28 ">
      <div className="col-span-4 xl:col-span-3">
        <div className="px-2 md:px-8 lg:px-4 xl:px-10">
          <RecentWork />
          <FvrtProjects />
        </div>
      </div>
      <div className="hidden xl:col-span-1 xl:block">
        <HomeSideBar />
      </div>
    </div>
  );
};

export default Home;
