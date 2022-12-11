import * as Dialog from "@radix-ui/react-dialog"
import * as Icon from "phosphor-react"
import * as React from "react"
import { useFormContext } from "react-hook-form"
import usePasswordContext from "../../context/PasswordContext"
import { CopyPasswordButton, DialogClose, DialogContent, DialogTitle } from "./styles"

export default function NewPasswordDialog() {
  const { password } = usePasswordContext()
  const { register } = useFormContext()
  const [isCopyButtonActive, setIsCopyButtonActive] = React.useState(false)

  function handleCopyPassword() {
    navigator.clipboard.writeText(password)
    setIsCopyButtonActive(true)

    setTimeout(() => {
      setIsCopyButtonActive(false)
    }, 1000)
  }

  return (
    <Dialog.Portal>
      <DialogContent>
        <DialogClose>
          <Icon.X size={32} weight="bold" />
        </DialogClose>

        <div>
          <DialogTitle>
            sua senha foi gerada. <br /> clique abaixo para copiar.
          </DialogTitle>

          <div>
            <input
              value={password}
              type="text"
              {...register("password", {
                value: password,
              })}
            />

            <CopyPasswordButton onClick={handleCopyPassword}>
              {!isCopyButtonActive ? "copiar senha" : "copiado"}
            </CopyPasswordButton>
          </div>

          <span>pressione esc para sair</span>
        </div>
      </DialogContent>
    </Dialog.Portal>
  )
}
