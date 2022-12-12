import { Content, Arrow } from "@radix-ui/react-tooltip"
import styled from "styled-components"

export const TooltipContent = styled(Content)`
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.base[700]};
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 20px 30px -10px;
`

export const TooltipArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.COLORS.base[700]};
`
