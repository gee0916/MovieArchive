import { css, CSSObject } from "styled-components";

const breakpoints = {
  extraSmall: "@media (max-width: 480px)",
  small: "@media (min-width: 481px) and (max-width: 768px)",
  medium: "@media (min-width: 769px) and (max-width: 1279px)",
  large: "@media (min-width: 1280px)",
};

type MediaFunctions = {
  [key in keyof typeof breakpoints]: (
    styles: CSSObject | TemplateStringsArray,
  ) => ReturnType<typeof css>;
};

export default function media(): MediaFunctions {
  return Object.fromEntries(
    Object.entries(breakpoints).map(([key, value]) => [
      key,
      (styles: CSSObject | TemplateStringsArray) => css`
        ${value} {
          ${css(styles)}
        }
      `,
    ]),
  ) as MediaFunctions;
}
