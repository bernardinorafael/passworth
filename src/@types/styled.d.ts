import "styled-components"
import { dark, light } from "../css/themes/default-theme"

type ThemeDark = typeof dark
type ThemeLight = typeof light

declare module "styled-components" {
  export interface DefaultTheme extends ThemeLight, ThemeDark {}
}
