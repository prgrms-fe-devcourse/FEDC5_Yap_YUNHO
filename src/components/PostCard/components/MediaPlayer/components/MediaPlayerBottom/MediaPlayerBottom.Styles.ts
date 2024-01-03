import styled, { css } from "styled-components"

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const buttonBaseStyle = css`
  border-radius: ${({ theme }) => theme.radius.circle};

  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.point};
    pointer-events: none;
  }
`

const buttonHover = css`
  &:hover {
    svg {
      transition: all 0.5s;
      color: ${({ theme }) => theme.colors.point_alt};
    }
  }
`

export const MediaPlayerBottomLayout = styled.div`
  width: 100%;
  height: 50%;

  ${flexCenter}
`

export const MuteButtonContainer = styled.div`
  width: 30%;
  height: 100%;

  ${flexCenter}
`

export const MuteButton = styled.button`
  ${buttonBaseStyle}
  ${buttonHover}
  height: 60%;
  margin-left: 50%;
`

export const PlayButtonContainer = styled.div`
  flex-grow: 1;
  height: 100%;

  ${flexCenter}
`

export const PlayButton = styled.button`
  ${buttonBaseStyle}
  ${buttonHover}
  height: 100%;

  ${flexCenter}

  svg {
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: ${({ theme }) => theme.radius.circle};
  }

  &:hover {
    svg {
      background-color: ${({ theme }) => theme.colors.sub};
    }
  }
`

export const VolumeSliderContainer = styled.div`
  width: 30%;
  height: 90%;

  div {
    margin-right: 30%;
  }
`
