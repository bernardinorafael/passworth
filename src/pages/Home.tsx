import { zodResolver } from "@hookform/resolvers/zod"
import * as Icon from "phosphor-react"
import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { Controller, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"
import Switch from "../components/Switch"
import usePasswordContext from "../context/PasswordContext"
import {
  Container,
  GeneratePasswordButton,
  TypeCharacterContainer,
} from "../css/pages/Home"
import NewPasswordDialog from "../components/NewPasswordDialog"

const newPasswordValidationSchema = z.object({
  length: z.number(),
  description: z.string().min(1, "campo obrigatório."),
  hasNumber: z.boolean().nullable(),
  hasSymbol: z.boolean().nullable(),
  hasUppercase: z.boolean().nullable(),
  hasLowercase: z.boolean().nullable(),
})

type NewPasswordFormProps = z.infer<typeof newPasswordValidationSchema>

export default function HomeScreen() {
  const {
    passwordLength,
    resetPasswordLength,
    decrementPasswordLength,
    incrementPasswordLength,
  } = usePasswordContext()

  const [isDialogResultOpen, setIsDialogResultOpen] = React.useState(false)
  const [isSymbolActive, setIsSymbolActive] = React.useState(true)
  const [isNumberActive, setIsNumberActive] = React.useState(true)
  const [isUppercaseActive, setIsUppercaseActive] = React.useState(true)
  const [isLowercaseActive, setIsLowercaseActive] = React.useState(true)

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NewPasswordFormProps>({
    resolver: zodResolver(newPasswordValidationSchema),
    defaultValues: {
      hasNumber: true,
      hasLowercase: true,
      hasUppercase: true,
      hasSymbol: true,
      length: 8,
    },
  })

  async function handleCreateNewPassword(data: NewPasswordFormProps) {
    await new Promise((resolve) => setTimeout(resolve, 500))

    console.log(data)

    resetPasswordLength()
    setIsSymbolActive(true)
    setIsNumberActive(true)
    setIsUppercaseActive(true)
    setIsLowercaseActive(true)
    setIsDialogResultOpen(true)

    reset()
  }

  function handleActiveSymbolButton() {
    setIsSymbolActive(!isSymbolActive)
  }

  function handleActiveNumberButton() {
    setIsNumberActive(!isNumberActive)
  }

  function handleActiveUppercaseButton() {
    setIsUppercaseActive(!isUppercaseActive)
  }

  function handleActiveLowercaseButton() {
    setIsLowercaseActive(!isLowercaseActive)
  }

  return (
    <Container>
      <main>
        <h1>
          gere uma senha segura. <br /> administre no painel{" "}
          <Link to="/history">Histórico</Link>.
        </h1>

        <form onSubmit={handleSubmit(handleCreateNewPassword)}>
          <TypeCharacterContainer error={!!errors.description?.message}>
            <strong>dê um nome para a sua senha.</strong>
            <input
              autoFocus
              type="text"
              {...register("description")}
              placeholder={errors.description?.message}
            />
          </TypeCharacterContainer>

          <TypeCharacterContainer>
            <strong>digite um número de caracteres.</strong>

            <div>
              <button type="button" onClick={decrementPasswordLength}>
                <Icon.Minus weight="bold" size={20} />
              </button>
              <button type="button" onClick={incrementPasswordLength}>
                <Icon.Plus weight="bold" size={20} />
              </button>
            </div>

            <input
              min={8}
              max={24}
              type="number"
              value={passwordLength}
              {...register("length", { valueAsNumber: true })}
            />
          </TypeCharacterContainer>

          <TypeCharacterContainer>
            <strong>selecione para adicionar caracteres especiais:</strong>
            <Controller
              control={control}
              name="hasSymbol"
              render={({ field }) => {
                return (
                  <Switch
                    checked={isSymbolActive}
                    defaultChecked={field.value}
                    onCheckedChange={field.onChange}
                    onClick={handleActiveSymbolButton}
                  />
                )
              }}
            />
          </TypeCharacterContainer>

          <TypeCharacterContainer>
            <strong>selecione para adicionar números:</strong>
            <Controller
              control={control}
              name="hasNumber"
              render={({ field }) => {
                return (
                  <Switch
                    checked={isNumberActive}
                    defaultChecked={field.value}
                    onCheckedChange={field.onChange}
                    onClick={handleActiveNumberButton}
                  />
                )
              }}
            />
          </TypeCharacterContainer>

          <TypeCharacterContainer>
            <strong>selecione para adicionar letras maiúsculas:</strong>
            <Controller
              control={control}
              name="hasUppercase"
              render={({ field }) => {
                return (
                  <Switch
                    checked={isUppercaseActive}
                    defaultChecked={field.value}
                    onCheckedChange={field.onChange}
                    onClick={handleActiveUppercaseButton}
                  />
                )
              }}
            />
          </TypeCharacterContainer>

          <TypeCharacterContainer>
            <strong>selecione para adicionar letras minúsculas:</strong>
            <Controller
              control={control}
              name="hasLowercase"
              render={({ field }) => {
                return (
                  <Switch
                    checked={isLowercaseActive}
                    defaultChecked={field.value}
                    onCheckedChange={field.onChange}
                    onClick={handleActiveLowercaseButton}
                  />
                )
              }}
            />
          </TypeCharacterContainer>

          <Dialog.Root open={isDialogResultOpen} onOpenChange={setIsDialogResultOpen}>
            <GeneratePasswordButton
              disabled={isSubmitting || !!errors.description?.message}
              type="submit"
            >
              {isSubmitting ? "gerando senha" : "gerar senha"}
            </GeneratePasswordButton>

            <NewPasswordDialog />
          </Dialog.Root>
        </form>
      </main>
    </Container>
  )
}
