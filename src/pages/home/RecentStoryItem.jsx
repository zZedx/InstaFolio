const RecentStoryItem = ({ project }) => {
  const name = project.name;
  const limit = 6;
  let isLong;
  let slicedText;
  if (name.length <= limit) {
    slicedText = name;
    isLong = false;
  } else {
    slicedText = name.split("").slice(0, limit).join("");
    isLong = true;
  }
  return (
    <div className="flex cursor-pointer flex-col items-center">
      <div className="h-14 w-14 rounded-full bg-gradient-to-t from-red-400 to-pink-600 p-[2.5px] md:h-20 md:w-20">
        <img
          src={project.imgs[0]}
          className="h-full w-full rounded-full bg-black object-cover object-center"
          alt=""
        />
      </div>
      <h1 className="text-sm lg:text-base">
        {slicedText}
        {isLong ? "..." : ""}
      </h1>
    </div>
  );
};

export default RecentStoryItem;
