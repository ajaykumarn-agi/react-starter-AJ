import { createTheme } from '@mui/material';
import { teal } from '@mui/material/colors';

const { palette } = createTheme();

export const THEME = createTheme({
  components: {
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          backgroundColor: 'black',
          color: 'white',
        },
        standardError: {
          backgroundColor: 'black',
          color: 'white',
        },
        standardWarning: {
          backgroundColor: 'orange',
          color: 'white',
        },
        standardInfo: {
          backgroundColor: 'grey',
          color: 'black',
        },
      },
    },
  },
  palette: {
    secondary: { ...teal, main: teal[400] },
    agBlue: palette.augmentColor({
      color: {
        main: '#1A3BDD',
        100: '#e8ecfc',
        200: '#bbc5f7',
        300: '#8d9ef2',
        400: '#5f77ec',
        500: '#3250e7',
        600: '#1A3BDD',
        700: '#132ba0',
        800: '#0d1e72',
        900: '#081244',
      },
    }),
  },
});
