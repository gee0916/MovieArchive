import * as HS from "./HeaderStyles";
import Link from "next/link";
import { useAtom } from "jotai";
import { authAtom } from "@/state/authAtom";
import NavButton from "@/components/common/button/NavBtn";
import Image from "next/image";
import logo from "@/images/logo.svg";
import SearchInp from "@/components/search/SearchInp";
import useModalHook from "@/hook/UseModalHook";
import LoginJoinModal from "@/components/common/modal/AuthModal";
import { supabase } from "@/app/supabaseClient";
import { useEffect } from "react";
import { PageProps } from "@/types/type";

export default function Header({ currentPath, activePage, onNavigate }: PageProps) {
  const [isLoggedIn, setAuth] = useAtom(authAtom);
  const { isModal, clickModal } = useModalHook();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setAuth(true);
      }
    };
    checkSession();
  }, [setAuth]);

  return (
    <>
      <HS.HeaderContainer>
        <div className="header-inner">
          <HS.HeaderWrap>
            <HS.HeaderWrapInner>
              <Link href="/">
                <HS.HeaderLogo>
                  <Image src={logo} alt="무비아카이브로고" style={{ objectFit: "contain" }} />
                </HS.HeaderLogo>
              </Link>
              <HS.HeaderNaviWrap>
                <Link href="/" onClick={() => onNavigate && onNavigate("home")}>
                  <HS.HeaderNavi $isActive={activePage === "home"}>홈</HS.HeaderNavi>
                </Link>
                <Link
                  href="/?page=photo-card"
                  onClick={() => onNavigate && onNavigate("photo-card")}
                >
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
                      <NavButton
                        label="로그인"
                        iconClass="bi-person"
                        isLink={false}
                        onClick={() => clickModal("로그인")}
                      />
                      <NavButton
                        label="회원가입"
                        iconClass="bi-person-fill-add"
                        isLink={false}
                        onClick={() => clickModal("회원가입")}
                      />
                    </HS.HeaderBtnWrap>
                  </>
                )}
              </HS.HeaderWrapInner>
            </HS.MediaWrap>
          </HS.HeaderWrap>
        </div>
      </HS.HeaderContainer>
      {isModal.isVisible && <LoginJoinModal />}
    </>
  );
}
