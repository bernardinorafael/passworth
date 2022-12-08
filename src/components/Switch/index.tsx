import { SwitchRoot, SwitchThumb } from "./styles"

type SwitchProps = {
  checked: boolean
  onClick: () => void
  onCheckedChange: () => void
  defaultChecked: boolean | null
}

export default function Switch({
  checked,
  onClick,
  defaultChecked,
  onCheckedChange,
}: SwitchProps) {
  return (
    <SwitchRoot
      onClick={onClick}
      checked={checked}
      defaultChecked={defaultChecked!}
      onCheckedChange={onCheckedChange}
    >
      <SwitchThumb />
    </SwitchRoot>
  )
}
