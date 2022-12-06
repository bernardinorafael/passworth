import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./css/global-styled"
import { theme } from "./css/themes/default-theme"
import { BrowserRouter as Routers } from "react-router-dom"
import Router from "./routes"
import { PasswordProvider } from "./context/PasswordContext"

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Routers>
        <PasswordProvider>
          <Router />
        </PasswordProvider>
      </Routers>
    </ThemeProvider>
  )
}
