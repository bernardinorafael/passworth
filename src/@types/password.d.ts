export type Password = {
  id: string
  createdAt: Date
  password: string
  description: string
  passwordLength: number
  hasNumber: boolean
  hasSymbol: boolean
  hasLowercase: boolean
  hasUppercase: boolean
}
