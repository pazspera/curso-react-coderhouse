import { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Container,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	Toolbar,
	Typography,
	useMediaQuery,
} from "@mui/material";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function NavBar() {
	const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
              <Typography variant="subtitle1" component="p" style={({ isActive }) => ({ color: isActive ? "darkslateblue" : "white" })}>
                Dados & Dragones
              </Typography>
            </NavLink>
						<List>
							<NavLink to="/category/estrategia" className="navbar-link" style={({ isActive }) => ({ color: isActive ? "darkslateblue" : "white" })}>
                <ListItemText primary="Estrategia"></ListItemText>
              </NavLink>
              <NavLink to="/category/familiares" className="navbar-link" style={({ isActive }) => ({ color: isActive ? "darkslateblue" : "white" })}>
							  <ListItemText istItemText primary="Familiares"></ListItemText>
              </NavLink>
							<NavLink to="/category/party" className="navbar-link" style={({ isActive }) => ({ color: isActive ? "darkslateblue" : "white" })}>
               <ListItemText primary="Party"></ListItemText>
              </NavLink>
						</List>
            <NavLink to="/cart" style={({ isActive }) => ({ color: isActive ? "darkslateblue" : "white" })}>
              <Typography>Mi carrito</Typography>
            </NavLink>
					</Box>
				</SwipeableDrawer>
				<IconButton onClick={openDrawer}>
					<MenuIcon />
				</IconButton>
			</>
		);
	};

	const DesktopNav = () => {
		return (
			<>
				<Toolbar className="navbar-container">
					<NavLink to="/" style={({ isActive }) => ({ color: isActive ? "darkslateblue" : "white" })}>
            <Typography variant="subtitle1" component="p">
              Dados & Dragones
            </Typography>
          </NavLink>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<NavLink to="/category/estrategia" className="navbar-link" style={({ isActive }) => ({ color: isActive ? "darkslateblue" : "white" })}>Estrategia</NavLink>
						<NavLink to="/category/familiares" className="navbar-link" style={({ isActive }) => ({ color: isActive ? "darkslateblue" : "white" })}>Familiares</NavLink>
						<NavLink to="/category/party" className="navbar-link" style={({ isActive }) => ({ color: isActive ? "darkslateblue" : "white" })}>Party</NavLink>
						<NavLink to="/cart" style={({ isActive }) => ({ color: isActive ? "darkslateblue" : "white" })}>
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
