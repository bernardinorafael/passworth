import * as React from "react"

type PasswordContextType = {
  password: number
  getNumbers: () => string
  getSymbols: () => string
  getLetterLowerCase: () => string
  getLetterUpperCase: () => string
  handleDecrementPassword: () => void
  handleIncrementPassword: () => void
}

export const PasswordContext = React.createContext<PasswordContextType | null>(null)

export function PasswordProvider({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = React.useState<number>(8)

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const symbols = ["!", "@", "#", "$", "%", "&", "*", "/", "[", ">", "+"]

  function getLetterUpperCase() {
    const random = Math.floor(Math.random() * 10 + 65)
    const letterUpperCase = String.fromCharCode(random)

    return letterUpperCase
  }

  function getLetterLowerCase() {
    const random = Math.floor(Math.random() * 10 + 97)
    const letterLowerCase = String.fromCharCode(random)

    return letterLowerCase
  }

  function getSymbols() {
    const random = Math.floor(Math.random() * symbols.length)
    return symbols[random]
  }

  function getNumbers() {
    const random = Math.floor(Math.random() * numbers.length)
    return numbers[random].toString()
  }

  function handleDecrementPassword() {
    if (password <= 8) return
    setPassword(password - 1)
  }

  function handleIncrementPassword() {
    if (password >= 24) return
    setPassword(password + 1)
  }

  return (
    <PasswordContext.Provider
      value={{
        password,
        getNumbers,
        getSymbols,
        getLetterLowerCase,
        getLetterUpperCase,
        handleDecrementPassword,
        handleIncrementPassword,
      }}
    >
      {children}
    </PasswordContext.Provider>
  )
}

export default function usePassword() {
  const context = React.useContext(PasswordContext)

  if (!context) throw new Error("usePassword cant be used outside PasswordContext")

  return context
}
