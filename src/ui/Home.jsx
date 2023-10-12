import RecentWork from "../pages/home/recentWork";
import FvrtProjects from "../pages/home/FvrtProjects";
import HomeSideBar from "../pages/home/HomeSideBar";

const Home = () => {
  return (
    <div className="lg:grid lg:grid-cols-4 p-2 md:py-6 md:px-8 lg:py-6 xl:px-28">
      <div className="lg:col-span-3">
        <div className="md:px-8 lg:px-4 px-2 xl:px-10">
          <RecentWork />
          <FvrtProjects />
        </div>
      </div>
      <div className="hidden lg:block lg:col-span-1">
        <HomeSideBar />
      </div>
    </div>
  );
};

export default Home;
