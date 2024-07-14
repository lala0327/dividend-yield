import Home from "../page/Home"
import YieldCalculator from "../page/YieldCalculator"
import GoldenSection from "../page/GoldenSection"
import { useRoutes } from "react-router-dom"
import { Login } from "@mui/icons-material"

const AllRoutes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/home',
      element: <Home />,
    },
    {
      path: '/yieldCalculator',
      element: <YieldCalculator />,
    },
    {
      path: '/goldenSection',
      element: <GoldenSection />,
    },
  ])
}

export default AllRoutes