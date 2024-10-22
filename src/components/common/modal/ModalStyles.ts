import styled from "styled-components";

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlack};
  font-size: ${({ theme }) => theme.fontSize.max};
  font-weight: 600;
  text-align: center;
  padding-bottom: 2.6rem;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 1.8rem;
  align-items: center;
`;

export const AccountWrap = styled(InputWrap)`
  margin-bottom: 3rem;
`;

export const LoginTextWrap = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 4.8rem;
  text-align: center;
`;

export const LoginP = styled.p`
  margin-bottom: 1.2rem;
  color: ${({ theme }) => theme.colors.pinkRed};
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.fonts.third};
`;

export const GoBtnDiv = styled.div`
  color: ${({ theme }) => theme.colors.dimBlack};
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.fonts.third};
  button {
    color: ${({ theme }) => theme.colors.pinkRed};
    border-bottom: 1px solid ${({ theme }) => theme.colors.pinkRed};
  }
`;

export const SnsOr = styled.span`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 1rem 0;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 0.1rem;
    width: 40%;
    background-color: ${({ theme }) => theme.colors.dimGray};
    top: 50%;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;

export const SnsUl = styled.ul`
  justify-content: center;
  gap: 0.7rem;
  display: flex;
  margin-top: 3.3rem;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    span {
      font-size: ${({ theme }) => theme.fontSize.small};
      color: ${({ theme }) => theme.colors.silverBlack};
    }
  }
`;

export const LoginNotice = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  text-align: center;
  color: ${({ theme }) => theme.colors.silverBlack};
  font-family: ${({ theme }) => theme.fonts.third};
  margin-top: 2.7rem;
  width: 30rem;
`;

export const InputImg = styled.input`
  display: none;
`;

export const ButtonImg = styled.button`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.silverGray};
  position: relative;
  margin-bottom: 2.5rem;
  i {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.pinkRed};
    width: 3.6rem;
    height: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: ${({ theme }) => theme.fontSize.semiBold};
    position: absolute;
    left: 77%;
    top: 66%;
  }
`;

export const WelcomDiv = styled.div`
  text-align: center;
  margin: 3.8rem 0 4.9rem;
  p {
    margin-top: 3.3rem;
    font-size: ${({ theme }) => theme.fontSize.extra};
    color: ${({ theme }) => theme.colors.darkBlack};
    line-height: 2.5rem;
  }
`;
