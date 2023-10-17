import TextExpander from "../../utils/TextExpander";

const Project = ({ project }) => {
  const { name, date, img, tools, description , code , live} = project;
  return (
    <div className="border border-white/20 rounded-md py-4 bg-white/10">
      <nav className="flex gap-3 px-4 pb-4 items-center">
        <span className="lg:text-lg font-medium">{name}</span>
        <span className="w-1 h-1 rounded-full bg-gray-400"></span>
        <span className="text-sm text-gray-400">{date}</span>
      </nav>
      <img className="w-full rounded-md overflow-hidden" src={img} alt="" />
      <main>
        <ul className="flex my-4 px-4 gap-3">
          {tools.map((tool, i) => (
            <li key={i}>
              <Tool>{tool}</Tool>
            </li>
          ))}
        </ul>
        <TextExpander
          colapsedNumWords={5}
          buttonInline={false}
          buttonColor="pink"
          className="px-4 mb-6 text-sm md:text-base "
        title = {name}
          >
          {description}
        </TextExpander>
        <div className="px-4 space-x-6">
        <a className="border space-x-3 border-white/40 px-2 py-1 text-sm inline-block w-24 text-center font-semibold tracking-widest" href={code}><i className="fa-brands fa-github"></i><span>CODE</span> </a>
        <a className="border space-x-3 border-white/40 px-2 py-1 text-sm inline-block w-24 text-center font-semibold tracking-widest" href={live}><i className="fas fa-stream"></i><span>LIVE</span> </a>
        </div>
        <p className="text-red-500 text-sm px-4 mt-2 flex-wrap">Live might take time to load because of free hosting</p>
      </main>
    </div>
  );
};

function Tool({ children }) {
  return (
    <span className="bg-[#e34b71] px-2 py-0.5 inline-block rounded uppercase font-semibold text-xs md:text-sm">
      {children}
    </span>
  );
}

export default Project;
