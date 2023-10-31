import { useEffect, useRef } from "react";
// import { useNavigation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const loaderStyle = {
  //   position: "absolute",
  //   top: "3.4rem", //height of header
  backgroundColor: "rgb(227, 75, 113)",
};

const Loader = ({ isLoading, show }) => {
  //   const navigation = useNavigation();
  //   const isLoading = navigation.state !== "idle";
  const ref = useRef(null);
  console.log(isLoading);
  console.log(show);

  useEffect(() => {
    const loadingBarRef = ref.current;
    show
      ? isLoading
        ? loadingBarRef.continuousStart()
        : loadingBarRef.complete()
      : "";
    // isLoading ? setProgress(50) : setProgress(100);
  }, [isLoading, show]);

  //   return <div className={`${isLoading ? '' : "hidden"} absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm transition-all z-10`}>
  //   <div className="loader"></div>
  // </div>

  return (
    <LoadingBar
      ref={ref}
      shadow={false}
      style={loaderStyle}
      transitionTime={100}
      //   waitingTime={}
      height={2}
    />
  );
};

export default Loader;
