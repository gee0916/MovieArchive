import styled from "styled-components";

export default function SearchInp() {
  return (
    <Search>
      <InputTxt type="text" placeholder="영화, 유저를 검색해보세요" />
      <i className="bi bi-search" style={{ fontSize: "20px" }}></i>
    </Search>
  );
}

const Search = styled.div`
  width: 30rem;
  position: relative;
`;

const InputTxt = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.silverGray};
  padding: 1rem;
  padding-left: 2rem;
  border-radius: 3rem;
  color: ${({ theme }) => theme.colors.darkBlack};
  font-family: ${({ theme }) => theme.fonts.third};
  font-size: ${({ theme }) => theme.fontSize.semiBold};
  &::placeholder {
    color: ${({ theme }) => theme.colors.lightBlack};
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 5px rgba(69, 123, 157, 0.5);
    border: 1px solid rgba(69, 123, 157, 0.5);
    outline: none;
  }
  &:focus::placeholder {
    visibility: hidden;
  }
  &:focus + .bi {
    color: ${({ theme }) => theme.colors.teal};
  }
  & + .bi {
    position: absolute;
    right: 1.5rem;
    top: 50%;
    color: ${({ theme }) => theme.colors.darkGray};
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
