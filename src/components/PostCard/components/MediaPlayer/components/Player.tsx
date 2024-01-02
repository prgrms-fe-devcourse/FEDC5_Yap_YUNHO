import { ChangeEvent, MouseEvent, useEffect } from "react"
import useMediaPlayer from "../hooks/useMediaPlayer"
import ReactPlayer from "react-player"

const Player = ({
  isBlock = false,
  url,
}: {
  isBlock?: boolean
  url: string
}) => {
  const {
    playUrl,
    playerRef,
    isMute,
    isPlaying,
    playRange,
    volume,
    onChangeRange,
    onClickPlayer,
    onChangeUrl,
  } = useMediaPlayer()

  useEffect(() => {
    onChangeUrl(url)
  }, [onChangeUrl, url])

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

  const onChangeRangeInput = ({ target }: ChangeEvent) => {
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

  return (
    <ul>
      <li>
        <ReactPlayer
          url={playUrl}
          ref={playerRef}
          playing={isBlock ? false : isPlaying}
          muted={isBlock ? true : isMute}
          volume={isBlock ? 0 : volume}
          config={{
            youtube: {
              playerVars: {
                origin: window.location.origin,
              },
            },
          }}
          style={{ display: "none" }}
        />
      </li>
      <li>
        <button
          onClick={handleClickPlayer}
          data-click-type="play"
        >
          상태 변경 테스트를 위한 플레이 버튼 {`${isPlaying}`}
        </button>
      </li>

      <li
        onClick={handleClickPlayer}
        data-click-type="mute"
      >
        뮤트 변경 테스트를 위한 플레이 버튼
      </li>

      <li>
        <input
          type={"range"}
          data-change-type="play"
          value={isBlock ? 0 : playRange}
          step="any"
          min={0}
          max={1}
          onChange={onChangeRangeInput}
        />
      </li>

      <li>
        <input
          type={"range"}
          data-change-type="volume"
          value={isBlock ? 0 : volume}
          step="any"
          min={0}
          max={1}
          onChange={onChangeRangeInput}
        />
      </li>

      <button
        onClick={() =>
          onChangeUrl("https://www.youtube.com/watch?v=2gliGzb2_1I&t=3642s")
        }
      >
        ChangeURL
      </button>
    </ul>
  )
}

export default Player
