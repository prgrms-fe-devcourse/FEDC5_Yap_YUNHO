import styled from "styled-components"

export const DMInputLayout = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const DMInputContainer = styled.div`
  width: 90%;
  height: 6rem;
  border-radius: ${({ theme }) => theme.radius.size12};
  background: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
`

export const DMInputItem = styled.input`
  width: 90%;
  height: 5rem;
  border-radius: ${({ theme }) => theme.radius.size12};
  background: ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: space-between;
  padding-left: 1.5rem;
`

export const DMInputButtonContainer = styled.div`
  width: 15%;
`
