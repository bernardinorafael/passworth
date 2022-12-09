import * as React from "react"
import { v4 as uuid } from "uuid"
import { Password } from "../@types/password.d"
import useRandomCharContext from "./RandomCharContext"

type NewListPassword = {
  passwordLength: number
  hasNumber: boolean | null
  hasSymbol: boolean | null
  hasLowercase: boolean | null
  hasUppercase: boolean | null
  description: string
  password: string
}

type PasswordContextType = {
  passwordLength: number
  password: string
  passwordList: Password[]
  resetPasswordLength: () => void
  decrementPasswordLength: () => void
  incrementPasswordLength: () => void
  generateNewRandomPassword: () => void
  createNewItemListPassword: (data: NewListPassword) => void
}

export const PasswordContext = React.createContext<PasswordContextType | null>(null)

export function PasswordProvider({ children }: { children: React.ReactNode }) {
  const { getLowercase, getNumber, getSymbol, getUppercase } = useRandomCharContext()
  const [password, setPassword] = React.useState("")
  const [passwordList, setPasswordList] = React.useState<Password[]>([])
  const [passwordLength, setPasswordLength] = React.useState(8)

  function generateNewRandomPassword() {
    setPassword("")

    let newPassword = password

    const randomFunction = [getLowercase, getNumber, getSymbol, getUppercase]

    for (let i = 0; i < passwordLength; i += randomFunction.length) {
      randomFunction.forEach(() => {
        const randomIndex =
          randomFunction[Math.floor(Math.random() * randomFunction.length)]()

        newPassword += randomIndex
      })
    }

    setPassword(newPassword)
    return newPassword
  }

  function createNewItemListPassword(data: NewListPassword) {
    const newPassword = generateNewRandomPassword()

    setPasswordList((state) => [
      ...state,
      {
        id: uuid(),
        createdAt: new Date(),
        password: newPassword,
        hasNumber: data.hasNumber,
        hasSymbol: data.hasSymbol,
        description: data.description,
        hasUppercase: data.hasUppercase,
        hasLowercase: data.hasLowercase,
        passwordLength,
      },
    ])
  }

  function resetPasswordLength() {
    setPasswordLength(8)
  }

  function decrementPasswordLength() {
    if (passwordLength <= 8) return
    setPasswordLength(passwordLength - 1)
  }

  function incrementPasswordLength() {
    if (passwordLength >= 24) return
    setPasswordLength(passwordLength + 1)
  }

  return (
    <PasswordContext.Provider
      value={{
        password,
        passwordList,
        passwordLength,
        resetPasswordLength,
        decrementPasswordLength,
        incrementPasswordLength,
        createNewItemListPassword,
        generateNewRandomPassword,
      }}
    >
      {children}
    </PasswordContext.Provider>
  )
}

export default function usePasswordContext() {
  const context = React.useContext(PasswordContext)

  if (!context) throw new Error("usePasswordContext cant be used outside PasswordContext")

  return context
}
