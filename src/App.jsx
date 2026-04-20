import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProjects from "./pages/AllProjects";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "projects",
    element: <AllProjects />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
