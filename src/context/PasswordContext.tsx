import * as React from "react"

type PasswordContextType = {}

export const PasswordContext = React.createContext<PasswordContextType | null>(null)

export function PasswordProvider({ children }: { children: React.ReactNode }) {
  return <PasswordContext.Provider value={{}}>{children}</PasswordContext.Provider>
}

export default function usePasswordContext() {
  const context = React.useContext(PasswordContext)

  if (!context) throw new Error("usePassword cant be used outside PasswordContext")

  return context
}
