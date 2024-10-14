import "styled-components";
import { ColorTypes, FontFamilyTypes, FontSize } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorTypes;
    fonts: FontFamilyTypes;
    fontSize: FontSize;
  }
}
