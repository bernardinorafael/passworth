/* eslint-disable no-unused-vars */
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
  password: string
  passwordLength: number
  passwordList: Password[]
  isSymbolActive: boolean
  isNumberActive: boolean
  isUppercaseActive: boolean
  isLowercaseActive: boolean

  resetPasswordLength: () => void
  handleToggleSymbolButton: () => void
  handleToggleNumberButton: () => void
  handleToggleUpperButton: () => void
  handleToggleLowerButton: () => void
  decrementPasswordLength: () => void
  incrementPasswordLength: () => void
  generateNewRandomPassword: () => void
  deletePasswordItem: (id: string) => void
  createNewItemListPassword: (data: NewListPassword) => void
  updateDescription: (id: string, description: string) => void
}

export const PasswordContext = React.createContext<PasswordContextType | null>(null)

export function PasswordProvider({ children }: { children: React.ReactNode }) {
  const { getLowercase, getNumber, getSymbol, getUppercase } = useRandomCharContext()

  const [password, setPassword] = React.useState("")
  const [passwordLength, setPasswordLength] = React.useState(8)
  const [isSymbolActive, setIsSymbolActive] = React.useState(true)
  const [isNumberActive, setIsNumberActive] = React.useState(true)
  const [isUppercaseActive, setIsUppercaseActive] = React.useState(true)
  const [isLowercaseActive, setIsLowercaseActive] = React.useState(true)

  const [passwordList, setPasswordList] = React.useState<Password[]>(() => {
    const storedPassword = localStorage.getItem("BERNARDINO:PASSWORD-LIST")

    if (storedPassword) return JSON.parse(storedPassword)
    else return []
  })

  React.useEffect(() => {
    const passwordListJSON = JSON.stringify(passwordList)
    localStorage.setItem("BERNARDINO:PASSWORD-LIST", passwordListJSON)
  }, [passwordList])

  function handleToggleSymbolButton() {
    setIsSymbolActive(!isSymbolActive)
  }

  function handleToggleNumberButton() {
    setIsNumberActive(!isNumberActive)
  }

  function handleToggleUpperButton() {
    setIsUppercaseActive(!isUppercaseActive)
  }

  function handleToggleLowerButton() {
    setIsLowercaseActive(!isLowercaseActive)
  }

  function updateDescription(id: string, description: string) {
    setPasswordList((passwordList) => {
      const newPasswordList = passwordList.map((password) => {
        if (password.id === id) {
          return { ...password, description, createdAt: new Date() }
        } else return password
      })

      return newPasswordList.sort((a, b) => {
        return new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
      })
    })
  }

  function deletePasswordItem(id: string) {
    const newPasswordList = passwordList.filter((password) => {
      return password.id !== id
    })

    setPasswordList(newPasswordList)
  }

  function generateNewRandomPassword() {
    let password = ""

    const randomFunction = []

    if (isUppercaseActive) randomFunction.push(getUppercase)
    if (isLowercaseActive) randomFunction.push(getLowercase)
    if (isSymbolActive) randomFunction.push(getSymbol)
    if (isNumberActive) randomFunction.push(getNumber)

    if (randomFunction.length >= 0) generateRandomCharacter(randomFunction)

    function generateRandomCharacter(value: (() => void)[]) {
      for (let i = 0; i < passwordLength; i++) {
        const randomIndex = value[Math.floor(Math.random() * value.length)]()
        password += randomIndex
      }

      return password
    }

    setPassword(password)
    return password
  }

  function createNewItemListPassword(data: NewListPassword) {
    const password = generateNewRandomPassword()

    setPasswordList((state) => [
      {
        id: uuid(),
        passwordLength,
        createdAt: new Date(),
        password,
        hasNumber: data.hasNumber,
        hasSymbol: data.hasSymbol,
        description: data.description,
        hasLowercase: data.hasLowercase,
        hasUppercase: data.hasUppercase,
      },
      ...state,
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
        isNumberActive,
        isSymbolActive,
        passwordLength,
        isLowercaseActive,
        isUppercaseActive,
        updateDescription,
        deletePasswordItem,
        resetPasswordLength,
        decrementPasswordLength,
        handleToggleLowerButton,
        handleToggleUpperButton,
        incrementPasswordLength,
        handleToggleNumberButton,
        handleToggleSymbolButton,
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
