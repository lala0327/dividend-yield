import YieldCalculator from "../page/YieldCalculator"
import GoldenSection from "../page/GoldenSection"
import { useRoutes } from "react-router-dom"
import Home from "../page/Home"

const AllRoutes = () => {
  return useRoutes([
    {
      path: '/',
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