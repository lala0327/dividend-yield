// import DrawerCompoment from "../compoment/DrawerCompoment"
import { useLocation } from 'react-router-dom';

function MainPage() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <>
      {/* <DrawerCompoment/> */}
      <div style={{width:'100%', height:'calc(100% - 64px)'}}>
        <p style={{fontSize:'72px', color:'red', fontWeight:'700', margin:'20px 0px'}}>404 Error</p>
        <p style={{fontSize:'32px'}}>作者缺錢中</p>
        <p style={{fontSize:'32px', fontWeight:'700'}}>使用者請匯錢解鎖</p>
        {/* <Route /> */}
      </div>
      <p style={{position:'absolute',left:'10px',bottom:'10px'}}>v1.0.5</p>
    </>
  )
}
export default MainPage