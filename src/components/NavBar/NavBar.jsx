import './Navbar.css';
import { AppBar, Box, Container, Link, Toolbar, Typography } from "@mui/material";
import CartWidget from '../CartWidget/CartWidget';

export default function NavBar() {
  return (
    <>
      <AppBar>
          <Container>
            <Toolbar className="navbar-container">
                <Typography 
                  variant="subtitle1" 
                  component="p"
                >
                  Dados & Dragones
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                  <Link className="navbar-link">Estrategia</Link>
                  <Link className="navbar-link">Familiares</Link>
                  <Link className="navbar-link">Party</Link>
                  <CartWidget/>
                </Box>
            </Toolbar> 
          </Container>
      </AppBar>
    </>
    
  );
}