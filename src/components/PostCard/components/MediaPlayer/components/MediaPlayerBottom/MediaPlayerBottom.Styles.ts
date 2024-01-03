import styled from "styled-components"

export const MediaPlayerBottomLayout = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MuteButtonContainer = styled.div`
  flex-grow: 1;
  height: 100%;

  display: flex;
  justify-content: center;
`

export const MuteButton = styled.button`
  svg {
    font-size: 4rem;

    color: ${({ theme }) => theme.colors.point};
    pointer-events: none;
  }
  border: 1px solid red;
`

export const PlayButtonContainer = styled.div`
  flex-grow: 1;
  height: 100%;
`

export const PlayButton = styled.button`
  height: 100%;

  svg {
    pointer-events: none;
  }
`

export const VolumeSliderContainer = styled.div`
  flex-grow: 1;
  height: 80%;
`
