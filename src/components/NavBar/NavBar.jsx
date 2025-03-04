import { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Container,
	IconButton,
	Link,
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
						<Typography variant="subtitle1" component="p">
							Dados & Dragones
						</Typography>
						<List>
							<ListItemText primary="Estrategia"></ListItemText>
							<ListItemText primary="Familiares"></ListItemText>
							<ListItemText primary="Party"></ListItemText>
						</List>
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
					<Typography variant="subtitle1" component="p">
						Dados & Dragones
					</Typography>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Link className="navbar-link">Estrategia</Link>
						<Link className="navbar-link">Familiares</Link>
						<Link className="navbar-link">Party</Link>
						<CartWidget />
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
