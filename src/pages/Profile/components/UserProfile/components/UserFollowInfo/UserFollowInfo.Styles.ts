import styled from "styled-components"

export const UserFollowInfoLayout = styled.section`
  margin-bottom: 3rem;

  display: flex;
  gap: 1rem;
`

export const UserFollowInfoContainer = styled.div`
  width: 10rem;
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  color: ${({ theme }) => theme.colors.white};
`

export const UserFollowInfoDividerText = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: "Noto Sans KR", sans-serif;
  transform: translateY(10%);
`
