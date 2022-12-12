import { Link } from "react-router-dom"
import { Container, InputContainer, LoginButton } from "../css/pages/Login"

export default function Login() {
  return (
    <Container>
      <h1>login.</h1>
      <span>
        não possui uma conta? <Link to="/">sign up</Link>
      </span>

      <form className=" animate__animated animate__fadeIn">
        <InputContainer>
          <label htmlFor="email">e-mail</label>
          <input id="email" placeholder="email@exemplo.com" type="text" />
        </InputContainer>

        <InputContainer>
          <label htmlFor="password">senha</label>
          <input id="password" placeholder="*************" type="password" />
        </InputContainer>

        <LoginButton>entrar</LoginButton>
      </form>

      <Link to="/">voltar para a página inicial.</Link>
    </Container>
  )
}
