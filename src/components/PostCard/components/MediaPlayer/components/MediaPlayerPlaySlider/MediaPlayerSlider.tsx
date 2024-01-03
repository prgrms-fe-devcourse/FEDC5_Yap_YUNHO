import { ReactNode, useEffect } from "react"
import useSlider from "../../hooks/useSlider"
import * as S from "./MediaPlayerSlider.Styles"
import { ChangePlayer } from "../../store/useMediaPlayerStore.Types"

interface MediaPlayerSliderProps {
  isBlock: boolean
  initialPercent: number
  percent: number
  changeType: "play" | "volume"
  onChange: ChangePlayer
}

const MediaPlayerSlider = ({
  isBlock,
  initialPercent,
  percent,
  changeType,
  onChange,
}: MediaPlayerSliderProps): ReactNode => {
  const { sliderRef, newPercent, handleMouseDown } = useSlider({
    initialPercent,
  })

  useEffect(() => {
    if (!onChange) {
      return
    }
    onChange({
      type: changeType,
      percent: newPercent,
    })
  }, [changeType, onChange, newPercent])

  return (
    <S.MediaPlayerPlaySliderLayout>
      <S.playSliderContainer
        ref={sliderRef}
        onMouseDown={handleMouseDown}
      >
        <S.PlaySliderRail />
        <S.PlaySliderTrack
          $widthPercentage={isBlock ? initialPercent * 100 : percent * 100}
        />
        <S.PlaySliderHandle
          $leftPercentage={isBlock ? initialPercent * 100 : percent * 100}
        />
      </S.playSliderContainer>
    </S.MediaPlayerPlaySliderLayout>
  )
}

export default MediaPlayerSlider
