import { Content, Arrow } from "@radix-ui/react-popover"
import styled, { keyframes } from "styled-components"

const slideLeftAnimation = keyframes`
	from {
		opacity: 0.5;
    transform: translateX(5px);
  }
	to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const PopoverContent = styled(Content)`
  animation: ${slideLeftAnimation} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${({ theme }) => theme.COLORS.base[600]};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 0.5rem;
  position: relative;
  transform-origin: var(--radix-popover-content-transform-origin);
  z-index: 101;

  span {
    font-weight: 600;
  }
`

export const PopoverArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.COLORS.base[600]};
`
