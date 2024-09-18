import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'
import Home from "./pages/home/Home";
import Layout from "./components/common/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import SignInPage from "./pages/auth/SignIn";

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
    element: <SignInPage />,
  },
]);


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function App() {

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  )
}

export default App
