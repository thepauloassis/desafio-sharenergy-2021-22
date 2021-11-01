import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mycolors: {
      main: '#ff0000',
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    mycolors: Palette['primary'];
  }
  interface PaletteOptions {
    mycolors?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    mycolors: true;
  }
}

export default theme;
