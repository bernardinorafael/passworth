import { BrowserRouter as Routers } from "react-router-dom"
import { ThemeProvider, DefaultTheme } from "styled-components"
import Header from "./components/Header"
import { PasswordProvider } from "./context/PasswordContext"
import { RandomCharProvider } from "./context/RandomCharContext"
import { GlobalStyle } from "./css/global-styled"
import { dark, light } from "./css/themes/default-theme"
import usePersistLocalStorage from "./hooks/usePersistLocalStorage"
import Router from "./routes"

export default function App() {
  const [theme, setTheme] = usePersistLocalStorage<DefaultTheme>(
    "@BERNARDINO:THEME",
    light
  )

  function toggleTheme() {
    setTheme(theme.type === "light" ? dark : light)
  }

  return (
    <RandomCharProvider>
      <PasswordProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Routers>
            <Header toggleTheme={toggleTheme}/>
            <Router />
          </Routers>
        </ThemeProvider>
      </PasswordProvider>
    </RandomCharProvider>
  )
}
