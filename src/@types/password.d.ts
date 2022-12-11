export type Password = {
  id: string
  createdAt: Date
  password: string
  description: string
  passwordLength: number
  hasNumber: boolean | null
  hasSymbol: boolean | null
  hasLowercase: boolean | null
  hasUppercase: boolean | null
}
