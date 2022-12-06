import styled from "styled-components"
import { Root } from "@radix-ui/react-toggle"

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 1.5rem;
  width: 100vw;

  main {
    align-items: center;
    background: ${({ theme }) => theme.COLORS.gold[800]};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.gold[600]};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 520px;
    padding: 1rem;
    width: 100%;

    strong {
      align-items: center;
      color: ${({ theme }) => theme.COLORS.gold[50]};
      display: flex;
      font-size: 1.5rem;
      gap: 0.5rem;
      justify-content: center;
      user-select: none;
    }
  }
`

export const InputGenerator = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.gold[700]};
  border-radius: 8px;
  display: flex;

  input[type="number"] {
    background-color: transparent;
    border-radius: 8px;
    border: none;
    color: ${({ theme }) => theme.COLORS.gold[50]};
    font-size: 1.25rem;
    outline: none;
    pointer-events: none;
    text-align: center;
    user-select: none;
    width: 50px;

    &:focus {
      box-shadow: none;
    }

    &::-webkit-inner-spin-button {
      appearance: none;
    }
  }

  button {
    background: transparent;
    border-radius: 8px;
    border: none;
    flex: 1;
    line-height: 0;
    outline: none;
    padding: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.gold[600]};
      transition: background-color 0.2s;
    }

    &:active {
      transform: scale(1.05);
    }

    svg {
      color: ${({ theme }) => theme.COLORS.gold[100]};
    }
  }
`

export const ResultContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  width: 100%;

  input {
    background-color: ${({ theme }) => theme.COLORS.gold[700]};
    border-radius: 8px;
    border: none;
    color: ${({ theme }) => theme.COLORS.gold[50]};
    flex: 1;
    font-size: 1.25rem;
    height: 3rem;
    outline: none;
    padding: 0 0.5rem;
    pointer-events: none;
    text-align: center;
    user-select: none;
  }

  button {
    background-color: ${({ theme }) => theme.COLORS.gold[400]};
    border-radius: 8px;
    border: none;
    color: ${({ theme }) => theme.COLORS.gold[100]};
    height: 3rem;
    line-height: 0;
    outline: none;
    padding: 0 1rem;

    &:active {
      transform: scale(1.03);
    }

    &:active {
      transform: scale(1.03);
    }

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.gold[500]};
      transition: background-color 0.2s;
    }
  }
`

export const ButtonsType = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
`

export const ToggleRoot = styled(Root)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.gold[400]};
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.COLORS.gold[100]};
  display: flex;
  font-size: 1.25rem;
  font-weight: 700;
  height: 3rem;
  justify-content: center;
  line-height: 0;
  outline: none;
  padding: 0 1rem;

  &[data-state="on"] {
    background-color: ${({ theme }) => theme.COLORS.cyan[600]};
    color: ${({ theme }) => theme.COLORS.gold[50]};
  }

  &:active {
    transform: scale(1.03);
  }

  &:not([data-state="on"]):hover {
    background-color: ${({ theme }) => theme.COLORS.gold[600]};
    transition: background-color 0.2s;
  }
`

export const ButtonGeneratePassword = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.gold[400]};
  border-radius: 8px;
  border: none;
  color: ${({ theme }) => theme.COLORS.gold[100]};
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  gap: 0.225rem;
  height: 4rem;
  justify-content: center;
  margin-top: auto;
  outline: none;
  user-select: none;
  width: 100%;

  &:active {
    transform: scale(1.03);
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.gold[500]};
    transition: background-color 0.2s;
  }
`
