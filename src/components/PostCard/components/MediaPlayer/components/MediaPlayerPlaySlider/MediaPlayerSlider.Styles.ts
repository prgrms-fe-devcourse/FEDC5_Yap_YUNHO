import styled from "styled-components"

export const MediaPlayerPlaySliderLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  position: relative;
`

export const PlaySliderRail = styled.div`
  width: 100%;
  height: 20%;

  position: absolute;

  background-color: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.radius.size8};
`

export const PlaySliderHandle = styled.div<{ $leftPercentage: number }>`
  width: 2%;
  height: 30%;

  position: absolute;
  left: ${({ $leftPercentage }) => `${$leftPercentage - 2}%`};

  background-color: ${({ theme }) => theme.colors.point_alt};
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.4);
`

export const PlaySliderTrack = styled.div<{ $widthPercentage: number }>`
  height: 20%;
  width: ${({ $widthPercentage }) => `${$widthPercentage}%`};

  position: absolute;

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};
`
