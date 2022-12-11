import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Title,
} from "@radix-ui/react-alert-dialog"
import styled, { keyframes } from "styled-components"

const fadeAnimation = keyframes`
	from {
		opacity: 0.5;
		transform: translate(-50%, -48%) scale(0.8);
  }
	to {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
  }
`

const overlayAnimation = keyframes`
	from {
    opacity: 0;
  }
	to {
    opacity: 1;
  }
`

export const AlertDialogContent = styled(Content)`
  animation: ${fadeAnimation} 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  background-color: ${({ theme }) => theme.COLORS.base[1100]};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  flex-direction: column;
  left: 50%;
  border: 1px solid ${({ theme }) => theme.COLORS.base[900]};
  max-width: 450px;
  padding: 1rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  width: 90vw;
`

export const AlertDialogTitle = styled(Title)`
  font-size: 2rem;
  line-height: 1.6;
`

export const AlertDialogDescription = styled(Description)`
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.base[400]};
  font-size: 1rem;
  line-height: 1;
  margin-bottom: 1.5rem;
`

export const AlertDialogOverlay = styled(Overlay)`
  animation: ${overlayAnimation} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background: rgba(0, 0, 0, 0.4);
  inset: 0;
  position: fixed;
`

export const ButtonCancel = styled(Cancel)`
  background-color: ${({ theme }) => theme.COLORS.base[1100]};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.COLORS.base[1000]};
  color: ${({ theme }) => theme.COLORS.base[100]};
  font-size: 1.25rem;
  font-weight: 700;
  height: 2.5rem;
  outline: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.base[800]};
    transition: border 0.2s;
  }
`

export const ButtonConfirmDelete = styled(Action)`
  background-color: ${({ theme }) => theme.COLORS.red[700]};
  border-radius: 4px;
  border: none;
  color: ${({ theme }) => theme.COLORS.red[100]};
  font-size: 1.25rem;
  font-weight: 700;
  height: 2.5rem;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.red[200]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.red[600]};
    transition: background-color 0.2s;
  }
`
