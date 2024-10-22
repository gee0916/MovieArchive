import Link from "next/link";
import styled from "styled-components";
import { ButtonProps } from "@/types/type";

export default function ComBtn({ href, type, content, onClick }: ButtonProps) {
  return (
    <>
      {type === "link" && href && content ? (
        <LinkStyle href={href} passHref>
          {content}
        </LinkStyle>
      ) : type === "button" || type === "submit" ? (
        <ButtonStyle type={type} onClick={onClick}>
          {content}
        </ButtonStyle>
      ) : (
        <CircleBtn>
          <i className={`bi ${content}`}></i>
        </CircleBtn>
      )}
    </>
  );
}

const LinkStyle = styled(Link)`
  border-radius: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  padding: 0.3rem 1.5rem;
  font-family: ${({ theme }) => theme.fonts.second};
  font-size: ${({ theme }) => theme.fontSize.semiBold};
`;

const ButtonStyle = styled.button`
  background-color: ${({ theme }) => theme.colors.pinkRed};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 1.1rem 0;
  border-radius: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSize.semiBold};
`;

const CircleBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.lightGray};
  box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.2);
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  i {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
