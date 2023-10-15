import TextExpander from "../../utils/textExpander";

const Project = ({ project }) => {
  const { name, date, img, tools, description } = project;
  return (
    <div className="border border-white/20 rounded-md">
      <nav className="flex gap-3 px-4 py-3 items-center">
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
        <div className="px-4 mb-4 space-x-6">
        <a className="border border-white/40 px-2 py-1 text-sm inline-block w-24 text-center font-semibold tracking-widest" href="">CODE</a>
        <a className="border border-white/40 px-2 py-1 text-sm inline-block w-24 text-center font-semibold tracking-widest" href="">LIVE</a>
        </div>
      </main>
    </div>
  );
};

function Tool({ children }) {
  return (
    <span className="bg-pink-500/80 px-2 py-0.5 inline-block rounded uppercase font-semibold text-xs md:text-sm">
      {children}
    </span>
  );
}

export default Project;
