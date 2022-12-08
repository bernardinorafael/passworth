import * as Dialog from "@radix-ui/react-dialog"
import * as React from "react"
import * as Icon from "phosphor-react"
import usePasswordContext from "../../context/PasswordContext"
import { CopyPasswordButton, DialogClose, DialogContent, Title } from "./styles"
import { Link } from "react-router-dom"

export default function NewPasswordDialog() {
  const { password } = usePasswordContext()
  const [isCopyButtonActive, setIsCopyButtonActive] = React.useState(false)

  function handleCopyPassword() {
    navigator.clipboard.writeText(password.join(""))
    setIsCopyButtonActive(true)
  }

  return (
    <Dialog.Portal>
      <DialogContent>
        <DialogClose>
          <Icon.X size={32} weight="bold" />
        </DialogClose>

        <div>
          <Title>
            sua senha foi gerada. <br /> clique abaixo para copiar.
          </Title>

          <div>
            <input value={password} type="text" readOnly />
            <CopyPasswordButton onClick={handleCopyPassword}>
              {!isCopyButtonActive ? "copiar senha" : "copiado"}
            </CopyPasswordButton>
          </div>
        </div>

        <Link to="/">voltar para o início</Link>
      </DialogContent>
    </Dialog.Portal>
  )
}
