import { Link } from "react-router-dom"
import Switch from "../components/Switch"
import { Container, GeneratePasswordButton, TypeCharacterContainer } from "../css/pages/Home"

export default function HomeScreen() {
  return (
    <Container>
      <main>
        <h1>
          gere uma senha segura <br />e administre no painel{" "}
          <Link to="/history">Histórico</Link>.
        </h1>

        <div>
          <TypeCharacterContainer>
            <strong>dê um nome para a sua senha.</strong>
            <input autoFocus type="text" />
          </TypeCharacterContainer>

          <TypeCharacterContainer>
            <strong>digite um número de caracteres.</strong>
            <input type="text" />
          </TypeCharacterContainer>

          <TypeCharacterContainer>
            <strong>selecione para adicionar caracteres especiais:</strong>
            <Switch />
          </TypeCharacterContainer>

          <TypeCharacterContainer>
            <strong>selecione para adicionar números:</strong>
            <Switch />
          </TypeCharacterContainer>

          <TypeCharacterContainer>
            <strong>selecione para adicionar letras maiúsculas:</strong>
            <Switch />
          </TypeCharacterContainer>

          <TypeCharacterContainer>
            <strong>selecione para adicionar letras minúsculas:</strong>
            <Switch />
          </TypeCharacterContainer>

          <GeneratePasswordButton>gerar senha</GeneratePasswordButton>
        </div>
      </main>
    </Container>
  )
}
