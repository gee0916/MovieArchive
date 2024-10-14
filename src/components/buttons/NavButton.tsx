import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import media from "@/styles/media";

interface NavButtonProps {
  iconClass?: string;
  label: string;
  isActive: boolean;
  href: string;
}

export default function NavButton({ iconClass, label, isActive, href }: NavButtonProps) {
  return (
    <NavFlexWrap>
      <Link href={href} passHref>
        <NavWrap $isActive={isActive}>
          {iconClass ? (
            <i className={`bi ${iconClass}`}></i>
          ) : (
            <PofileImage
              src="/images/기본이미지.png"
              alt="프로필이미지"
              width={24}
              height={24}
            ></PofileImage>
          )}
          <NavName>{label}</NavName>
        </NavWrap>
      </Link>
    </NavFlexWrap>
  );
}

const NavFlexWrap = styled.div`
  flex: none;
  ${[media().extraSmall, media().small].map(
    (mediaQuery) => `
    ${mediaQuery`
      {flex:1};
    `}
  `,
  )}
`;

const NavWrap = styled.div<{ $isActive: boolean }>`
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.pinkRed : theme.colors.silverBlack)};
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  i {
    font-size: ${({ theme }) => theme.fontSize.max};
  }
`;

const PofileImage = styled(Image)`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.silverGray};
`;

const NavName = styled.span`
  margin-top: 0.4rem;
  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.fonts.second};
  ${media().large`
      margin-top: 0.2rem;
  `}
`;
