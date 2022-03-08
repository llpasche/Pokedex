
import { createTheme } from '@mui/material'
import {primaryColor, secondaryColor, terciaryColor, neutralColor} from "./colors"

const theme = createTheme({
    palette:{
        primary:{
            main: primaryColor
        }
    }
  });

export default theme 