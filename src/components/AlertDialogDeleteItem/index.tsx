import * as AlertDialog from "@radix-ui/react-alert-dialog"
import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  ButtonCancel,
  ButtonConfirmDelete,
} from "./styles"

type AlertDialogDeleteItemProps = {
  deletePasswordItem: (id: string) => void
  id: string
}

export default function AlertDialogDeleteItem({
  deletePasswordItem,
  id,
}: AlertDialogDeleteItemProps) {
  return (
    <AlertDialog.Portal>
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogTitle>você tem certeza?</AlertDialogTitle>
        <AlertDialogDescription>
          isso excluirá a senha permanentemente.
        </AlertDialogDescription>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <AlertDialog.Cancel asChild>
            <ButtonCancel>cancelar</ButtonCancel>
          </AlertDialog.Cancel>

          <AlertDialog.Action autoFocus onClick={() => deletePasswordItem(id)} asChild>
            <ButtonConfirmDelete>excluir senha</ButtonConfirmDelete>
          </AlertDialog.Action>
        </div>
      </AlertDialogContent>
    </AlertDialog.Portal>
  )
}
