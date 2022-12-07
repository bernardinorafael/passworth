import { BrowserRouter as Routers } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { PasswordProvider } from "./context/PasswordContext"
import { GlobalStyle } from "./css/global-styled"
import { light } from "./css/themes/default-theme"
import Router from "./routes"

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />

      <Routers>
        <PasswordProvider>
          <Header />
          <Router />
        </PasswordProvider>
      </Routers>
    </ThemeProvider>
  )
}
