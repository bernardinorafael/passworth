import { Close, Content, Title } from "@radix-ui/react-dialog"
import styled, { keyframes } from "styled-components"

const fadeAnimation = keyframes`
	from {
		opacity: 1;
		transform: translateX(100%)
  }
	
	to {
		opacity: 1;
		transform: translateX(0);
  }
`

export const DialogClose = styled(Close)`
  position: absolute;
  top: 24px;
  right: 24px;
  line-height: 0;
  color: ${({ theme }) => theme.COLORS.base[100]};
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.base[1000]};
    transition: background-color 0.2s;
  }
`

export const DialogContent = styled(Content)`
  inset: 0;
  animation: ${fadeAnimation} 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  background: ${({ theme }) => theme.COLORS.base[1200]};
  color: ${({ theme }) => theme.COLORS.base[100]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  position: fixed;
  user-select: none;
  width: 100vw;
  z-index: 10;

  > div {
    padding: 2rem 1rem;
    display: flex;
    height: calc(100vh - 10rem);
    flex-direction: column;
    gap: 2rem;

    > div {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;

      input {
        height: 4rem;
        width: 100%;
        text-align: center;
        border: 1px solid ${({ theme }) => theme.COLORS.base[600]};
        outline: none;
        color: ${({ theme }) => theme.COLORS.base[100]};
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        pointer-events: none;
        font-size: 2rem;
        font-family: Roboto Mono, monospace;
        font-weight: 600;
        border-radius: 8px;
        background-color: transparent;
      }
    }

    span {
      text-align: center;
      margin-top: 2rem;
      font-weight: 700;
    }
  }
`

export const DialogTitle = styled(Title)`
  text-align: center;
  font-size: 4rem;

	@media (max-width: 670px) {
		font-size: 1.5rem;
	}
`

export const CopyPasswordButton = styled.button`
  height: 3rem;
  width: 100%;
  font-weight: 700;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  gap: 0.5rem;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.COLORS.base[100]};
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.base[1100]};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.base[1100]};
    border: 1px solid ${({ theme }) => theme.COLORS.base[300]};
    color: ${({ theme }) => theme.COLORS.base[100]};
    transition: border-color 0.2s, background-color 0.2s, color 0.2s;
  }
`
