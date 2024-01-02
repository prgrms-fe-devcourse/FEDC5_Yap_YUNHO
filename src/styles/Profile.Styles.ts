import styled from "styled-components"

export const UserInfoContainer = styled.div<{ mb?: number }>`
  padding: 0.8rem 1.2rem;
  font-size: 1.6rem;
  font-weight: 500;
  background-color: var(--gray-20, #f2f4f6); //TODO: 컬러 변수로 등록하기
  border-radius: 8px;
  border: 1px solid var(--gray-20, #f2f4f6); //TODO: 컬러 변수로 등록하기
  margin-bottom: 0.5rem;
  color: #4e5968; //TODO: 컬러 변수로 등록하기
  margin-bottom: ${(props) => props.mb ?? 0};
  display: flex;
  align-items: center;
`
