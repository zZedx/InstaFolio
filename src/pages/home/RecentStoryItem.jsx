const RecentStoryItem = ({ project }) => {
  const name = project.name;
  const limit = 8
  let isLong ;
  let slicedText;
  if(name.length <= limit) {
    slicedText = name;
    isLong = false;
  }
  else{
    slicedText = name
    .split("")
    .slice(0, limit)
    .join("");
    isLong = true;
  }
  return (
    <div className="cursor-pointer flex flex-col items-center">
      <div className="h-14 md:h-20 w-14 md:w-20 rounded-full bg-gradient-to-t from-red-400 to-pink-600 p-[2.5px]">
        <img src={project.imgs[0]} className="bg-black h-full w-full rounded-full" alt="" />
      </div>
      <h1>{slicedText}{isLong ? "..." : ''}</h1>
    </div>
  );
};

export default RecentStoryItem;
