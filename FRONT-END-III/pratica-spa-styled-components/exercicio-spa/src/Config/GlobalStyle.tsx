import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        width: 100vw;
        overflow-x: hidden;
    }

    #root {
        width: 100%;
    }
`
export default GlobalStyle