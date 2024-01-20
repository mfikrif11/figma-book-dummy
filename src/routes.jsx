import { createBrowserRouter } from "react-router-dom"
import GeneralLayout from "./layout/GeneralLayout"
import Home from "./pages/Home"

const router = createBrowserRouter([
  {
    path: "/home",
    element: <GeneralLayout />,
    children: [
      {
        path: "/home",
        Component: Home,
      },
    ],
  },
])

export { router }
