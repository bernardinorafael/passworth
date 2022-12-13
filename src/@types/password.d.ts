export type Password = {
  id: string
  createdAt: Date
  password: string
  hasNumber: boolean
  hasSymbol: boolean
  description: string
  hasLowercase: boolean
  hasUppercase: boolean
  passwordLength: number
}
