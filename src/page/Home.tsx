import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const listButtonArray = [
    {id:'yieldCalculator',name:'殖利率計算機'},
    {id:'goldenSection',name:'黃金分割率'},
  ]
  return (
    <>
      <div style={{width:'100%',height:'100%', display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
        <div style={{width:'90%', height:'100%', padding:'20px 0px', maxWidth: '450px', display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
          {
            listButtonArray.map(({id, name})=>{
              return (
                <Button variant="contained" key={id} 
                  sx={{margin:'15px 0px', width:'100%', padding:"20px 0px", fontSize:'24px', fontWeight:'700'}}
                  onClick={ () => navigate(`/${id}`) }
                >
                  {name}
                </Button>
              )
            })
          }
        </div>  
      </div>
      <p style={{position:'absolute',left:'10px',bottom:'10px'}}>v1.0.4</p>
    </>
  )
}
export default Home