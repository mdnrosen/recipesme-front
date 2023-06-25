import * as React from 'react'
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { NavigateFunction, useNavigate } from 'react-router-dom'

interface NavItem {
  name: string
  path: string
  leftAlign: boolean
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/', leftAlign: true },
  { name: 'New', path: '/', leftAlign: true},
  { name: 'Login', path: '/', leftAlign: false }
]

export const Navbar = () => {

  const navigate: NavigateFunction = useNavigate()
  const navigateToPath = (path: string): void => navigate(path)

  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null)
  const openNavMenu = (event: React.MouseEvent<HTMLElement>): void => setAnchor(event.currentTarget)
  const closeNavMenu = (): void => setAnchor(null)

  const handleNavButtonClick = (path: string): void => {
    navigateToPath(path)
    closeNavMenu()
  }

  return (
    <AppBar position="static" color="secondary" variant="outlined">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex' }}>
          <Box sx={{ flexGrow: 1, flexDirection: 'row-reverse', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="navigation menu icon button"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={openNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchor}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchor)}
              onClose={closeNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navItems.map((page) => (
                <MenuItem key={page.name} onClick={() => handleNavButtonClick(page.path)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, }}>
            {navItems.filter(page => page.leftAlign).map((page) => (
              <Button
                key={page.name}
                variant="text"
                color="inherit"
                onClick={() => handleNavButtonClick(page.path)}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, }}>
            {navItems.filter(page => !page.leftAlign).map((page) => (
              <Button
                key={page.name}
                variant="text"
                color="inherit"
                onClick={() => handleNavButtonClick(page.path)}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}