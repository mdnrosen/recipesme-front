import { AppBar, Button, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()


    const handleClick = (path: string) => navigate(path)

  return (
    <AppBar color="secondary" variant="outlined"> 
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={() => handleClick('/')}variant="text" color="inherit">Home</Button>
            <Button variant="text" color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
  )
}
