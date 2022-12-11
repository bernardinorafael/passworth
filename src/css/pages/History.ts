import styled from "styled-components"

export const Container = styled.div`
  padding: 3rem 1.5rem;
  width: 100%;

  main {
    --animate-duration: 0.3s;
    margin: 0 auto;
    max-width: 1120px;
    width: 100%;

    h1 {
      margin-bottom: 3rem;
      font-size: 3.5rem;
      text-align: center;
    }
  }
`

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  flex: 1;
  user-select: none;
  width: 100%;

  tr {
    transition: all 0.4s;
  }

  &:has(tr:hover) tr:not(:hover) {
    opacity: 0.6;
    scale: 0.98;
  }

  td {
    background-color: ${({ theme }) => theme.COLORS.base[900]};
    font-weight: 700;
    padding: 0.5rem 2rem;
    text-transform: lowercase;

    &:first-child {
      border-bottom-left-radius: 6px;
      border-top-left-radius: 6px;
      width: 30%;
    }

    &:last-child {
      border-bottom-right-radius: 6px;
      border-top-right-radius: 6px;
      display: flex;
      gap: 0.5rem;
      justify-content: end;
      text-align: right;
    }
  }
`
