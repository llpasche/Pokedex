
import { createTheme } from '@mui/material'
import {primaryColor, secondaryColor, terciaryColor, neutralColor} from "./colors"

const theme = createTheme({
    palette:{
        primary:{
            main: primaryColor
        },
        secondary:{
            main: secondaryColor
        },
        terciary:{
            main: terciaryColor
        },
        neutral:{
            main: neutralColor
        }
    }
  });

export default theme 