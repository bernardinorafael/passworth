import { Close, Content, Title } from "@radix-ui/react-dialog"
import styled, { css, keyframes } from "styled-components"

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
  }
`

export const DialogTitle = styled(Title)`
  text-align: center;
  font-size: 4rem;
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

export const Container = styled.div`
  overflow: hidden;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 3rem 1.5rem;
  width: 100%;

  main {
    --animate-duration: 0.3s;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
      font-size: 3rem;
      text-align: center;

      > a {
        text-decoration: underline;

        &:hover {
          background: ${({ theme }) => theme.COLORS.cyan[300]};
          transition: background-color 0.2s;
        }
      }

      @media (max-width: 670px) {
        font-size: 2rem;
      }
    }

    form {
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.COLORS.base[300]};
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
  }
`

type TypeCharacterContainerProps = {
  error?: boolean
}

export const TypeCharacterContainer = styled.div<TypeCharacterContainerProps>`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.875rem 0;
  width: 100%;

  &:first-child {
    @media (max-width: 670px) {
      align-self: flex-start;
      flex-direction: column;
      gap: 1rem;

      input {
        width: 100%;
        max-width: 100%;
      }
    }
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.red[100]};
    font-weight: 700;
  }

  & + div {
    border-top: 1px solid ${({ theme }) => theme.COLORS.base[400]};
  }

  > div {
    align-items: center;
    display: flex;
    gap: 0.225rem;
    margin-left: auto;
    padding: 0 0.225rem;

    > button {
      background-color: transparent;
      border-radius: 6px;
      border: none;
      height: 2rem;
      line-height: 0;
      outline: none;
      padding: 0 0.5rem;

      &:focus {
        box-shadow: none;

        svg {
          color: ${({ theme }) => theme.COLORS.cyan[300]};
        }
      }

      &:active {
        svg {
          transform: scale(1.2);
        }
      }

      svg {
        color: ${({ theme }) => theme.COLORS.base[100]};
      }
    }
  }

  input {
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.base[300]};
    font-weight: 600;
    height: 2rem;
    max-width: 300px;
    padding: 0 0.5rem;
    color: ${({ theme }) => theme.COLORS.base[100]};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.red[100]};
      font-weight: 700;
    }

    &:focus {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS.base[400]};
    }

    &[type="number"] {
      max-width: 40px;
      pointer-events: none;
      text-align: center;
      user-select: none;

      &::-webkit-inner-spin-button {
        appearance: none;
      }
    }
  }

  ${({ error, theme }) =>
    error &&
    css`
      input {
        box-shadow: 0 0 0 2px ${theme.COLORS.red[100]} !important;
        border: none;
      }
    `}
`

export const GeneratePasswordButton = styled.button`
  background-color: ${({ theme }) => theme.COLORS.base[100]};
  border-radius: 8px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.COLORS.base[900]};
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 700;
  height: 3rem;
  margin-top: 1rem;
  outline: none;
  user-select: none;

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.COLORS.base[1100]};
    border: 1px solid ${({ theme }) => theme.COLORS.base[300]};
    color: ${({ theme }) => theme.COLORS.base[100]};
    transition: border-color 0.2s, background-color 0.2s, color 0.2s;
  }
`
