import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import About from "./pages/about/About"
import Experience from "./pages/experience/Experience"
import Contact from "./pages/contact/Contact"
import Story from "./pages/story/Story";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path : '/story/:id',
    element : <Story/>
  }
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
