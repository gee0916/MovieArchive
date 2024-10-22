"use client";

import Link from "next/link";
import styled from "styled-components";
import media from "@/styles/media";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer-inner">
        <FooterInfoWrap>
          <FooterP>서비스 이용약관 | 개인정보 처리방침 | 회사 안내</FooterP>
          <FooterP>
            (주)무비아카이브 | 사업자번호 : 123-45-67890 | 대표자 : 홍길동 (12345)
            <br /> 서울특별시 서대문구 신촌로 123, 3층
          </FooterP>
          <FooterP>Copyright © Movie Archive. All rights reserved.</FooterP>
        </FooterInfoWrap>
        <SnsWrap>
          <Link href="#">
            <Sns className="bi bi-facebook"></Sns>
          </Link>
          <Link href="#">
            <Sns className="bi bi-instagram"></Sns>
          </Link>
        </SnsWrap>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.chocolate};
  padding: 2.8rem 0;
  color: ${({ theme }) => theme.colors.darkGray};
  ${[media().extraSmall, media().small].map(
    (mediaQuery) => `
    ${mediaQuery`
      {display: none};
    `}
  `,
  )}
`;

const FooterInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterP = styled.p`
  font-family: ${({ theme }) => theme.fonts.third};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const SnsWrap = styled.div`
  padding-top: 15rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.3rem;
`;

const Sns = styled.i`
  font-size: ${({ theme }) => theme.fontSize.extra};
`;
