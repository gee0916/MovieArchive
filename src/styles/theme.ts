import { DefaultTheme } from "styled-components";

const colors = {
  darkBlack: "#333333",
  dimBlack: "#555555",
  silverBlack: "#777777",
  lightBlack: "#999999",
  darkGray: "#bdbdbd",
  dimGray: "#dddddd",
  silverGray: "#eeeeee",
  lightGray: "#f5f5f5",
  cloudyGray: "#f9f9f9",
  pinkRed: "#E63946",
  cyanBlue: "#F8F9FA",
  cyan: "#A8DADC",
  navy: "#1D3557",
  teal: "#457B9D",
  chocolate: "#1C1D1F",
  white: "#FFFFFF",
  black: "#000000",
};

const fonts = {
  primary: "Pretendard",
  second: "Raleway",
  third: "SpoqaHanSansNeo-Regular",
  fourth: "Tenada",
};

const fontSize = {
  extraMax: "3rem",
  max: "2.4rem",
  extra: "2rem",
  large: "1.8rem",
  bold: "1.6rem",
  semiBold: "1.5rem",
  medium: "1.4rem",
  small: "1.2rem",
  min: "1rem",
};

const theme: DefaultTheme = {
  colors,
  fonts,
  fontSize,
};

export type ThemeType = typeof theme;

export default theme;
