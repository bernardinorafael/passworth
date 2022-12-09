import * as React from "react"

type RandomCharContextProps = {
  getLowercase: () => string
  getUppercase: () => string
  getSymbol: () => string
  getNumber: () => string
}

export const RandomCharContext = React.createContext<RandomCharContextProps | null>(null)

export function RandomCharProvider({ children }: { children: React.ReactNode }) {
  function getLowercase() {
    const randomIndex = Math.floor(Math.random() * 10 + 97)
    const randomLowercase = String.fromCharCode(randomIndex)

    return randomLowercase
  }

  function getUppercase() {
    const randomIndex = Math.floor(Math.random() * 10 + 65)
    const randomUppercase = String.fromCharCode(randomIndex)

    return randomUppercase
  }

  function getSymbol() {
    const symbols = ["!", "@", "#", "$", "%", "&", "*", "/", "[", ">", "+"]
    return symbols[Math.floor(Math.random() * symbols.length)]
  }

  function getNumber() {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return String(numbers[Math.floor(Math.random() * numbers.length)])
  }

  return (
    <RandomCharContext.Provider
      value={{
        getNumber,
        getSymbol,
        getLowercase,
        getUppercase,
      }}
    >
      {children}
    </RandomCharContext.Provider>
  )
}

export default function useRandomCharContext() {
  const context = React.useContext(RandomCharContext)

  if (!context) {
    throw new Error("useRandomCharContext cannot be used outside RandomCharContext")
  }

  return context
}
