import styled from "styled-components";
import useModalHook from "@/hook/UseModalHook";
import Input from "@/components/common/Input";

export default function LoginModal() {
  const { clickModal } = useModalHook();

  const handleOverlayClick = () => {
    clickModal();
  };

  return (
    <div onClick={handleOverlayClick} className="modal-overlay">
      <LoginWrap onClick={(e) => e.stopPropagation()}>
        <Input type="text" placeholder="아이디"></Input>
        <Input type="password" placeholder="비밀번호"></Input>
        <Input type="text" label="사용자 이름" placeholder="2~10자 이내 작성 부탁드릴게요"></Input>
        <Input type="time" placeholder="2~10자 이내 작성 부탁드릴게요"></Input>
      </LoginWrap>
    </div>
  );
}

const LoginWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1.5rem;
  padding: 6.5rem 3rem 3rem;
`;
