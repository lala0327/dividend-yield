// import DrawerCompoment from "../compoment/DrawerCompoment"
import { useLocation } from 'react-router-dom';

function MainPage() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <>
      {/* <DrawerCompoment/> */}
      <div style={{width:'100%', height:'calc(100% - 64px)'}}>
        <p>使用者請匯錢解鎖</p>
        {/* <Route /> */}
      </div>
      <p style={{position:'absolute',left:'10px',bottom:'10px'}}>v1.0.4</p>
    </>
  )
}
export default MainPage