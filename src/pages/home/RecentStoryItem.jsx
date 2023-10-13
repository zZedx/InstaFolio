const RecentStoryItem = ({ project }) => {
  return (
    <div className="cursor-pointer">
      <div className="h-14 lg:h-20 w-14 lg:w-20 rounded-full bg-gradient-to-t from-red-400 to-pink-600 p-[2.5px]">
        <img src={project.imgs[0]} className="bg-black h-full w-full rounded-full" alt="" />
      </div>
      <h1>{project.name}</h1>
    </div>
  );
};

export default RecentStoryItem;
