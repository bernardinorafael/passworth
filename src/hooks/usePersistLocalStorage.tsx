import * as React from "react"

type Response<T> = [T, React.Dispatch<React.SetStateAction<T>>]

export default function usePersistLocalStorage<T>(
  key: string,
  initialValue: any
): Response<T> {
  const [state, setState] = React.useState(() => {
    const storageTheme = localStorage.getItem(key)

    if (storageTheme) return JSON.parse(storageTheme)
    return initialValue
  })

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
