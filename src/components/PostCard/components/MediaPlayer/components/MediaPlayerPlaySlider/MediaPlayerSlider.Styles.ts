import styled from "styled-components"

export const MediaPlayerPlaySliderLayout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PlaySliderRail = styled.div`
  width: 100%;
  height: 100%;

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
  height: 140%;

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
  height: 100%;

  position: absolute;

  background-color: ${({ theme }) => theme.colors.point};
  border-radius: ${({ theme }) => theme.radius.size8};
`

export const playSliderContainer = styled.div`
  width: 90%;
  height: 20%;

  display: flex;
  align-items: center;

  position: relative;

  cursor: pointer;

  &:hover {
    ${PlaySliderRail} {
      background-color: ${({ theme }) => theme.colors.sub};
    }

    ${PlaySliderHandle} {
      background-color: ${({ theme }) => theme.colors.point};
    }

    ${PlaySliderTrack} {
      background-color: ${({ theme }) => theme.colors.point_alt};
    }
  }
`
