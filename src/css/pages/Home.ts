import styled, { css } from "styled-components"

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 3rem 1.5rem;
  width: 100%;

  main {
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
        box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS.base[400]};
      }

      &:active {
        svg {
          transform: scale(1.2);
        }
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
