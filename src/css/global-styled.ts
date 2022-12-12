import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	
	&:focus {
		box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.cyan[500]};
		outline: none;
	}
	
	&::selection {
		background-color: ${({ theme }) => theme.COLORS.cyan[300]};
	}
	
	body {
		background: ${({ theme }) => theme.COLORS.base[1200]};
		color: ${({ theme }) => theme.COLORS.base[100]};
		-webkit-font-smoothing: antialiased;
	}
	
	body, input, select, textarea, button {
		font-family: Inter Tight, sans-serif;
		font-weight: 400;
		font-size: .875rem;
	}

	a {
		text-decoration: none;
		color: inherit;
	}
	
	button {
		cursor: pointer;
	}
	
	::-webkit-scrollbar {
		width: .8rem;
		background: ${({ theme }) => theme.COLORS.base[700]};
	}
	
	::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.COLORS.base[600]};
	}
	
	@media (max-width: 992px) {
		html {
			font-size: 93.75%;
		}
	}
	
	@media (max-width: 768px) {
		html {
			font-size: 87.5%;
		}
	}
`
