import Image from "next/image";
import styled from "styled-components";

interface SnsBtnProps {
  src: string;
}

export default function SnsBtn({ src }: SnsBtnProps) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const imagePath = require(`@/images/${src}.svg`);
  return (
    <>
      <Button src={src}>
        <Image src={imagePath} alt={`${src}`} style={{ objectFit: "contain" }} />
      </Button>
    </>
  );
}

const Button = styled.button<{ src: string }>`
  width: 5rem;
  height: 5rem;
  box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  background-color: ${({ src }) =>
    src === "kakao"
      ? "#FAE500"
      : src === "google"
        ? "#F8F8F8"
        : src === "github"
          ? "#3C4043"
          : "#1C1D1F"};
`;
