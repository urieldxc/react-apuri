import { createTheme } from "@mui/material/styles";

const theme1 = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#1a1a1a',
          light: '#4a4949',
          dark: '#181818',
          contrastText: '#e6e6e6',
        },
        secondary: {
          main: '#009c0d',
          light: '#34af3e',
        },
        error: {
          main: '#f54538',
        },
        warning: {
          main: '#ff9700',
        },
        divider: 'rgba(255,255,255,0.11)',
      },
  });

export default theme1