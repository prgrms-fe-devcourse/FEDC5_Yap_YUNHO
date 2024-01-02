import { ChangeEvent, MouseEvent } from "react"
import useMediaPlayer from "../hooks/useMediaPlayer"
import ReactPlayer from "react-player"

const Player = ({ isPending = true }: { isPending?: boolean }) => {
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

  const handleClickPlayer = ({ target }: MouseEvent) => {
    if (isPending) {
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
    if (isPending) {
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
          playing={isPending ? false : isPlaying}
          muted={isPending ? true : isMute}
          volume={isPending ? 0 : volume}
          config={{
            youtube: {
              playerVars: {
                origin: window.location.origin,
              },
            },
          }}
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
          value={playRange}
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
          value={volume}
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
