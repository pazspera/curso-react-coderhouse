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
              <Typography variant="subtitle1" component="p">
                Dados & Dragones
              </Typography>
            </NavLink>
						<List>
							<NavLink to="/estrategia" className="navbar-link">
                <ListItemText primary="Estrategia"></ListItemText>
              </NavLink>
              <NavLink to="/familiares" className="navbar-link">
							  <ListItemText istItemText primary="Familiares"></ListItemText>
              </NavLink>
							<NavLink to="/party" className="navbar-link">
               <ListItemText primary="Party"></ListItemText>
              </NavLink>
						</List>
            <NavLink to="/cart">
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
					<NavLink to="/">
            <Typography variant="subtitle1" component="p">
              Dados & Dragones
            </Typography>
          </NavLink>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<NavLink to="/estrategia" className="navbar-link">Estrategia</NavLink>
						<NavLink to="/familiares" className="navbar-link">Familiares</NavLink>
						<NavLink to="/party" className="navbar-link">Party</NavLink>
						<NavLink to="/cart">
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
