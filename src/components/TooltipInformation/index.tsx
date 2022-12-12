import * as Tooltip from "@radix-ui/react-tooltip"
import { TooltipContent } from "./styles"

type TooltipDateProps = {
  content: React.ReactNode
}

export default function TooltipInformation({ content }: TooltipDateProps) {
  return (
    <Tooltip.Portal>
      <TooltipContent arrowPadding={10} alignOffset={100} sideOffset={5}>
        {content}
      </TooltipContent>
    </Tooltip.Portal>
  )
}
