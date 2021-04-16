import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        --primary-color: ${props => props.theme.colors.primaryColor};
        --secondary-color: ${props => props.theme.colors.secondaryColor};
        --accent-color: ${props => props.theme.colors.accentColor};
        --default-white: ${props => props.theme.colors.defaultWhite};
        --sub-white: ${props => props.theme.colors.subWhite};
        --default-darkgray: ${props => props.theme.colors.defaultDarkGray};
        --default-lightgray: ${props => props.theme.colors.defaultLightGray};
        --default-blue: ${props => props.theme.colors.defaultBlue};
        --cold-grey: ${props => props.theme.colors.coldGrey};
        --soft-cold-grey: ${props => props.theme.colors.softColdGrey};
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: "Open Sans", sans-serif, sans-serif ,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    overflow-x: hidden;
    }
`
