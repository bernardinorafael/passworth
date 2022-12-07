import styled from "styled-components"

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
  padding: 4rem 1.5rem;
  width: 100%;

  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
      font-size: 3rem;
      text-align: center;

      > a:hover {
        text-decoration: underline;
      }
    }

    > div {
      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.COLORS.base[300]};
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
  }
`

export const TypeCharacterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.875rem 0;
  width: 100%;

  & + div {
    border-top: 1px solid black;
  }

  input {
    background-color: transparent;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.base[300]};
    font-weight: 600;
    height: 2rem;
    max-width: 300px;
    padding: 0 0.5rem;

    &:focus {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS.base[400]};
    }
  }
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
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.base[1100]};
    border: 1px solid ${({ theme }) => theme.COLORS.base[300]};
    color: ${({ theme }) => theme.COLORS.base[100]};
    transition: border-color 0.2s, background-color 0.2s, color 0.2s;
  }
`
