import styled from "styled-components"

export const UserFollowInfoLayout = styled.section`
  margin-bottom: 3rem;
  display: flex;
  gap: 1rem;
`

export const UserFollowInfoContainer = styled.div<{
  $position: "left" | "right"
}>`
  width: 12rem;
  display: flex;
  justify-content: ${({ $position }) =>
    $position === "left" ? "flex-end" : "flex-right"};

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
