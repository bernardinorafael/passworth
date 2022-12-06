import "styled-components"
import { theme } from "../css/themes/default-theme"

type Theme = typeof theme

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
