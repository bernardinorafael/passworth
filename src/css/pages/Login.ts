import styled from "styled-components"

export const Container = styled.div`
  align-items: center;
  height: calc(100vh - 15rem);
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  max-width: 1120px;
  padding: 3rem 1.5rem;
  width: 100%;

  h1 {
    font-size: 3rem;
  }

  span {
    margin-top: -1.5rem;
    font-size: 1rem;

    a {
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  form {
    --animate-duration: 0.3s;
    padding: 1rem;
    background-color: ${({ theme }) => theme.COLORS.base[1000]};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.base[800]};
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 450px;
    gap: 1rem;
  }

  a {
    font-weight: 600;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 1rem;
    font-weight: 600;
  }

  input {
    height: 2.5rem;
    padding: 0 0.5rem;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.COLORS.base[800]};
    border-radius: 6px;
    color: ${({ theme }) => theme.COLORS.base[100]};
    font-weight: 600;
  }
`

export const LoginButton = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: center;
  border-radius: 6px;
  color: ${({ theme }) => theme.COLORS.base[100]};
  background-color: ${({ theme }) => theme.COLORS.cyan[300]};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.COLORS.cyan[500]};
    transition: background-color 0.2s;
  }
`
