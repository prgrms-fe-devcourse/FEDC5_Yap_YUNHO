import styled from "styled-components"

export const MediaPlayerPlaySliderLayout = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  align-items: center;

  position: relative;

  border: 1px solid red;
`

export const PlaySliderRail = styled.div`
  width: 100%;
  height: 20%;

  position: absolute;

  background-color: #fff;
  border-radius: 4px;
`

export const PlaySliderHandle = styled.div<{ $leftPercentage: number }>`
  width: 5%;
  height: 35%;

  position: absolute;
  left: ${({ $leftPercentage }) => `${$leftPercentage - 2}%`};

  background-color: red;
  border-radius: 50%;
`

export const PlaySliderTrack = styled.div<{ $widthPercentage: number }>`
  height: 20%;
  width: ${({ $widthPercentage }) => `${$widthPercentage}%`};

  position: absolute;

  background-color: green;
`
