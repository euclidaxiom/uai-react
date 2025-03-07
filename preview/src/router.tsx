import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TopBarPrototype from "./pages/TopBarPrototype.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/top-bar-preview",
    element: <TopBarPrototype />,
  },
]);

export default router;
