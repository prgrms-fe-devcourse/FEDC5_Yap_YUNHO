import { MouseEvent } from "react"
import * as S from "./MediaPlayer.Styles"
import useMediaPlayer from "./hooks/useMediaPlayer"
import { MediaPlayerProps } from "./MediaPlayer.Types"

const MediaPlayer = ({ isBlock }: MediaPlayerProps): React.ReactNode => {
  const { onClickPlayer } = useMediaPlayer()

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

  return <S.MediaPlayerLayout></S.MediaPlayerLayout>
}

export default MediaPlayer
