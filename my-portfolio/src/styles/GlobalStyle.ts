import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root{box-sizing:border-box}
  *,*::before,*::after{box-sizing:inherit}
  html,body,#root{height:100%}
  body{margin:0;font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background: ${(props: any) => props.theme.colors.background}; color: ${(props: any) => props.theme.colors.text};}
  a{color:inherit}
`

export default GlobalStyle
