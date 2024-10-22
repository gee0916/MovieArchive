import styled from "styled-components";
import useAlertHook from "@/hook/UseAlertHook";
import { AlertProps } from "@/types/type";

export default function Alert({ message }: AlertProps) {
  const { clickAlert } = useAlertHook();
  const handleAlertClose = () => {
    clickAlert();
  };
  return (
    <div onClick={handleAlertClose} className="modal-overlay">
      <AlertWrap onClick={(e) => e.stopPropagation()}>
        <AlertDiv>{message}</AlertDiv>
        <AlertButton onClick={handleAlertClose}>닫기</AlertButton>
      </AlertWrap>
    </div>
  );
}

const AlertWrap = styled.div`
  width: 28rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.8rem;
  padding: 2rem;
  text-align: center;
`;

const AlertDiv = styled.div`
  line-height: 2.2rem;
  word-break: keep-all;
  margin: 0.8rem 0 0;
  padding: 0 0 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSize.semiBold};
`;

const AlertButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.bold};
  margin-top: 1.1rem;
  color: ${({ theme }) => theme.colors.pinkRed};
`;
