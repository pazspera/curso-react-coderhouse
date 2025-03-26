import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Barlow', sans-serif",
    h1: {
      fontFamily: "'Quattrocento', serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Quattrocento', serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Quattrocento', serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Quattrocento', serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Quattrocento', serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Quattrocento', serif",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "'Barlow', sans-serif",
    },
    body2: {
      fontFamily: "'Barlow', sans-serif",
    },
    button: {
      fontFamily: "'Barlow', sans-serif",
    },
    subtitle1: {
      fontFamily: "'Quattrocento', serif",
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily: "'Quattrocento', serif",
      fontWeight: 700,
    },
    caption: {
      fontFamily: "'Barlow', sans-serif",
    },
    overline: {
      fontFamily: "'Barlow', sans-serif",
    }
  },
  palette: {
    primary: {
      main: "#A0522D",
    },
    secondary: {
      main: "#8B5A2B",
    },
    error: {
      main: "#D9534F",
    },
    warning: {
      main: "#F0AD4E",
    },
    info: {
      main: "#5BC0DE",
    },
    success: {
      main: "#5A9367",
    },
    background: {
      default: "#E1CFB7",
      paper: "#F9F4F0",
    },
    activeColor: {
      main: "#F2D8B3"
    },
    inactiveColor: {
      main: "#ffffff",
    }
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "white", 
          "&:hover": {
            color: "#F2D8B3",
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "white",
          "&:hover": {
            color: "#F2D8B3",
          }
        }
      }
    }
  }
});

export default theme;