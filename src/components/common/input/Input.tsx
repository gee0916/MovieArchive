import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import { InputProps } from "@/types/type";

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, placeholder, ...register }: InputProps, ref) => {
    const [inputType, setInputType] = useState(type);

    const togglePassword = () => {
      setInputType((prev) => (prev === "password" ? "text" : "password"));
    };

    return (
      <InputInner>
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledInput
          type={inputType}
          ref={ref}
          $hasLabel={!!label}
          placeholder={placeholder}
          {...register}
          autoComplete="off"
        />
        {label && label.includes("비밀번호") && (
          <i
            className={`bi ${inputType === "password" ? "bi-eye-slash" : "bi-eye"}`}
            onClick={togglePassword}
          ></i>
        )}
      </InputInner>
    );
  },
);

const InputInner = styled.div`
  position: relative;
  .bi {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.lightBlack};
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.bold};
  }
`;

const StyledLabel = styled.label`
  display: block;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.silverBlack};
  pointer-events: none;
  font-weight: 500;
`;

const StyledInput = styled.input<{ $hasLabel: boolean }>`
  padding: ${({ $hasLabel }) => ($hasLabel ? "1.3rem 0" : "1.3rem")};
  display: block;
  width: 30rem;
  border: ${({ $hasLabel, theme }) => ($hasLabel ? "none" : `1px solid ${theme.colors.dimGray}`)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dimGray};
  border-radius: ${({ $hasLabel }) => ($hasLabel ? "0" : "0.5rem")};
  font-size: ${({ theme }) => theme.fontSize.semiBold};
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.darkBlack};

  &::placeholder {
    color: #dbdbdb;
  }

  &:focus {
    border: ${({ $hasLabel, theme }) => ($hasLabel ? "none" : `1px solid ${theme.colors.pinkRed}`)};
    border-bottom: 1px solid ${({ theme }) => theme.colors.pinkRed};
  }
`;

export default Input;
