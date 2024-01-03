import { MouseEvent, useCallback } from "react"
import * as S from "./MediaPlayer.Styles"
import useMediaPlayer from "./hooks/useMediaPlayer"
import { MediaPlayerProps } from "./MediaPlayer.Types"
import MediaPlayerSlider from "./components/MediaPlayerPlaySlider/MediaPlayerSlider"
import ReactPlayer from "react-player"
import { ChangePlayer } from "./store/useMediaPlayerStore.Types"

const MediaPlayer = ({ isBlock }: MediaPlayerProps): React.ReactNode => {
  const {
    playerRef,
    isPlaying,
    isMute,
    playUrl,
    volume,
    onClickPlayer,
    onChangeRange,
  } = useMediaPlayer()

  const handleClickPlayer = useCallback(
    ({ target }: MouseEvent) => {
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
    },
    [isBlock, onClickPlayer],
  )

  const handleChangePlayer: ChangePlayer = useCallback(
    (newRange) => {
      if (isBlock) {
        return
      }

      onChangeRange(newRange)
    },
    [isBlock, onChangeRange],
  )

  return (
    <S.MediaPlayerLayout>
      <S.MediaPlayerHidden>
        <ReactPlayer
          ref={playerRef}
          playing={isBlock ? false : isPlaying}
          muted={isBlock ? true : isMute}
          volume={volume}
          url={"https://www.youtube.com/watch?v=2gliGzb2_1I&t=2703s"}
          config={{
            youtube: {
              playerVars: {
                origin: window.location.origin,
              },
            },
          }}
        />
      </S.MediaPlayerHidden>
      <MediaPlayerSlider
        changeType="play"
        isBlock={false}
        initialValue={0.2}
        onChange={handleChangePlayer}
      />
      <button
        onClick={handleClickPlayer}
        data-click-type="play"
      >
        asdasdas
      </button>
    </S.MediaPlayerLayout>
  )
}

export default MediaPlayer
