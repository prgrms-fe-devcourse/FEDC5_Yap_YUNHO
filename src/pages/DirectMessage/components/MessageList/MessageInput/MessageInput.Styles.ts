import styled from "styled-components"

export const MessageInputLayout = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const MessageInputForm = styled.form`
  width: 90%;
  height: 100%;
  max-height: 10rem;
  border-radius: ${({ theme }) => theme.radius.size12};
  background: ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
`

export const MessageInputItem = styled.textarea`
  width: 90%;
  border-radius: ${({ theme }) => theme.radius.size12};
  background: ${({ theme }) => theme.colors.gray};
  padding-left: 1.5rem;
  overflow: hidden;
  box-sizing: border-box;
  max-height: 10rem;
  ${({ theme }) => theme.scrollBar};
`

export const MessageSendButton = styled.button`
  display: flex;
  align-items: center;
  svg {
    font-size: 2.5rem;
  }
`
