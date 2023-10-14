// import { useEffect, useState } from "react";
// import { Outlet, useLocation, useNavigation } from "react-router-dom";
// import TopBarProgress from "react-topbar-progress-indicator"

// const Loader = () => {
//   const [progress, setProgress] = useState(false);
//   const [prevLoc, setPrevLoc] = useState("");
//   const location = useLocation();
//   const [temp , setTemp] = useState(false)

//   console.log(location.pathname)

//   useEffect(() => {
//     setPrevLoc(location.pathname);
//     setProgress(true);
//     if (location.pathname === prevLoc) {
//       setPrevLoc("");
//     }
//   }, [location.pathname]);

//   useEffect(() => {
//     setProgress(false);

//   }, [prevLoc]);

//   return <>
//   {progress && <TopBarProgress color={"pink"}/>}
//   <Outlet />;
//   </>
// };

// export default Loader;
