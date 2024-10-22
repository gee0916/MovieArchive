import Input from "@/components/common/input/Input";
import * as MS from "./ModalStyles";
import ComBtn from "@/components/common/button/ComBtn";
import SnsBtn from "@/components/common/button/SnsBtn";
import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { loginUser } from "@/app/api/auth";
import useAlertHook from "@/hook/UseAlertHook";
import { useAtom } from "jotai";
import { authAtom } from "@/state/authAtom";
import useModalHook from "@/hook/UseModalHook";
import { FormData, NextBackProps } from "@/types/type";

export default function Login({ onNext }: NextBackProps) {
  const goJoin = () => {
    if (onNext) {
      onNext();
    }
  };

  const { clickAlert } = useAlertHook();
  const [, setAuth] = useAtom(authAtom);
  const { clickModal } = useModalHook();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const loginMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const { email, password } = data;
      return loginUser(email, password);
    },
    onSuccess: () => {
      setAuth(true);
      clickModal();
    },
    onError: (error) => {
      console.warn("로그인 오류:", error.message);
      clickAlert("이메일이 등록되어 있지 않거나 이메일 또는 비밀번호를 잘못 입력했어요.");
    },
  });

  const onSubmit = (data: FormData) => {
    loginMutation.mutate(data);
  };

  return (
    <>
      <MS.H2>로그인</MS.H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MS.InputWrap>
          <Input
            type="text"
            placeholder="example@example.com"
            label="이메일"
            {...register("email", {
              required: "이메일은 필수 입력이에요.",
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                message: "이메일 형식에 맞지 않아요.",
              },
            })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
          <Input
            type="password"
            placeholder="6자 이상, 문자/숫자/기호로 이루어졌어요."
            label="비밀번호"
            {...register("password", {
              required: "*비밀번호는 필수 입력 값이에요.",
              minLength: {
                value: 6,
                message: "*비밀번호는 최소 6자 이상 입력해야 해요.",
              },
            })}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        </MS.InputWrap>
        <ComBtn type="submit" content="로그인" />
      </form>
      <MS.LoginTextWrap>
        <MS.LoginP>비밀번호를 잊어버리셨나요?</MS.LoginP>
        <MS.GoBtnDiv>
          무비아카이브가 처음이신가요? <button onClick={goJoin}>간편 회원가입</button>
        </MS.GoBtnDiv>
      </MS.LoginTextWrap>
      <MS.SnsOr>또는</MS.SnsOr>
      <MS.SnsUl>
        <li>
          <SnsBtn src="kakao" />
          <span>카카오톡</span>
        </li>
        <li>
          <SnsBtn src="google" />
          <span>구글</span>
        </li>
        <li>
          <SnsBtn src="github" />
          <span>깃허브</span>
        </li>
        <li>
          <SnsBtn src="apple" />
          <span>Apple</span>
        </li>
      </MS.SnsUl>
      <MS.LoginNotice>
        처음 로그인하면 무비아카이브의 이용약관 및 개인정보처리방침에 동의한 것으로 간주합니다.
      </MS.LoginNotice>
    </>
  );
}
