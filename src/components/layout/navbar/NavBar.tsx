import styled from "styled-components";
import media from "@/styles/media";
import NavButton from "@/components/common/button/NavBtn";
import { authAtom } from "@/state/authAtom";
import { useAtom } from "jotai";
import useModalHook from "@/hook/UseModalHook";
import LoginJoinModal from "@/components/common/modal/AuthModal";
import { HeaderProps } from "@/types/type";

export default function NavBar({ currentPath }: HeaderProps) {
  const [isLoggedIn] = useAtom(authAtom);
  const { isModal, clickModal } = useModalHook();

  return (
    <>
      <NavBarContainer>
        <NavBarInner className="navbar-inner">
          <NavButton
            label="홈"
            iconClass="bi-house-fill"
            isActive={currentPath === "/"}
            href="/"
            isLink={true}
          />
          <NavButton
            label="검색"
            iconClass="bi-search"
            isActive={currentPath === "/search"}
            href="/search"
            isLink={true}
          />
          {isLoggedIn ? (
            <>
              <NavButton
                label="포토카드 제작"
                iconClass="bi-postcard"
                isActive={currentPath === "/create-photo-card"}
                href="/create-photo-card"
                isLink={true}
              />
              <NavButton
                label="나의 무비"
                isActive={currentPath === "/profile"}
                href="/profile"
                isLink={true}
              />
            </>
          ) : (
            <NavButton
              label="로그인"
              iconClass="bi-person"
              isLink={false}
              onClick={() => clickModal("로그인")}
            />
          )}
        </NavBarInner>
      </NavBarContainer>
      {isModal.isVisible && <LoginJoinModal />}
    </>
  );
}

const NavBarContainer = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 0.1rem solid ${({ theme }) => theme.colors.silverGray};
  ${[media().large, media().medium].map(
    (mediaQuery) => `
    ${mediaQuery`
      {display: none;}
    `}
  `,
  )}
`;

const NavBarInner = styled.div`
  display: flex;
  justify-content: space-around;
`;
