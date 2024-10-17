import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import media from "@/styles/media";

interface NavButtonProps {
  iconClass?: string;
  label: string;
  isActive?: boolean;
  href?: string;
  isLink: boolean;
  onClick?: () => void;
}

export default function NavButton({
  iconClass,
  label,
  isActive = false,
  href,
  isLink,
  onClick,
}: NavButtonProps) {
  const content = (
    <NavWrap $isActive={isActive}>
      {iconClass ? (
        <i className={`bi ${iconClass}`}></i>
      ) : (
        <ProfileImage src="/images/기본이미지.png" alt="프로필이미지" width={24} height={24} />
      )}
      <NavName>{label}</NavName>
    </NavWrap>
  );

  return (
    <NavFlexWrap>
      {isLink && href ? (
        <Link href={href} passHref>
          {content}
        </Link>
      ) : (
        <NavButtonWrap onClick={onClick} type="button">
          {content}
        </NavButtonWrap>
      )}
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
    height: 2.5rem;
  }
`;

const NavButtonWrap = styled.button`
  width: 100%;
  & div:hover {
    color: ${({ theme }) => theme.colors.darkBlack};
  }
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.silverGray};
`;

const NavName = styled.span`
  margin-top: 0.4rem;
  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.fonts.second};
  line-height: 1.1rem;
  ${media().large`
      margin-top: 0.2rem;
  `}
`;
