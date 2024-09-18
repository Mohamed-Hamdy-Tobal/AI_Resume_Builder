import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/SignIn";
import Layout from "./components/common/Layout";
import Dashboard from "./pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
    ]
  },
  {
    path: "/auth/sign-in",
    element: <SignIn />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
