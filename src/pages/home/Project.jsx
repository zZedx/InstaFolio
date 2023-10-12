import TextExpander from "../../utils/textExpander";

const Project = ({ project }) => {
  const { name, date, img, tools, description } = project;
  return (
    <div className="border border-white/20">
      <nav className="flex gap-3 px-4 py-3 items-center">
        <span className="text-sm font-medium">{name}</span>
        <span className="w-1 h-1 rounded-full bg-gray-400"></span>
        <span className="text-sm text-gray-400">{date}</span>
      </nav>
      <img className="w-full h-56" src={img} alt="" />
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
          className="px-4 mb-3"
        >
          {description}
        </TextExpander>
      </main>
    </div>
  );
};

function Tool({ children }) {
  return (
    <span className="bg-white/40 px-2 py-0.5 inline-block rounded-lg uppercase font-semibold text-sm">
      {children}
    </span>
  );
}

export default Project;
