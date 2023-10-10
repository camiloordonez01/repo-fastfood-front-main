import { extendTheme } from '@mui/joy/styles'

export const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    50: '#E1F6FC',
                    100: '#B5EEF8',
                    200: '#85E3F3',
                    300: '#56D6ED',
                    400: '#35CDE7',
                    500: '#29B9D9',
                    600: '#21B1CE',
                    700: '#1A9CB3',
                    800: '#14899B',
                    900: '#0A666E'
                },
                warning: {
                    50: '#fff4e1',
                    100: '#ffe2b4',
                    200: '#ffd083',
                    300: '#ffbc51',
                    400: '#ffad2c',
                    500: '#ff9f0c',
                    600: '#fe930a',
                    700: '#f88307',
                    800: '#f27405',
                    900: '#e95a03'
                },
                danger: {
                    50: '#ffdec9',
                    100: '#f4b9a9',
                    200: '#d19183',
                    300: '#ae6b5b',
                    400: '#944e3f',
                    500: '#7a3223',
                    600: '#6f291e',
                    700: '#5f1e16',
                    800: '#501010',
                    900: '#400101'
                },
                success: {
                    50: '#ffeaec',
                    100: '#ffcace',
                    200: '#f09592',
                    300: '#e66b68',
                    400: '#ef4741',
                    500: '#f23322',
                    600: '#e42723',
                    700: '#d21a1d',
                    800: '#c50e16',
                    900: '#b70006'
                }
            }
        }
    }
})
