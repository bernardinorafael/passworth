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
  const {
    password,
    getNumbers,
    getSymbols,
    getLetterLowerCase,
    getLetterUpperCase,
    handleDecrementPassword,
    handleIncrementPassword,
  } = usePassword()

  const [buttonLowerCase, setButtonLowerCase] = React.useState<boolean>(false)
  const [buttonUpperCase, setButtonUppercase] = React.useState<boolean>(false)
  const [buttonCharacter, setButtonCharacter] = React.useState<boolean>(false)
  const [buttonNumber, setButtonNumber] = React.useState<boolean>(false)
  const [passwordGenerated, setPasswordGenerated] = React.useState("")
  const [isCopyButtonActive, setIsCopyButtonActive] = React.useState<boolean>(false)

  function handleGeneratePassword(
    getNumbers: () => string,
    getSymbols: () => string,
    getLetterLowerCase: () => string,
    getLetterUpperCase: () => string
  ) {
    const buttonGenerators = [getLetterLowerCase, getLetterUpperCase, getNumbers, getSymbols]

    setPasswordGenerated("")
    setIsCopyButtonActive(false)

    for (let i = 0; i < password; i = i + buttonGenerators.length) {
      buttonGenerators.forEach(() => {
        const random = Math.floor(Math.random() * buttonGenerators.length)
        const randomFunctionGenerator = buttonGenerators[random]()

        setPasswordGenerated((state) =>
          [...state, randomFunctionGenerator].join("").slice(0, password)
        )
      })
    }
  }

  function handleToggleCopyButton() {
    if (passwordGenerated) navigator.clipboard.writeText(passwordGenerated)
    setIsCopyButtonActive(true)
  }

  return (
    <Container>
      <main>
        <strong>
          Selecione um número entre 8 e 24
          <Icon.ArrowBendRightDown />
        </strong>

        <InputGenerator>
          <button type="button" onClick={handleDecrementPassword}>
            <Icon.Minus size={24} />
          </button>
          <input value={password} type="number" />
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
          <input value={passwordGenerated} type="text" />
          <button onClick={handleToggleCopyButton} type="button">
            {isCopyButtonActive ? (
              <Icon.CheckSquareOffset size={24} weight="bold" color={COLORS.green[200]} />
            ) : (
              <Icon.Copy size={24} weight="duotone" />
            )}
          </button>
        </ResultContainer>

        <ButtonGeneratePassword
          onClick={() =>
            handleGeneratePassword(
              getNumbers,
              getSymbols,
              getLetterLowerCase,
              getLetterUpperCase
            )
          }
          type="button"
        >
          Gerar senha
          <Icon.ArrowRight weight="bold" />
        </ButtonGeneratePassword>
      </main>
    </Container>
  )
}
