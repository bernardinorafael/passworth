import { zodResolver } from "@hookform/resolvers/zod"
import * as Popover from "@radix-ui/react-popover"
import { CircleNotch } from "phosphor-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import usePasswordContext from "../../context/PasswordContext"
import { PopoverArrow, PopoverContent } from "./styles"

const editDescriptionSchemaValidation = z.object({
  description: z.string(),
})

type NewFormEditDescription = z.infer<typeof editDescriptionSchemaValidation>

type PopoverEditDescPasswordProps = {
  description: string
  id: string
  handleClosePopoverEditDescription: () => void
}

export default function PopoverEditDescPassword({
  id,
  description,
  handleClosePopoverEditDescription,
}: PopoverEditDescPasswordProps) {
  const { updateDescription } = usePasswordContext()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewFormEditDescription>({
    resolver: zodResolver(editDescriptionSchemaValidation),
  })

  async function handleEditDescriptionPassword(data: NewFormEditDescription) {
    await new Promise((resolve) => setTimeout(resolve, 800))
    updateDescription(id, data.description)
    handleClosePopoverEditDescription()
  }

  return (
    <Popover.Portal>
      <PopoverContent sideOffset={8} side="left">
        <PopoverArrow height={8} width={16} />

        <form onSubmit={handleSubmit(handleEditDescriptionPassword)}>
          <input defaultValue={description} type="text" {...register("description")} />

          <button disabled={isSubmitting} type="submit">
            {!isSubmitting ? "confirmar" : <CircleNotch weight="bold" size={20} />}
          </button>
        </form>
      </PopoverContent>
    </Popover.Portal>
  )
}
