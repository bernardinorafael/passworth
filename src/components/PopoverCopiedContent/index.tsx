import * as Popover from "@radix-ui/react-popover"
import { PopoverContent, PopoverArrow } from "./styles"

export default function PopoverCopiedContent() {
  return (
    <Popover.Portal>
      <PopoverContent sideOffset={5} side="left">
        <PopoverArrow height={5} width={10} />
        <span>copiado</span>
      </PopoverContent>
    </Popover.Portal>
  )
}
