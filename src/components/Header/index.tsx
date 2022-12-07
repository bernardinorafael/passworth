import "animate.css"
import * as Icon from "phosphor-react"
import * as React from "react"
import { Link, NavLink } from "react-router-dom"
import { Container, ToggleThemeButton } from "./styles"

export default function Header() {
  const [isToggleThemeActive, setIsToggleThemeActive] = React.useState(false)

  function handleToggleTheme() {
    setIsToggleThemeActive(!isToggleThemeActive)
  }

  return (
    <Container>
      <header>
        <Link to="/">
          word<span>.</span>
        </Link>

        <nav>
          <NavLink end to="/">
            início
          </NavLink>
          <NavLink to="/history">histórico</NavLink>
        </nav>

        <div>
          <button type="button">entrar</button>

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
