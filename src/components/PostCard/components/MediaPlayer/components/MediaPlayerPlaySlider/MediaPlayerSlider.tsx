import { ReactNode, useEffect } from "react"
import useSlider from "../../hooks/useSlider"
import * as S from "./MediaPlayerSlider.Styles"
import { ChangePlayer } from "../../store/useMediaPlayerStore.Types"

interface MediaPlayerSliderProps {
  isBlock: boolean
  initialValue: number
  changeType: "play" | "volume"
  onChange: ChangePlayer
}

const MediaPlayerSlider = ({
  isBlock,
  initialValue,
  changeType,
  onChange,
}: MediaPlayerSliderProps): ReactNode => {
  const { sliderRef, value, handleMouseDown } = useSlider({ initialValue })

  useEffect(() => {
    if (!onChange) {
      return
    }
    onChange({
      type: changeType,
      percentage: value,
    })
  }, [changeType, onChange, value])
  return (
    <S.MediaPlayerPlaySliderLayout ref={sliderRef}>
      <S.PlaySliderRail />
      <S.PlaySliderTrack
        $widthPercentage={isBlock ? initialValue * 100 : value * 100}
      />
      <S.PlaySliderHandle
        $leftPercentage={isBlock ? initialValue * 100 : value * 100}
        onMouseDown={handleMouseDown}
      />
    </S.MediaPlayerPlaySliderLayout>
  )
}

export default MediaPlayerSlider
