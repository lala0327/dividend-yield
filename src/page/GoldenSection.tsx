import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"
import { useState } from "react"
interface GoldenSection {
  goldenSection:number,
  reboundPressure:number,
  retracementPressure:number
  bandRetracementPressure?:number
}
function GoldenSection() {
  const [isError, setIsError] = useState(false)
  const [anotherData, setAnotherData] = useState(false)
  const [rows, setRows]= useState<GoldenSection[]>([])
  const goldenSectionArray = [0.191, 0.382, 0.500, 0.618, 0.809]
  let arr:GoldenSection[] = []
  
  const calculate = () => {  
    const a = parseFloat((document.getElementById('a') as HTMLInputElement).value)
    const b = parseFloat((document.getElementById('b') as HTMLInputElement).value)
    const c = parseFloat((document.getElementById('c') as HTMLInputElement).value) 
    let price = 0
    const num = [!!a, !!b, !!c].filter(function(value) {
      return value === true;
    });
    if(!!a && !!b){
      setIsError(false)
      setAnotherData(true)
      price = parseFloat((document.getElementById('a') as HTMLInputElement).value)-parseFloat((document.getElementById('b') as HTMLInputElement).value);
      (document.getElementById('c') as HTMLInputElement).value = price.toString();
      goldenSectionArray.map((value)=>{
        arr.push({goldenSection:value, reboundPressure:parseFloat((price*(1+value)).toFixed(2)), retracementPressure: parseFloat((price*(1-value)).toFixed(2)),bandRetracementPressure:parseFloat((a-(price*value)).toFixed(2))})
      })
      setRows(arr)
    }
    else if(num.length === 1 && !!c){
      setIsError(false)
      price = parseFloat((document.getElementById('c') as HTMLInputElement).value)
      setAnotherData(true)
      goldenSectionArray.map((value)=>{
        arr.push({goldenSection:value, reboundPressure:parseFloat((price*(1+value)).toFixed(2)), retracementPressure: parseFloat((price*(1-value)).toFixed(2))})
      })
      setRows(arr)
    }
    else{
      setIsError(true)
    }
  }
  return (
    <div style={{width:'100%', display:'flex',justifyContent:'center', overflowY:'auto'}}>
      <div style={{width:'90%', height:'auto', padding:'20px 0px', maxWidth: '450px'}}>
      <p style={{textAlign:'start'}}>請輸入 <span style={{color:'#d32f2f', fontWeight:'700' }}>高點與低點</span> 或是直接輸入 <span style={{color:'#d32f2f', fontWeight:'700' }}>等號後參數</span> 並點擊'<span style={{ fontWeight:'700' }}>計算結果</span>'即可計算出黃金分割率</p>
        <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
          <TextField id='a' key='a' error={isError} type="number" label='高點' variant="outlined" sx={{width:'100%',margin:'10px 0px'}}/>
          <p style={{margin:'0px 10px'}}>-</p>
          <TextField id='b' key='b' error={isError} type="number" label='低點' variant="outlined" sx={{width:'100%',margin:'10px 0px'}}/>
          <p style={{margin:'0px 10px'}}>=</p>
          <TextField id='c' key='c' error={isError} type="number" label='' variant="outlined" sx={{width:'100%',margin:'10px 0px'}}/>
        </div>
        { isError ? <p style={{fontSize:'20px',fontWeight:'700', color:'#d32f2f'}}>請輸入高點與低點或是直接輸入等號後參數</p> : '' }
        <Button onClick={calculate} variant="contained" size="large" sx={{width:'100%', fontSize:'20px', fontWeight:'700', margin:"10px 0px"}}>計算結果</Button>
        {anotherData?
          <TableContainer component={Paper} sx={{ display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', marginTop:'20px'}}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight:700, padding:"10px", backgroundColor:'#1976d2', color:'white'}}>黃金分割率</TableCell>
                  <TableCell sx={{fontWeight:700, padding:"10px", backgroundColor:'#1976d2', color:'white'}} align="center">低點反彈壓力</TableCell>
                  <TableCell sx={{fontWeight:700, padding:"10px", backgroundColor:'#1976d2', color:'white'}} align="center">高點回檔壓力</TableCell>
                  {(!!parseFloat((document.getElementById('a') as HTMLInputElement).value) && !!parseFloat((document.getElementById('b') as HTMLInputElement).value)) ?
                    <TableCell sx={{fontWeight:700, padding:"10px", backgroundColor:'#1976d2', color:'white'}} align="center">波段回檔壓力</TableCell>:null}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.goldenSection}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={{padding:"10px"}}>{row.goldenSection}</TableCell>
                    <TableCell align="center" sx={{padding:"10px"}}>{row.reboundPressure}</TableCell>
                    <TableCell align="center" sx={{padding:"10px"}}>{row.retracementPressure}</TableCell>
                    {(!!parseFloat((document.getElementById('a') as HTMLInputElement).value) && !!parseFloat((document.getElementById('b') as HTMLInputElement).value)) ?
                      <TableCell align="center" sx={{padding:"10px"}}>{row.bandRetracementPressure}</TableCell>:null}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        :null}  
      </div>
    </div>
  )
}
export default GoldenSection