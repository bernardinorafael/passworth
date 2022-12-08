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

    > a {
      font-size: 2rem;
      font-weight: 800;
      line-height: 0;
      user-select: none;

      &:focus {
        box-shadow: none;
      }

      span {
        color: ${({ theme }) => theme.COLORS.cyan[500]};
        font-size: 2rem;
      }
    }

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

        &:hover {
          background-color: ${({ theme }) => theme.COLORS.base[1000]};
          transition: background-color 0.3s;
        }

        &.active {
          background-color: ${({ theme }) => theme.COLORS.cyan[100]};
        }
      }
    }

    > div {
      display: flex;
      gap: .5rem;
      align-items: center;

      button[type="button"] {
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.base[1200]};
        color: ${({ theme }) => theme.COLORS.base[100]};
        border-radius: 6px;
        display: flex;
        font-weight: 700;
        justify-content: center;
        padding: 0.5rem 0.875rem;
        border: none;
				cursor: pointer;
        user-select: none;

        &:hover {
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
`
