import "animate.css"
import * as Icon from "phosphor-react"
import * as React from "react"
import { Link, NavLink } from "react-router-dom"
import { Container, ToggleThemeButton } from "./styles"

type HeaderProps = {
  toggleTheme: () => void
}

export default function Header({ toggleTheme }: HeaderProps) {
  const [isToggleThemeActive, setIsToggleThemeActive] = React.useState(false)

  function handleToggleTheme() {
    toggleTheme()
    setIsToggleThemeActive(!isToggleThemeActive)
  }

  return (
    <Container>
      <header>
        <nav>
          <NavLink end to="/">
            início
          </NavLink>
          <NavLink to="/history">histórico</NavLink>
        </nav>

        <div>
          <Link to="login">entrar</Link>

          <ToggleThemeButton onClick={handleToggleTheme}>
            {isToggleThemeActive ? (
              <Icon.Sun
                size={20}
                weight="regular"
                className="animate__animated animate__bounceIn"
              />
            ) : (
              <Icon.Moon
                size={20}
                weight="regular"
                className="animate__animated animate__bounceIn"
              />
            )}
          </ToggleThemeButton>
        </div>
      </header>
    </Container>
  )
}
