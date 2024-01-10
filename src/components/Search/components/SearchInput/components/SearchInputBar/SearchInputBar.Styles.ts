import styled from "styled-components"

export const SearchBarForm = styled.form`
  display: flex;
  width: 100%;
  padding: 1.4rem;

  border-radius: 1rem;
  border: ${({ theme }) => `0.1rem solid ${theme.colors.sub}`};

  background-color: ${({ theme }) => theme.colors.white};
`

export const SearchBarInput = styled.input`
  width: 100%;

  //chrome이 제공하는 input 자동완성의 백그라운드 지정
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100rem ${({ theme }) => theme.colors.white} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.black} !important;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray40};
  }

  font-size: ${({ theme }) => theme.fontSizes.large};

  /* (다음 Pr에서 주석 삭제 예정)
   검색어를 입력하면 검색바 오른쪽 끝에 나오는 x자 버튼입니다.
   위 : IE, 
   아래 : Chrome
  */
  &::-ms-clear,
  &::-ms-reveal {
    cursor: pointer;
  }

  &::-webkit-search-cancel-button {
    cursor: pointer;
  }
`
export const SearchIconLayout = styled.div`
  svg {
    font-size: 3rem;
  }
`
