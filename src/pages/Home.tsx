import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from "@radix-ui/react-dialog"
import "animate.css"
import { Minus, Plus } from "phosphor-react"
import * as React from "react"
import { Controller, FormProvider, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { z } from "zod"
import NewPasswordDialog from "../components/NewPasswordDialog"
import Switch from "../components/Switch"
import usePasswordContext from "../context/PasswordContext"
import {
  Container,
  GeneratePasswordButton,
  TypeCharacterContainer,
} from "../css/pages/Home"

const newPasswordValidationSchema = z.object({
  passwordLength: z.number(),
  hasNumber: z.boolean(),
  password: z.string(),
  hasSymbol: z.boolean(),
  hasUppercase: z.boolean(),
  hasLowercase: z.boolean(),
  description: z.string().min(1, "campo obrigatório."),
})

type NewPasswordFormProps = z.infer<typeof newPasswordValidationSchema>

export default function HomeScreen() {
  const {
    passwordLength,
    isNumberActive,
    isSymbolActive,
    isUppercaseActive,
    isLowercaseActive,
    resetPasswordLength,
    handleToggleLowerButton,
    handleToggleUpperButton,
    decrementPasswordLength,
    resetSwitchesState,
    incrementPasswordLength,
    handleToggleNumberButton,
    handleToggleSymbolButton,
    createNewItemListPassword,
  } = usePasswordContext()

  const [isDialogResultOpen, setIsDialogResultOpen] = React.useState(false)

  const newPasswordForm = useForm<NewPasswordFormProps>({
    resolver: zodResolver(newPasswordValidationSchema),
    defaultValues: {
      hasNumber: true,
      hasSymbol: true,
      hasLowercase: true,
      hasUppercase: true,
    },
  })

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = newPasswordForm

  async function handleCreateNewPassword(data: NewPasswordFormProps) {
    await new Promise((resolve) => setTimeout(resolve, 500))

    createNewItemListPassword(data)

    resetSwitchesState()
    resetPasswordLength()
    setIsDialogResultOpen(true)

    reset()
  }

  return (
    <Container>
      <main className=" animate__animated animate__fadeIn">
        <h1>
          gere uma senha segura. <br /> administre no painel{" "}
          <Link to="/history">histórico</Link>.
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
                <Minus weight="bold" size={20} />
              </button>
              <button type="button" onClick={incrementPasswordLength}>
                <Plus weight="bold" size={20} />
              </button>
            </div>

            <input
              max={24}
              type="number"
              value={passwordLength}
              {...register("passwordLength", { valueAsNumber: true })}
            />
          </TypeCharacterContainer>

          <TypeCharacterContainer>
            <strong>selecione para adicionar caracteres especiais:</strong>
            <Controller
              control={control}
              name="hasSymbol"
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <Switch
                    checked={isSymbolActive}
                    defaultChecked={field.value}
                    onCheckedChange={field.onChange}
                    onClick={handleToggleSymbolButton}
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
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <Switch
                    checked={isNumberActive}
                    defaultChecked={field.value}
                    onCheckedChange={field.onChange}
                    onClick={handleToggleNumberButton}
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
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <Switch
                    checked={isUppercaseActive}
                    defaultChecked={field.value}
                    onCheckedChange={field.onChange}
                    onClick={handleToggleUpperButton}
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
              rules={{ required: true }}
              render={({ field }) => {
                return (
                  <Switch
                    checked={isLowercaseActive}
                    defaultChecked={field.value}
                    onCheckedChange={field.onChange}
                    onClick={handleToggleLowerButton}
                  />
                )
              }}
            />
          </TypeCharacterContainer>

          <Dialog.Root open={isDialogResultOpen} onOpenChange={setIsDialogResultOpen}>
            <GeneratePasswordButton
              type="submit"
              disabled={isSubmitting || !!errors.description?.message}
            >
              {isSubmitting ? "gerando senha" : "gerar senha"}
            </GeneratePasswordButton>

            <FormProvider {...newPasswordForm}>
              <NewPasswordDialog />
            </FormProvider>
          </Dialog.Root>
        </form>
      </main>
    </Container>
  )
}
