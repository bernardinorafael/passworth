import { Content, Arrow } from "@radix-ui/react-popover"
import styled, { keyframes } from "styled-components"

const slideLeftAnimation = keyframes`
	from {
		opacity: 0.3;
    transform: translateX(10px);
  }
	to {
    opacity: 1;
    transform: translateX(0);
  }
`

const spinnerLoading = keyframes`
	100% {
		transform: rotate(360deg);
	}
`

export const PopoverContent = styled(Content)`
  position: relative;
  z-index: 101;
  animation: ${slideLeftAnimation} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${({ theme }) => theme.COLORS.base[700]};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  padding: 0.875rem;
  transform-origin: var(--radix-popover-content-transform-origin);

  form {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

    input {
      background-color: transparent;
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.COLORS.base[600]};
      color: ${({ theme }) => theme.COLORS.base[100]};
      font-size: 1rem;
      font-weight: 600;
      height: 2rem;
      outline: none;
      padding: 0 0.5rem;
    }

    button {
      align-items: center;
      background: ${({ theme }) => theme.COLORS.cyan[300]};
      border-radius: 6px;
      border: none;
      display: flex;
      height: 2rem;
			color: ${({ theme }) => theme.COLORS.base[100]};
			font-weight: 600;
			position: relative;
      justify-content: center;
      line-height: 0;
      outline: none;
      width: 100px;

      &:disabled {
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.COLORS.cyan[500]};
        transition: background-color 0.2s;
      }

      svg {
        animation: ${spinnerLoading} 1s ease-in-out infinite;
        color: ${({ theme }) => theme.COLORS.base[100]};
      }
    }
  }
`

export const PopoverArrow = styled(Arrow)`
  fill: ${({ theme }) => theme.COLORS.base[700]};
`
