import { Box, List, ListItem, ListItemButton, ListItemText, Divider, IconButton, Typography, AppBar, Toolbar } from "@mui/material"
import Drawer from '@mui/material/Drawer';
import { useState } from "react";
import { AccountCircle, ChevronLeft } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from '@mui/icons-material';

interface meneInterfase {
  name:string
  id:string
}
function DrawerCompoment() {
  // 路徑相關
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  // drawer 相關
  const [open, setOpen] = useState(false);

  const menuList:meneInterfase[] = [
    {name:'首頁',id:'home'},
    {name:'殖利率計算機',id:'yieldCalculator'},
    {name:'黃金分割率',id:'goldenSection'},
  ]
  const titleName = () => {
    switch(pathname) { 
      case '/': 
        return '首頁'
      case '/yieldCalculator': 
        return '殖利率計算機'
      case '/goldenSection': 
        return '黃金分割率'
      default: 
        return ''
    }
  }

  const changePage = (id:string) => {
    switch (id){
      case 'home':
        navigate(`/`)
        break
      default:
        navigate(`/${id}`)
        break
    }
    setOpen(false);
  }

  const DrawerList = ()=> {
    return(
      <Box role="presentation" sx={{width:'200px'}}>      
        <ListItem disablePadding sx={{display:'flex', justifyContent:'end'}}>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{padding:'13px'}} onClick={ ()=> setOpen(false) }>
            <ChevronLeft sx={{ fontSize: 30 }}/>
          </IconButton>
        </ListItem>
        <Divider />
        <List>
          { menuList.map(({name,id}) => (
            <ListItem key={id} disablePadding>
              <ListItemButton onClick={()=>changePage(id)}>
                <ListItemText primary={name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    )
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" sx={{padding:'5px'}} onClick={ () => setOpen(true) }>
            <Menu sx={{ fontSize: 32 }}/>
          </IconButton>

          <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1, textAlign:'start', paddingLeft:'10px',fontSize:'22px', fontWeight:'600' }}>
            { titleName() }
          </Typography>
          <IconButton
            sx={{padding:'5px'}}
            color="inherit"
          >
            <AccountCircle sx={{ fontSize: 32 }}/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={ () => setOpen(false) }>
        {DrawerList()}
      </Drawer>
    </>
  )
}
export default DrawerCompoment