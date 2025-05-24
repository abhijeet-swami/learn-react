import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import Home from "../components/Home";
import Edit from "../components/Edit";
import Github from "../components/Github";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
      {
        path: "github",
        element: <Github />,
      },
    ],
  },
]);

export default router;
