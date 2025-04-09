import styles from "./NavBar.module.css";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { AppBar, Box, Container,	IconButton,	List,	ListItem,	ListItemText,	SwipeableDrawer,	Toolbar,	Typography,	useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
          PaperProps={{ sx: { backgroundColor: theme.palette.primary.main }, className: styles.drawerMobile}}
				>
					<Box onClick={closeDrawer} onKeyDown={closeDrawer}>
						<NavLink to="/" style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
              <Typography variant="subtitle1" component="span">
                <Logo></Logo>
              </Typography>
            </NavLink>
						
            <List>
              <ListItem>
                <NavLink to="/category/estrategia" className={styles.navbarLink} style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
                  <ListItemText primary="Estrategia"></ListItemText>
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/category/familiares" className={styles.navbarLink} style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
                  <ListItemText istItemText primary="Familiares"></ListItemText>
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/category/party" className={styles.navbarLink} style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
                <ListItemText primary="Party"></ListItemText>
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/cart" className={`${styles.navbarLink} ${styles.navbarLinkCart}`} style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
                  <ListItemText primary="Mi carrito"></ListItemText>
                  <CartWidget />
                </NavLink>
              </ListItem>
						</List>
					</Box>
				</SwipeableDrawer>
        <Box className={styles.drawerMobileToggle}>
          <IconButton onClick={openDrawer} className={styles.drawerMobileButton}>
            <MenuIcon />
          </IconButton>
        </Box>
			</>
		);
	};

	const DesktopNav = () => {
		return (
			<>
				<Toolbar className={styles.navbarContainer}>
					<NavLink to="/" style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>
            <Typography variant="subtitle1" component="span">
              <Logo></Logo>
            </Typography>
          </NavLink>
					<Box className={styles.navbarLinksContainer}>
						<NavLink to="/category/estrategia" className={styles.navbarLink} style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>Estrategia</NavLink>
						<NavLink to="/category/familiares" className={styles.navbarLink} style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>Familiares</NavLink>
						<NavLink to="/category/party" className={styles.navbarLink} style={({ isActive }) => ({ color: isActive ? theme.palette.activeColor.main : theme.palette.inactiveColor.main })}>Party</NavLink>
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
