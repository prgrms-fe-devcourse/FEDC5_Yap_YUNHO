import { ChangeEvent, MouseEvent } from "react"
import * as S from "./MediaPlayer.Styles"
import useMediaPlayer from "./hooks/useMediaPlayer"
import { MediaPlayerProps } from "./MediaPlayer.Types"

const MediaPlayer = ({ isBlock }: MediaPlayerProps): React.ReactNode => {
  const { onClickPlayer, onChangeRange } = useMediaPlayer()

  const handleClickPlayer = ({ target }: MouseEvent) => {
    if (isBlock) {
      return
    }

    if (!(target instanceof HTMLElement)) {
      return
    }

    const { clickType } = target.dataset
    if (clickType === "play" || clickType === "mute") {
      onClickPlayer({ type: clickType })
    }
  }

  const handleChangePlayer = ({ target }: ChangeEvent) => {
    if (isBlock) {
      return
    }

    if (!(target instanceof HTMLInputElement)) {
      return
    }

    const { value, dataset } = target
    const { changeType } = dataset
    const convertedValue = parseFloat(value)
    if (!changeType) {
      return
    }

    if (changeType === "volume" || changeType === "play") {
      onChangeRange({ type: changeType, percentage: convertedValue })
    }
  }

  return <S.MediaPlayerLayout></S.MediaPlayerLayout>
}

export default MediaPlayer
