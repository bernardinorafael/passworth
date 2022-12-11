import { Root, Thumb } from "@radix-ui/react-switch"
import styled from "styled-components"

export const SwitchRoot = styled(Root)`
  background: ${({ theme }) => theme.COLORS.base[900]};
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.COLORS.base[100]};
  cursor: pointer;
  height: 25px;
  position: relative;
  width: 40px;

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS.base[400]};
  }

  &[data-state="checked"] {
    background-color: ${({ theme }) => theme.COLORS.green[300]};
  }
`

export const SwitchThumb = styled(Thumb)`
  background-color: ${({ theme }) => theme.COLORS.base[100]};
  border-radius: 999px;
  display: block;
  height: 20px;
  transform: translateX(2px);
  transition: transform 0.2s;
  width: 20px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  &[data-state="checked"] {
    transform: translateX(16px);
  }
`
