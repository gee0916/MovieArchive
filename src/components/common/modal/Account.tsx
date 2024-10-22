import Input from "@/components/common/input/Input";
import * as MS from "./ModalStyles";
import { useState, useRef } from "react";
import Image from "next/image";
import BasicImg from "@/images/basic-profile-img.png";
import WelcomeImg from "@/images/welcome.svg";
import ComBtn from "@/components/common/button/ComBtn";
import { NextBackProps } from "@/types/type";

export default function Account({ onNext }: NextBackProps) {
  const [step, setStep] = useState(1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };
  const NextLogin = () => {
    if (onNext) {
      onNext();
    }
  };
  const ImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
  };

  return (
    <div>
      {step === 1 && (
        <>
          <MS.H2>계정 만들기</MS.H2>
          <MS.AccountWrap>
            <MS.InputImg type="file" onChange={ImageChange} ref={inputRef}></MS.InputImg>
            <MS.ButtonImg onClick={() => inputRef.current?.click()}>
              <Image
                src={BasicImg}
                alt="프로필이미지"
                style={{ objectFit: "contain", width: "inherit", height: "inherit" }}
              ></Image>
              <i className="bi bi-image"></i>
            </MS.ButtonImg>
            <Input
              type="text"
              label="사용자 이름"
              placeholder="2~10자 이내로 작성 부탁드릴게요."
            ></Input>
            <Input
              type="text"
              label="계정 ID"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능해요."
            ></Input>
            <Input
              type="text"
              label="소개"
              placeholder="자신을 나타낼 수 있는 소개 부탁드릴게요. "
            ></Input>
          </MS.AccountWrap>
          <ComBtn type="submit" content="확인" onClick={handleNextStep}></ComBtn>
        </>
      )}
      {step === 2 && (
        <>
          <MS.H2>환영합니다</MS.H2>
          <MS.WelcomDiv>
            <Image
              src={WelcomeImg}
              alt="환영합니다"
              style={{ objectFit: "contain", width: "inherit", height: "inherit" }}
            ></Image>
            <p>
              이제 내가 본 영화를 평가하고
              <br />
              나만의 포토카드를 만들어
              <br />
              특별한 추억을 간직하세요 :&#41;
            </p>
          </MS.WelcomDiv>
          <ComBtn type="button" content="로그인 하러 가기" onClick={NextLogin}></ComBtn>
        </>
      )}
    </div>
  );
}
