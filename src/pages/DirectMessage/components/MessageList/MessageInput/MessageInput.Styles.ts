import styled from "styled-components"

export const MessageInputLayout = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const MessageInputForm = styled.form`
  width: 90%;
  height: 6rem;
  border-radius: ${({ theme }) => theme.radius.size12};
  background: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
`

export const MessageInputItem = styled.input`
  width: 90%;
  height: 5rem;
  border-radius: ${({ theme }) => theme.radius.size12};
  background: ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: space-between;
  padding-left: 1.5rem;
`

export const MessageSendButton = styled.button`
  display: flex;
  align-items: center;
  svg {
    font-size: 2.5rem;
  }
`
