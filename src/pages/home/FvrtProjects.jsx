import Project from "./Project";

const projects = [
  {
    name: "DomiHut Pizza",
    img: "https://res.cloudinary.com/dbm00ix5k/image/upload/v1697533367/InstaFolio/Domihut_arfo1n.png",
    description:
      "I created 'DomiHut Pizza,' a web-based pizza ordering system developed with React, React Router, Redux Toolkit, and Tailwind CSS. This project demonstrates my proficiency in using cutting-edge web development technologies to build a dynamic and user-friendly application. Users can easily navigate the menu, add items to their cart, and place orders. The use of React and React Router ensures a responsive and seamless user experience, while Redux Toolkit manages the state efficiently. 'DomiHut Pizza' boasts a modern and visually appealing design, thanks to Tailwind CSS. This project is a testament to my skills as a web developer and a valuable addition to my resume and portfolio, showcasing my ability to create practical and engaging web applications.",
    tools: ["React", "Redux", "TailwindCss"],
    date: "9 Oct 2023",
    code: "https://github.com/zZedx/DomiHut",
    live: "https://domihut-jgpvuyyqd-zzedx.vercel.app",
  },

  {
    name: "Chatter",
    img: "https://res.cloudinary.com/dbm00ix5k/image/upload/v1697533366/InstaFolio/chatter_nxi1wp.png",
    description:
      "Chatter is a dynamic real-time chat application that I developed using a modern technology stack, including HTML, CSS, JavaScript, MongoDB, Express.js, Node.js, and Socket.io. This project showcases my proficiency in full-stack web development and my ability to create interactive and engaging user experiences. It features real-time messaging, allowing users to engage in instant, seamless conversations. User authentication is implemented to ensure secure access, enabling users to create accounts, log in, and protect their privacy. Additionally, Chatter stores message history in a MongoDB database, ensuring that users can access their conversations even after logging out. The application's responsive design adapts to various screen sizes, making it accessible on both desktop and mobile devices.",
    tools: ["JavaScipt", "Node", "Socket.io"],
    date: "1 month ago",
    code: "https://github.com/zZedx/Chatter",
    live: "https://chatter1.onrender.com",
  },
  {
    name: "Spotify Clone",
    img: "https://res.cloudinary.com/dbm00ix5k/image/upload/v1697533675/InstaFolio/spotify.png",
    description:
      " A music player project inspired by Spotify's user interface, created using HTML, CSS, and JavaScript. The project's main objective was to design a responsive and user-friendly music player, incorporating essential functions like play, pause, skip, and volume control.",
    tools: ["Html", "Css", "JavaScript"],
    date: "12 Aug 2023",
    code: "https://github.com/zZedx/SpotifyxD",
    live: "https://zzedx.github.io/SpotifyxD/",
  },
  {
    name: "InstaFolio",
    img: "https://res.cloudinary.com/dbm00ix5k/image/upload/v1697533367/InstaFolio/instafolio_bn5tem.png",
    description:
      "Developed an Instagram-themed portfolio website using React, React Router, and Tailwind CSS, which serves as a compelling showcase of my web development skills. This project underscores my ability to create dynamic and responsive interfaces with React, ensuring an engaging user experience. The implementation of React Router enables seamless navigation between different sections, enhancing the user's interaction with my portfolio. Tailwind CSS was utilized to craft a modern and visually appealing design, mirroring the aesthetics of Instagram itself. This project not only demonstrates my proficiency but also stands as a noteworthy addition to my resume and portfolio, showcasing my capabilities as a web developer.",
    tools: ["React", "react router", "Tailwind"],
    date: "1 Week ago",
    code: "https://github.com/zZedx/InstaFolio",
    live: "https://insta-folio-87si03k13-zzedx.vercel.app/",
  },
];

function FvrtProjects() {
  return (
    <div>
      <h1 className="uppercase font-semibold tracking-wider text-center pb-1 mb-3 border-b-white/40">
        Favorite Projects
      </h1>
      <ul className="space-y-8 xxl:px-16 mt-4 lg:mt-6 flex flex-col items-center w-full">
        {projects.map((item, i) => (
          <li className="w-full xl:w-3/4" key={i}>
            <Project project={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FvrtProjects;
