import "styled-components";
import theme from "./theme";
import { CSSProp } from "styled-components";

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

declare module "react" {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
