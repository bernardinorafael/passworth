import styled from "styled-components"

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 20rem);
  justify-content: center;

  strong {
    font-size: 3rem;
  }

  p {
    font-size: 2rem;
		margin-top: 2rem;

    a {
      text-decoration: underline;
			font-weight: 600;

      &:hover {
        background: ${({ theme }) => theme.COLORS.cyan[300]};
        transition: background-color 0.2s;
      }
    }
  }
`
