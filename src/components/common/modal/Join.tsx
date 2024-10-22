import Input from "@/components/common/input/Input";
import * as MS from "./ModalStyles";
import ComBtn from "@/components/common/button/ComBtn";
import SnsBtn from "@/components/common/button/SnsBtn";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/app/api/auth";
import useAlertHook from "@/hook/UseAlertHook";
import { useAtom } from "jotai";
import { userInfoAtom } from "@/state/userInfoAtom";
import { FormData, NextBackProps } from "@/types/type";

export default function Account({ onNext, onBack }: NextBackProps) {
  const BackLogin = () => {
    if (onBack) {
      onBack();
    }
  };
  const { clickAlert } = useAlertHook();
  const [, setUserInfo] = useAtom(userInfoAtom);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>();

  const joinMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const { email } = data;
      const userData = await registerUser(email);
      if (userData === null || userData.length === 0) {
        setUserInfo(data);
        if (onNext) {
          onNext();
        }
      } else if (userData.length > 0) {
        clickAlert("이미 등록된 이메일입니다.");
        throw new Error("이미 등록된 이메일입니다.");
      }
      return userData;
    },
  });

  const onSubmit = (data: FormData) => {
    joinMutation.mutate(data);
  };

  return (
    <>
      <MS.H2>회원가입</MS.H2>
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
          ></Input>
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
          <Input
            type="password"
            placeholder="6자 이상, 문자/숫자/기호사용 가능해요."
            label="비밀번호"
            {...register("password", {
              required: "*비밀번호는 필수 입력 값이에요.",
              minLength: {
                value: 6,
                message: "*비밀번호는 최소 6자 이상 입력해야 해요.",
              },
            })}
          ></Input>
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
          <Input
            type="password"
            placeholder="비밀번호는 일치해야해요."
            label="비밀번호 확인"
            {...register("chkPassword", {
              required: "*비밀번호는 필수 입력 값이에요.",
              validate: (value) => {
                const { password } = getValues();
                return value === password || "*비밀번호가 일치하지 않아요.";
              },
            })}
          ></Input>
          {errors.chkPassword && <p style={{ color: "red" }}>{errors.chkPassword.message}</p>}
        </MS.InputWrap>
        <ComBtn type="submit" content="계속하기"></ComBtn>
      </form>
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
