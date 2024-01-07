import styled from "styled-components"

export const UserFollowInfoLayout = styled.section`
  margin-bottom: 3rem;
  display: flex;
`

export const UserFollowInfoContainer = styled.div`
  width: 15rem;
  display: flex;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.semiLarge};
  color: ${({ theme }) => theme.colors.white};
`

export const UserFollowInfoDividerContainer = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.white};

  svg {
    width: 0.3rem;
  }
`
