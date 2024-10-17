import styled from "styled-components";
import media from "@/styles/media";

interface HeaderNaviProps {
  $isActive: boolean;
}

interface BtnGapProps {
  $btnGap: string;
}

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.silverGray};
  width: 100%;
  position: fixed;
  z-index: 999;
  top: 0px;
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${[media().extraSmall, media().small].map(
    (mediaQuery) => `
    ${mediaQuery`
      {justify-content: center;};
    `}
  `,
  )}
`;

export const MediaWrap = styled.div`
  ${[media().extraSmall, media().small].map(
    (mediaQuery) => `
    ${mediaQuery`
      {display: none};
    `}
  `,
  )}
`;

export const HeaderWrapInner = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  ${media().large`
      width: 45rem;
  `}
  ${media().medium`
      justify-content: flex-start;
  `}
`;

export const HeaderLogo = styled.div`
  display: none;
  ${media().large`
      display: block;
      width: 24.8rem;
      height: 2.7rem;
      position: relative;
  `}
`;

export const HeaderNaviWrap = styled.div`
  display: flex;
  gap: 4.3rem;
  ${[media().extraSmall, media().small].map(
    (mediaQuery) => `
    ${mediaQuery`
      {
        justify-content: space-evenly;
        width: 100%;
        gap: 0;
      };
    `}
  `,
  )}
`;

export const HeaderNavi = styled.span<HeaderNaviProps>`
  font-family: ${({ theme }) => theme.fonts.third};
  font-size: ${({ theme }) => theme.fontSize.max};
  font-weight: 600;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.darkBlack : theme.colors.lightBlack};
`;

export const HeaderBtnWrap = styled.div<BtnGapProps>`
  display: flex;
  justify-content: space-evenly;
  height: 3.9rem;
  gap: ${({ $btnGap }) => $btnGap};
  ${media().medium`
      margin-left: 2rem;
  `}
`;
