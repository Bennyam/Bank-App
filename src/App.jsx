import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SiteLayout from "./pages/SiteLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";
import AppLayout from "./pages/AppLayout";

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/account/new",
        element: <NewAccount />,
      },
    ],
  },
  {
    path: "/account",
    element: <AppLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
