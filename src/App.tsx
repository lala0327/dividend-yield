import { useState } from 'react'
import TextField from '@mui/material/TextField';
import './App.css'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
interface YieldInterface {
  dividendsYield:number,
  dividends:number,
  sharePrice:number
}
function App() {
  const [isError, setIsError] = useState(false)
    // 股價// 股息// 殖利率
  const [answer, setAnswer] = useState('')
  const [anserText, setAnserText] = useState("")
  const [anotherData, setAnotherData] = useState(false)
  const [rows, setRows]= useState<YieldInterface[]>([])
  {/*
    股價A=B×100÷C
    股息B=A×C÷100
    殖利率%C=B×100÷A 
  */}

  const calculate = ()=>{
    const inputArray = [!!(document.getElementById('sharePrice') as HTMLInputElement).value, !!(document.getElementById('dividends') as HTMLInputElement).value, !!(document.getElementById('dividendsYield') as HTMLInputElement).value]
    const num = inputArray.filter(function(value) {
      return value === true;
    });

    if(num.length === 2){
      setIsError(false)
      let A = 0
      let B = 0
      let C = 0
      let ans = 0
      if(!!(document.getElementById('sharePrice') as HTMLInputElement).value === false){
        B = parseFloat((document.getElementById('dividends') as HTMLInputElement).value)
        C = parseFloat((document.getElementById('dividendsYield') as HTMLInputElement).value)
        ans = B*100/C
        setAnotherData(false)
        setRows([])
        setAnserText('股價')
      }
      if(!!(document.getElementById('dividends') as HTMLInputElement).value === false){
        A = parseFloat((document.getElementById('sharePrice') as HTMLInputElement).value)
        C = parseFloat((document.getElementById('dividendsYield') as HTMLInputElement).value)
        ans = A*C/100
        setAnotherData(false)
        setRows([])
        setAnserText('股息')
      }
      if(!!(document.getElementById('dividendsYield') as HTMLInputElement).value === false){
        A = parseFloat((document.getElementById('sharePrice') as HTMLInputElement).value)
        B = parseFloat((document.getElementById('dividends') as HTMLInputElement).value)
        ans = B*100/A
        setAnserText('殖利率')

        setAnotherData(true)
        setRows([
          { dividendsYield:2.5, dividends:B, sharePrice:parseInt((B*100/2.5).toFixed(2)) },
          { dividendsYield:3, dividends:B, sharePrice:parseInt((B*100/3).toFixed(2)) },
          { dividendsYield:3.5, dividends:B, sharePrice:parseInt((B*100/3.5).toFixed(2)) },
          { dividendsYield:4, dividends:B, sharePrice:parseInt((B*100/4).toFixed(2)) },
          { dividendsYield:4.5, dividends:B, sharePrice:parseInt((B*100/4.5).toFixed(2)) },
          { dividendsYield:5, dividends:B, sharePrice:parseInt((B*100/5).toFixed(2)) },
          { dividendsYield:5.5, dividends:B, sharePrice:parseInt((B*100/5.5).toFixed(2)) },
          { dividendsYield:6, dividends:B, sharePrice:parseInt((B*100/6).toFixed(2)) },
          { dividendsYield:6.5, dividends:B, sharePrice:parseInt((B*100/6.5).toFixed(2)) },
          { dividendsYield:7, dividends:B, sharePrice:parseInt((B*100/7).toFixed(2)) },
        ])
      }
      setAnswer(ans.toFixed(2))
    }else{
      setIsError(true)
      setAnotherData(false)
      setRows([])
      setAnswer('')
      setAnserText("")
    }
    console.log([(document.getElementById('sharePrice') as HTMLInputElement).value,(document.getElementById('dividends') as HTMLInputElement).value,(document.getElementById('dividendsYield') as HTMLInputElement).value])
  }
  return (
    <>
      <p style={{fontSize:'36px',fontWeight:'700',margin:"0px"}}>股票殖利率計算機</p>
      <p style={{margin:"0px"}}>請輸入隨機兩格輸入框內容<br/>即可計算出另一參數值</p>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',width:'80%', maxWidth: '550px'}}>
        <TextField id="sharePrice" error={isError} type="number" label="股價" variant="outlined" sx={{width:'100%',margin:'15px 0px'}}/>
        <TextField id="dividends" error={isError} type="number" label="股息" variant="outlined" sx={{width:'100%',margin:'15px 0px'}} />
        <TextField id="dividendsYield" error={isError} type="number" label="殖利率" variant="outlined" sx={{width:'100%',margin:'15px 0px'}} />
      </div>
      {isError?<p style={{fontSize:'20px',fontWeight:'700', margin:"0px", color:'#d32f2f'}}>請輸入兩格輸入框內容</p>:''}
      <Button onClick={calculate} variant="contained" size="large" sx={{fontSize:'20px',fontWeight:'700', margin:"10px 0px"}}>計算結果</Button>
      <p style={{fontSize:'20px',fontWeight:'700',margin:"10px 0px", border:"1px solid black", width:'80%', maxWidth: '550px'}}>{anserText?`${anserText}: ${answer}`:''}</p>
      {anotherData?
        <TableContainer component={Paper} sx={{ display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', width:'80%', maxWidth: '550px' }}>
          <Table  aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight:700,padding:"10px"}} >殖利率</TableCell>
                <TableCell sx={{fontWeight:700,padding:"10px"}} align="center">股息</TableCell>
                <TableCell sx={{fontWeight:700,padding:"10px"}} align="center">股價</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.dividendsYield}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{padding:"10px"}}>{row.dividendsYield}</TableCell>
                  <TableCell align="center" sx={{padding:"10px"}}>{row.dividends}</TableCell>
                  <TableCell align="center" sx={{padding:"10px"}}>{row.sharePrice}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      :null}
    </>
  )
}

export default App
