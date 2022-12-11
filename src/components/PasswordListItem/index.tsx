import * as AlertDialog from "@radix-ui/react-alert-dialog"
import * as Popover from "@radix-ui/react-popover"
import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import {
  CheckSquareOffset,
  Copy,
  Eye,
  EyeClosed,
  PencilSimple,
  TrashSimple,
} from "phosphor-react"
import * as React from "react"
import usePasswordContext from "../../context/PasswordContext"
import AlertDialogDeleteItem from "../AlertDialogDeleteItem"
import PopoverEditDescPassword from "../PopoverEditDescPassword"
import { ButtonAction, PasswordItem } from "./styles"

type PasswordListItemProps = {
  id: string
  createdAt: Date
  password: string
  description: string
}

export default function PasswordListItem(props: PasswordListItemProps) {
  const { deletePasswordItem } = usePasswordContext()

  const [isPasswordRevealedButton, setIsPasswordRevealedButton] = React.useState(false)
  const [isPopoverEditOpen, setIsPopoverEditOpen] = React.useState(false)
  const [isCopyButtonActive, setIsCopyButtonActive] = React.useState(false)

  const createdDateFormatted = format(
    new Date(props.createdAt),
    "d 'de' LLLL 'às' HH:mm",
    {
      locale: ptBR,
    }
  )

  const createdAt = formatDistanceToNow(new Date(props.createdAt!), {
    addSuffix: true,
    locale: ptBR,
  })

  function handleClosePopoverEditDescription() {
    setIsPopoverEditOpen(!isPopoverEditOpen)
  }

  function handleCopyPassword() {
    navigator.clipboard.writeText(props.password)
    setIsCopyButtonActive(true)

    // setTimeout(() => {
    //   setIsCopyButtonActive(false)
    // }, 1500)
  }

  function handleToggleRevealedPassword() {
    setIsPasswordRevealedButton(!isPasswordRevealedButton)
  }

  return (
    <tr>
      <td>{props.description}</td>

      <PasswordItem>
        {isPasswordRevealedButton ? props.password : "************"}
      </PasswordItem>

      <td>
        <time title={createdDateFormatted} dateTime={props.createdAt.toString()}>
          {createdAt}
        </time>
      </td>

      <td>
        <ButtonAction title="copiar senha" onClick={handleCopyPassword}>
          {!isCopyButtonActive ? (
            <Copy size={18} weight="bold" />
          ) : (
            <CheckSquareOffset size={18} weight="bold" />
          )}
        </ButtonAction>

        <ButtonAction title="revelar senha" onClick={handleToggleRevealedPassword}>
          {isPasswordRevealedButton ? (
            <Eye size={18} weight="bold" />
          ) : (
            <EyeClosed size={18} weight="bold" />
          )}
        </ButtonAction>

        <AlertDialog.Root>
          <AlertDialog.Trigger asChild>
            <ButtonAction title="excluir senha">
              <TrashSimple size={18} weight="bold" />
            </ButtonAction>
          </AlertDialog.Trigger>

          <AlertDialogDeleteItem id={props.id} deletePasswordItem={deletePasswordItem} />
        </AlertDialog.Root>

        <Popover.Root
          open={isPopoverEditOpen}
          onOpenChange={handleClosePopoverEditDescription}
        >
          <Popover.Trigger asChild>
            <ButtonAction title="editar descrição">
              <PencilSimple size={18} weight="bold" />
            </ButtonAction>
          </Popover.Trigger>

          <PopoverEditDescPassword
            id={props.id}
            description={props.description}
            handleClosePopoverEditDescription={handleClosePopoverEditDescription}
          />
        </Popover.Root>
      </td>
    </tr>
  )
}
