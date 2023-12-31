import RecentStoryItem from "./RecentStoryItem";
import { useNavigate } from "react-router-dom";

import { recent } from "../../utils/recentProjecs";
import { useState } from "react";
import Loader from "../../ui/Loader";

const RecentWork = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const delayNavigation = (path) => {
    setShow(true);
    setLoading(true); // Show loading indicator
    setTimeout(() => {
      setTimeout(() => {
        navigate(path); // Navigate after a delay
      }, 590);
      setLoading(false); // Hide loading indicator
    }, 600); // Adjust the delay time as needed
  };

  return (
    <div className="mb-6 lg:mb-12 lg:mt-6">
      <Loader isLoading={loading} show={show}></Loader>
      <h2 className="mb-3 border-b-white/40 pb-1 text-center font-semibold uppercase tracking-wider">
        Recent Work
      </h2>
      <ul className="flex gap-4 overflow-scroll lg:justify-center lg:gap-6 lg:px-8">
        {recent.map((item, i) => (
          <li key={i} onClick={() => delayNavigation(`/story/${i}`)}>
            <RecentStoryItem project={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentWork;
