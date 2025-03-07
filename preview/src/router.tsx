import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TopBarPreview from "./pages/TopBarPreview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/top-bar-preview",
    element: <TopBarPreview />,
  },
]);

export default router;
