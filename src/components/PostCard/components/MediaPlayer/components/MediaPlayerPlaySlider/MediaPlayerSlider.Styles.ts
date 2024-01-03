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
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.4);
`

export const PlaySliderHandle = styled.div.attrs<{ $leftPercentage: number }>(
  (props) => ({
    style: {
      left: `${props.$leftPercentage - 2}%`,
    },
  }),
)`
  width: 2%;
  height: 30%;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.point_alt};
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.4);
`

export const PlaySliderTrack = styled.div.attrs<{ $widthPercentage: number }>(
  (props) => ({
    style: {
      width: `${props.$widthPercentage}%`,
    },
  }),
)`
  height: 20%;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};
`
