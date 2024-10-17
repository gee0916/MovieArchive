import { useState } from "react";
import styled from "styled-components";
import useModalHook from "@/hook/UseModalHook";
import Login from "./Login";
import Join from "./Join";
import Account from "./Account";
import Image from "next/image";
import logo from "@/images/logo.svg";
import media from "@/styles/media";

export default function LoginModal() {
  const { isModal, clickModal } = useModalHook();
  const [step, setStep] = useState(isModal.type === "회원가입" ? 2 : 1);

  const handleOverlayClick = () => {
    clickModal();
  };

  return (
    <div onClick={handleOverlayClick} className="modal-overlay">
      <LoginWrap onClick={(e) => e.stopPropagation()}>
        <ModalLogo>
          <Image src={logo} alt="무비아카이브로고" style={{ objectFit: "contain" }} />
        </ModalLogo>
        {step === 1 && <Login onNext={() => setStep(2)} />}
        {step === 2 && <Join onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <Account onNext={() => setStep(1)} />}
      </LoginWrap>
    </div>
  );
}

const LoginWrap = styled.div`
  min-width: 36rem;
  height: 68.6rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1.5rem;
  padding: 6.5rem 3rem 3rem;
  ${media().extraSmall`
      padding: 3rem;
      max-height: 68.6rem;
      height: 100%;
      overflow: scroll;
  `}
`;

const ModalLogo = styled.div`
  width: 24.8rem;
  height: 2.7rem;
  margin: 0 auto;
  margin-bottom: 2.7rem;
`;
