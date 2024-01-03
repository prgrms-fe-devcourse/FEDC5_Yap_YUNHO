import { MouseEvent, useCallback, useEffect } from "react"
import * as S from "./MediaPlayer.Styles"
import useMediaPlayer from "./hooks/useMediaPlayer"
import { MediaPlayerProps } from "./MediaPlayer.Types"
import MediaPlayerSlider from "./components/MediaPlayerPlaySlider/MediaPlayerSlider"
import ReactPlayer from "react-player"
import { ChangePlayer } from "./store/useMediaPlayerStore.Types"
import MediaPlayerBottom from "./components/MediaPlayerBottom/MediaPlayerBottom"

const MediaPlayer = ({ isBlock, url }: MediaPlayerProps): React.ReactNode => {
  const {
    playerRef,
    isPlaying,
    isMute,
    playUrl,
    playPercent,
    volume,
    onClickPlayer,
    onChangeRange,
    onChangeUrl,
  } = useMediaPlayer()

  useEffect(() => {
    if (isBlock) {
      return
    }

    onChangeUrl(url)
  }, [isBlock, onChangeUrl, url])

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
    <>
      <S.MediaPlayerHidden>
        <ReactPlayer
          ref={playerRef}
          playing={isBlock ? false : isPlaying}
          muted={isBlock ? true : isMute}
          volume={isBlock ? 0.2 : volume}
          url={isBlock ? "" : playUrl}
          config={{
            youtube: {
              playerVars: {
                origin: window.location.origin,
              },
            },
          }}
          onProgress={({ played }) => {
            handleChangePlayer({ type: "onProgress", percent: played })
          }}
        />
      </S.MediaPlayerHidden>

      <S.MediaPlayerLayout>
        <S.MediaPlayerTop>
          <MediaPlayerSlider
            changeType="play"
            isBlock={isBlock}
            initialPercent={0}
            percent={playPercent}
            onChange={handleChangePlayer}
          />
        </S.MediaPlayerTop>
        <MediaPlayerBottom
          isBlock={isBlock}
          isMute={isMute}
          isPlaying={isPlaying}
          volume={volume}
          onClick={handleClickPlayer}
          onChange={handleChangePlayer}
        />
      </S.MediaPlayerLayout>
    </>
  )
}

export default MediaPlayer
