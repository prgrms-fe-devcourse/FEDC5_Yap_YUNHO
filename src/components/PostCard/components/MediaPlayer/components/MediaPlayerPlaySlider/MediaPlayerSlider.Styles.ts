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

export const PlaySliderHandle = styled.div.attrs<{ $leftPercent: number }>(
  (props) => ({
    style: {
      left: `${props.$leftPercent - 2}%`,
    },
  }),
)`
  width: 2%;
  height: 140%;

  position: absolute;

  background-color: ${({ theme }) => theme.colors.point_alt};
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.4);

  opacity: 0;
`

export const PlaySliderTrack = styled.div.attrs<{ $widthPercent: number }>(
  (props) => ({
    style: {
      width: `${props.$widthPercent}%`,
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
      opacity: 1;
    }

    ${PlaySliderTrack} {
      background-color: ${({ theme }) => theme.colors.point_alt};
    }
  }
`
