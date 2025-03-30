import { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Container,	IconButton,	List,	ListItem,	ListItemIcon,	ListItemText,	SwipeableDrawer,	Toolbar,	Typography,	useMediaQuery } from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../Logo/Logo";
import { useTheme } from "@mui/material/styles";

export default function NavBar() {
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();

	const MobileNav = () => {
		const [openMobileMenu, setOpenMobileMenu] = useState(false);

		const openDrawer = () => setOpenMobileMenu(true);
		const closeDrawer = () => setOpenMobileMenu(false);

		return (
			<>
				<SwipeableDrawer
					open={openMobileMenu}
					onClose={closeDrawer}
					onOpen={openDrawer}
				>
					<Box onClick={closeDrawer} onKeyDown={closeDrawer}>
						<NavLink to="/">
              <Typography variant="subtitle1" component="span" style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
                <Logo></Logo>
              </Typography>
            </NavLink>
						<List>
							<NavLink to="/category/estrategia" className="navbar-link" style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
                <ListItemText primary="Estrategia"></ListItemText>
              </NavLink>
              <NavLink to="/category/familiares" className="navbar-link" style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
							  <ListItemText istItemText primary="Familiares"></ListItemText>
              </NavLink>
							<NavLink to="/category/party" className="navbar-link" style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
               <ListItemText primary="Party"></ListItemText>
              </NavLink>
						</List>
            <NavLink to="/cart" style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
              <Typography>Mi carrito</Typography>
            </NavLink>
					</Box>
				</SwipeableDrawer>
        <Box sx={{display: 'flex', justifyContent: 'flex-start'}}>
          <IconButton onClick={openDrawer} sx={{ alignSelf: 'start'}}>
            <MenuIcon />
          </IconButton>
        </Box>
			</>
		);
	};

	const DesktopNav = () => {
		return (
			<>
				<Toolbar className="navbar-container">
					<NavLink to="/" style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
            <Typography variant="subtitle1" component="span">
              <Logo></Logo>
            </Typography>
          </NavLink>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<NavLink to="/category/estrategia" className="navbar-link" style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>Estrategia</NavLink>
						<NavLink to="/category/familiares" className="navbar-link" style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>Familiares</NavLink>
						<NavLink to="/category/party" className="navbar-link" style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>Party</NavLink>
						<NavLink to="/cart" style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
              <CartWidget />
            </NavLink>
					</Box>
				</Toolbar>
			</>
		);
	};

	return (
		<>
			<AppBar>
				<Container maxWidth="xl">{isMobile ? <MobileNav /> : <DesktopNav />}</Container>
			</AppBar>
		</>
	);
}
