import * as React from "react"

type PasswordContextType = {
  password: number
  handleDecrementPassword: () => void
  handleIncrementPassword: () => void
}

export const PasswordContext = React.createContext<PasswordContextType | null>(null)

export function PasswordProvider({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = React.useState<number>(6)
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const symbols = ["!", "@", "#", "$", "%", "&", "*", "/", "+", ">", "["]
  const characters = Array.from(Array(26).map((_, i) => i + 97))
  const lowerCaseCharacters = characters.map((item) => String.fromCharCode(item))
  const upperCaseCharacters = lowerCaseCharacters.map((item) => item.toUpperCase())

  function handleDecrementPassword() {
    if (password <= 6) return
    setPassword(password - 1)
  }

  function handleIncrementPassword() {
    if (password >= 20) return
    setPassword(password + 1)
  }

  return (
    <PasswordContext.Provider
      value={{
        password,
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
