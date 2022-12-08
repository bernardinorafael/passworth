import * as React from "react"

type PasswordContextType = {
  passwordLength: number
  password: string[]
  incrementPasswordLength: () => void
  decrementPasswordLength: () => void
  resetPasswordLength: () => void
}

export const PasswordContext = React.createContext<PasswordContextType | null>(null)

export function PasswordProvider({ children }: { children: React.ReactNode }) {
  const [password] = React.useState<string[]>(["kjdD*46Df1mWO@("])
  const [passwordLength, setPasswordLength] = React.useState(8)

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
        passwordLength,
        resetPasswordLength,
        decrementPasswordLength,
        incrementPasswordLength,
      }}
    >
      {children}
    </PasswordContext.Provider>
  )
}

export default function usePasswordContext() {
  const context = React.useContext(PasswordContext)

  if (!context) throw new Error("usePassword cant be used outside PasswordContext")

  return context
}
