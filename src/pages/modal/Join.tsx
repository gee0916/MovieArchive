import Input from "@/components/common/Input";
import * as MS from "./ModalStyles";
import ComBtn from "@/components/common/ComBtn";
import SnsBtn from "@/components/common/SnsBtn";

interface JoinProps {
  onNext: () => void;
  onBack: () => void;
}

export default function Account({ onNext, onBack }: JoinProps) {
  const NextJoin = () => {
    onNext();
  };
  const BackLogin = () => {
    onBack();
  };

  return (
    <>
      <MS.H2>회원가입</MS.H2>
      <MS.InputWrap>
        <Input type="text" placeholder="아이디"></Input>
        <Input type="password" placeholder="비밀번호"></Input>
        <Input type="password" placeholder="비밀번호 확인"></Input>
      </MS.InputWrap>
      <ComBtn type="submit" content="계속하기" onClick={NextJoin}></ComBtn>
      <MS.LoginTextWrap>
        <MS.GoBtnDiv>
          이미 가입된 계정이 있나요? <button onClick={BackLogin}>로그인하기</button>
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
    </>
  );
}
