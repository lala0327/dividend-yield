import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface YieldInterface {
  dividendsYield:number,
  dividends:number,
  sharePrice:number
}
function YieldCalculator() {
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
    // 股價
    const sharePrice = parseFloat((document.getElementById('sharePrice') as HTMLInputElement).value)
    // 股息
    const dividends = parseFloat((document.getElementById('dividends') as HTMLInputElement).value)
    // 殖利率
    const dividendsYield = parseFloat((document.getElementById('dividendsYield') as HTMLInputElement).value)

    const num = [!!sharePrice, !!dividends, !!dividendsYield].filter(function(value) {
      return value === true;
    });

    if(num.length === 2){
      console.log((dividends*100/sharePrice).toFixed(2))
      setIsError(false)
      if(!!sharePrice === false){
        setAnswer((dividends*100/dividendsYield).toFixed(2))
        setAnotherData(false)
        setRows([])
        setAnserText('股價')
      }
      if(!!dividends === false){
        setAnswer((sharePrice*dividendsYield/100).toFixed(2))
        setAnotherData(false)
        setRows([])
        setAnserText('股息')

        setAnotherData(true)
        setRows([
          { dividendsYield:2.5, dividends:parseInt((sharePrice*2.5/100).toFixed(2)), sharePrice },
          { dividendsYield:3, dividends:parseInt((sharePrice*3/100).toFixed(2)), sharePrice },
          { dividendsYield:3.5, dividends:parseInt((sharePrice*3.5/100).toFixed(2)), sharePrice },
          { dividendsYield:4, dividends:parseInt((sharePrice*4/100).toFixed(2)), sharePrice },
          { dividendsYield:4.5, dividends:parseInt((sharePrice*4.5/100).toFixed(2)), sharePrice },
          { dividendsYield:5, dividends:parseInt((sharePrice*5/100).toFixed(2)), sharePrice },
          { dividendsYield:5.5, dividends:parseInt((sharePrice*5.5/100).toFixed(2)), sharePrice },
          { dividendsYield:6, dividends:parseInt((sharePrice*6/100).toFixed(2)), sharePrice },
          { dividendsYield:6.5, dividends:parseInt((sharePrice*6.5/100).toFixed(2)), sharePrice },
          { dividendsYield:7, dividends:parseInt((sharePrice*7/100).toFixed(2)), sharePrice },
        ])
      }
      if(!!dividendsYield === false){
        setAnswer((dividends*100/sharePrice).toFixed(2))
        setAnserText('殖利率')

        setAnotherData(true)
        setRows([
          { dividendsYield:2.5, dividends, sharePrice:parseInt((dividends*100/2.5).toFixed(2)) },
          { dividendsYield:3, dividends, sharePrice:parseInt((dividends*100/3).toFixed(2)) },
          { dividendsYield:3.5, dividends, sharePrice:parseInt((dividends*100/3.5).toFixed(2)) },
          { dividendsYield:4, dividends, sharePrice:parseInt((dividends*100/4).toFixed(2)) },
          { dividendsYield:4.5, dividends, sharePrice:parseInt((dividends*100/4.5).toFixed(2)) },
          { dividendsYield:5, dividends, sharePrice:parseInt((dividends*100/5).toFixed(2)) },
          { dividendsYield:5.5, dividends, sharePrice:parseInt((dividends*100/5.5).toFixed(2)) },
          { dividendsYield:6, dividends, sharePrice:parseInt((dividends*100/6).toFixed(2)) },
          { dividendsYield:6.5, dividends, sharePrice:parseInt((dividends*100/6.5).toFixed(2)) },
          { dividendsYield:7, dividends, sharePrice:parseInt((dividends*100/7).toFixed(2)) },
        ])
      }
    }else{
      setIsError(true)
      setAnotherData(false)
      setRows([])
      setAnswer('')
      setAnserText("")
    }
  }

  const listButtonArray = [
    {id:'sharePrice', label:'股價'},
    {id:'dividends', label:'股息'},
    {id:'dividendsYield', label:'殖利率'},
  ]
  return (
    <div style={{width:'100%', display:'flex',justifyContent:'center', overflowY:'auto'}}>
      <div style={{width:'80%', height:'auto', padding:'20px 0px', maxWidth: '450px'}}>
        <p style={{textAlign:'start'}}>請輸入隨機 <span style={{color:'#d32f2f', fontWeight:'700' }}>兩格</span> 輸入框內容，即可計算出另一參數值</p>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',width:'100%'}}>
          { listButtonArray.map(({id, label})=>{
            return (
              <TextField id={id} key={id} error={isError} type="number" label={label} variant="outlined" sx={{width:'100%',margin:'10px 0px'}}/>
            )
          })}
        </div>
        {isError?<p style={{fontSize:'20px',fontWeight:'700', color:'#d32f2f'}}>請輸入兩格輸入框內容</p>:''}
        <Button onClick={calculate} variant="contained" size="large" sx={{width:'100%', fontSize:'20px', fontWeight:'700', margin:"10px 0px"}}>計算結果</Button>
        
        <p style={{fontSize:'20px',fontWeight:'700', border:"1px solid black",padding:'5px', margin:'10px 0px'}}>答案: {anserText?`${anserText}為 ${answer}`:''}</p>
        
        {anotherData?
          <TableContainer component={Paper} sx={{ display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight:700, padding:"10px", backgroundColor:'#1976d2', color:'white'}} >殖利率</TableCell>
                  <TableCell sx={{fontWeight:700, padding:"10px", backgroundColor:'#1976d2', color:'white'}} align="center">股息</TableCell>
                  <TableCell sx={{fontWeight:700, padding:"10px", backgroundColor:'#1976d2', color:'white'}} align="center">股價</TableCell>
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
      </div>
    </div>
  )
}

export default YieldCalculator
