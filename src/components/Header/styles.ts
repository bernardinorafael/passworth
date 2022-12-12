import styled from "styled-components"

export const Container = styled.div`
  height: 3rem;
  width: 100%;

  header {
    align-items: center;
    display: flex;
    height: inherit;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1120px;
    padding: 0 1.5rem;
    width: 100%;

    nav {
      align-items: center;
      display: flex;
      gap: 0.5rem;
      height: inherit;

      a {
        align-items: center;
        background-color: transparent;
        border-radius: 6px;
        display: flex;
        font-weight: 700;
        justify-content: center;
        padding: 0.5rem 0.875rem;
        user-select: none;
        color: ${({ theme }) => theme.COLORS.base[100]};

        &:hover {
          background-color: ${({ theme }) => theme.COLORS.base[1000]};
          transition: background-color 0.3s;
        }

        &.active {
          color: ${({ theme }) => theme.COLORS.base[100]};
          background-color: ${({ theme }) => theme.COLORS.cyan[300]};
        }
      }
    }

    > div {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      a {
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.base[1200]};
        border-radius: 6px;
        border: none;
        color: ${({ theme }) => theme.COLORS.base[100]};
        cursor: pointer;
        display: flex;
        font-weight: 700;
        justify-content: center;
        padding: 0.5rem 0.875rem;
        user-select: none;

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        &:not(:disabled):hover {
          background-color: ${({ theme }) => theme.COLORS.base[100]};
          color: ${({ theme }) => theme.COLORS.base[900]};
          transition: background-color 0.3s, color 0.3s;
        }
      }
    }
  }
`

export const ToggleThemeButton = styled.button`
  --animate-duration: 0.5s;
  align-items: center;
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid transparent;
  display: flex;
  height: 2rem;
  justify-content: center;
  outline: none;
  width: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.base[1000]};
    transition: background-color 0.2s;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.base[100]};
  }
`
