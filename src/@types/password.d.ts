export type Password = {
  id: string
  passwordLength: number
  password: string
  createdAt: Date
  updatedAt?: Date
  hasNumber: boolean | null
  hasSymbol: boolean | null
  hasLowercase: boolean | null
  hasUppercase: boolean | null
  description: string
}
