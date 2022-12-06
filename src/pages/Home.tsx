import * as Icon from "phosphor-react"
import * as React from "react"
import { ThemeContext } from "styled-components"
import usePassword from "../context/PasswordContext"
import {
  ButtonGeneratePassword,
  ButtonsType,
  Container,
  InputGenerator,
  ResultContainer,
  ToggleRoot,
} from "../css/pages/Home"

export default function HomeScreen() {
  const { COLORS } = React.useContext(ThemeContext)
  const { password, handleDecrementPassword, handleIncrementPassword } = usePassword()

  const [buttonLowerCase, setButtonLowerCase] = React.useState<boolean>(false)
  const [buttonUpperCase, setButtonUppercase] = React.useState<boolean>(false)
  const [buttonCharacter, setButtonCharacter] = React.useState<boolean>(false)
  const [buttonNumber, setButtonNumber] = React.useState<boolean>(false)
  const [isCopyButtonActive, setIsCopyButtonActive] = React.useState<boolean>(false)

  function handleToggleCopyButton() {
    setIsCopyButtonActive(true)
  }

  return (
    <Container>
      <main>
        <strong>
          Selecione um número entre 6 e 20
          <Icon.ArrowBendRightDown />
        </strong>

        <InputGenerator>
          <button type="button" onClick={handleDecrementPassword}>
            <Icon.Minus size={24} />
          </button>
          <form id="form-password">
            <input value={password} type="number" />
          </form>
          <button type="button" onClick={handleIncrementPassword}>
            <Icon.Plus size={24} />
          </button>
        </InputGenerator>

        <strong>
          <Icon.ArrowBendLeftDown />
          Escolha a personalização
        </strong>

        <ButtonsType>
          <ToggleRoot pressed={buttonLowerCase} onPressedChange={setButtonLowerCase}>
            <span>abc</span>
          </ToggleRoot>
          <ToggleRoot pressed={buttonUpperCase} onPressedChange={setButtonUppercase}>
            <span>ABC</span>
          </ToggleRoot>
          <ToggleRoot pressed={buttonCharacter} onPressedChange={setButtonCharacter}>
            <span>&@#</span>
          </ToggleRoot>
          <ToggleRoot pressed={buttonNumber} onPressedChange={setButtonNumber}>
            <span>123</span>
          </ToggleRoot>
        </ButtonsType>

        <strong>
          Copie após clicar em Gerar senha
          <Icon.ArrowBendRightDown />
        </strong>

        <ResultContainer>
          <input type="text" />
          <button onClick={handleToggleCopyButton} type="button">
            {isCopyButtonActive ? (
              <Icon.CheckSquareOffset size={24} weight="bold" color={COLORS.green[200]} />
            ) : (
              <Icon.Copy size={24} weight="duotone" />
            )}
          </button>
        </ResultContainer>

        <ButtonGeneratePassword form="form-password" type="button">
          Gerar senha
          <Icon.ArrowRight weight="bold" />
        </ButtonGeneratePassword>
      </main>
    </Container>
  )
}
