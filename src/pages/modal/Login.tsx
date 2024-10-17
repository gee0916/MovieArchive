import Input from "@/components/common/Input";
import * as MS from "./ModalStyles";
import ComBtn from "@/components/common/ComBtn";
import SnsBtn from "@/components/common/SnsBtn";

interface LoginProps {
  onNext: () => void;
}

export default function Login({ onNext }: LoginProps) {
  const goJoin = () => {
    onNext();
  };

  return (
    <>
      <MS.H2>로그인</MS.H2>
      <MS.InputWrap>
        <Input type="text" placeholder="아이디"></Input>
        <Input type="password" placeholder="비밀번호"></Input>
      </MS.InputWrap>
      <ComBtn type="submit" content="로그인"></ComBtn>
      <MS.LoginTextWrap>
        <MS.LoginP>비밀번호를 잊어버리셨나요?</MS.LoginP>
        {/* 기능 추가 예정 */}
        <MS.GoBtnDiv>
          무비아카이브가 처음이신가요? <button onClick={goJoin}>간편 회원가입</button>
        </MS.GoBtnDiv>
      </MS.LoginTextWrap>
      <MS.SnsOr>또는</MS.SnsOr>
      <MS.SnsUl>
        <li>
          <SnsBtn src="kakao"></SnsBtn>
          <span>카카오톡</span>
        </li>
        <li>
          <SnsBtn src="google"></SnsBtn>
          <span>구글</span>
        </li>
        <li>
          <SnsBtn src="github"></SnsBtn>
          <span>깃허브</span>
        </li>
        <li>
          <SnsBtn src="apple"></SnsBtn>
          <span>Apple</span>
        </li>
      </MS.SnsUl>
      <MS.LoginNotice>
        처음 로그인하면 무비아카이브의 이용약관 및 개인정보처리방침에 동의한 것으로 간주합니다.
      </MS.LoginNotice>
    </>
  );
}
