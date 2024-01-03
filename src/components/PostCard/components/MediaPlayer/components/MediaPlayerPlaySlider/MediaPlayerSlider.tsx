import { ReactNode, useEffect } from "react"
import useSlider from "../../hooks/useSlider"
import * as S from "./MediaPlayerSlider.Styles"
import { ChangePlayer } from "../../store/useMediaPlayerStore.Types"

interface MediaPlayerSliderProps {
  isBlock: boolean
  initialValue: number
  value: number
  changeType: "play" | "volume"
  onChange: ChangePlayer
}

const MediaPlayerSlider = ({
  isBlock,
  initialValue,
  value,
  changeType,
  onChange,
}: MediaPlayerSliderProps): ReactNode => {
  const { sliderRef, newValue, handleMouseDown } = useSlider({ initialValue })

  useEffect(() => {
    if (!onChange) {
      return
    }
    onChange({
      type: changeType,
      percentage: newValue,
    })
  }, [changeType, onChange, newValue])

  return (
    <S.MediaPlayerPlaySliderLayout>
      <S.playSliderContainer
        ref={sliderRef}
        onMouseDown={handleMouseDown}
      >
        <S.PlaySliderRail />
        <S.PlaySliderTrack
          $widthPercentage={isBlock ? initialValue * 100 : value * 100}
        />
        <S.PlaySliderHandle
          $leftPercentage={isBlock ? initialValue * 100 : value * 100}
        />
      </S.playSliderContainer>
    </S.MediaPlayerPlaySliderLayout>
  )
}

export default MediaPlayerSlider
