import styled, { css } from "styled-components"

const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const iconBaseStyle = css`
  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.point};
    pointer-events: none;
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
  ${iconBaseStyle}
  height: 60%;
  margin-left: 30%;
`

export const PlayButtonContainer = styled.div`
  width: 40%;
  height: 100%;

  ${flexCenter}
`

export const PlayButton = styled.button`
  ${iconBaseStyle}
  height: 100%;

  ${flexCenter}

  svg {
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: ${({ theme }) => theme.radius.circle};
  }
`

export const VolumeSliderContainer = styled.div`
  width: 30%;
  height: 80%;
`
