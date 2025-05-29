import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SiteLayout from "./pages/SiteLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";
import AppLayout from "./pages/AppLayout";
import { action as createAccountAction } from "./features/user/CreateAccountForm";
import { action as loginAction } from "./features/user/LoginForm";
import AccountSucces from "./features/user/AccountSucces";
import SiteError from "./ui/SiteError";
import AppError from "./ui/AppError";

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
        action: loginAction,
        element: <Login />,
      },
      {
        path: "/account/new",
        action: createAccountAction,
        element: <NewAccount />,
      },
      {
        path: "/account/succes/:id",
        element: <AccountSucces />,
        errorElement: <SiteError />,
      },
    ],
  },
  {
    path: "/account/:id",
    element: <AppLayout />,
    errorElement: <AppError />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
