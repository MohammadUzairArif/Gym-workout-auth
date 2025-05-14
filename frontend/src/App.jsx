import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RequireAuth from "./components/auth/RequireAuth";
import RedirectIfLoggedIn from "./components/auth/RedirectIfLoggedIn";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <RequireAuth>
            <Home />
          </RequireAuth>
        ),
      },
      {
        path: "login",
        element: (
          <RedirectIfLoggedIn>
            <Login />
          </RedirectIfLoggedIn>
        ),
      },
      {
        path: "signup",
        element: (
          <RedirectIfLoggedIn>
            <Signup />
          </RedirectIfLoggedIn>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;