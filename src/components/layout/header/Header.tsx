import * as HS from "./HeaderStyles";
import Link from "next/link";
import { useAtom } from "jotai";
import { authAtom } from "@/state/authAtom";
import NavButton from "@/components/buttons/NavButton";
import Image from "next/image";
import logo from "@/images/logo.svg";
import SearchInp from "@/components/search/SearchInp";

interface HeaderProps {
  currentPath: string;
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPath, activePage, onNavigate }: HeaderProps) {
  const [isLoggedIn] = useAtom(authAtom);

  return (
    <HS.HeaderContainer>
      <div className="header-inner">
        <HS.HeaderWrap>
          <HS.HeaderWrapInner>
            <Link href="/">
              <div className="logo">
                <Image src={logo} alt="무비아카이브로고" style={{ objectFit: "contain" }} />
              </div>
            </Link>
            <HS.HeaderNaviWrap>
              <Link href="/" onClick={() => onNavigate("home")}>
                <HS.HeaderNavi $isActive={activePage === "home"}>홈</HS.HeaderNavi>
              </Link>
              <Link href="/?page=photo-card" onClick={() => onNavigate("photo-card")}>
                <HS.HeaderNavi $isActive={activePage === "photo-card"}>포토카드</HS.HeaderNavi>
              </Link>
            </HS.HeaderNaviWrap>
          </HS.HeaderWrapInner>
          <HS.MediaWrap>
            <HS.HeaderWrapInner>
              <SearchInp></SearchInp>
              {isLoggedIn ? (
                <>
                  <HS.HeaderBtnWrap $btnGap="2rem">
                    <NavButton
                      label="나의 무비"
                      isActive={currentPath === "/profile"}
                      href="/profile"
                      isLink={true}
                    />
                    <NavButton
                      label="포토카드 제작"
                      iconClass="bi-postcard"
                      isActive={currentPath === "/create-photo-card"}
                      href="/create-photo-card"
                      isLink={true}
                    />
                  </HS.HeaderBtnWrap>
                </>
              ) : (
                <>
                  <HS.HeaderBtnWrap $btnGap="3rem">
                    <NavButton label="로그인" iconClass="bi-person" isLink={false} />
                    <NavButton label="회원가입" iconClass="bi-person-fill-add" isLink={false} />
                  </HS.HeaderBtnWrap>
                </>
              )}
            </HS.HeaderWrapInner>
          </HS.MediaWrap>
        </HS.HeaderWrap>
      </div>
    </HS.HeaderContainer>
  );
}
