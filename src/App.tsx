import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './routes'
import DrawerCompoment from './compoment/DrawerCompoment'

function App() {
  return (
    <BrowserRouter>
      <DrawerCompoment/>
      <div style={{width:'100%', height:'calc(100% - 64px)'}}>
        <AllRoutes />
      </div>
    </BrowserRouter>
  )
}
export default App
