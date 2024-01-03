import useMediaPlayerStore from "@/components/PostCard/components/MediaPlayer/store/useMediaPlayerStore"
import { useCallback, useRef } from "react"
import ReactPlayer from "react-player"
import {
  ChangePlayer,
  ChangeUrl,
  TogglePlayer,
} from "../store/useMediaPlayerStore.Types"
import {
  MEDIA_PLAYER_EMPTY_URL_KEYWORD,
  PROGRESS_BAR_RANGE_PERCENTAGE,
} from "../constants/MediaPlayer"

const useMediaPlayer = () => {
  const playerRef = useRef<ReactPlayer>(null)
  const {
    playUrl,
    isMute,
    isPlaying,
    volume,
    togglePlayer,
    changeRange,
    changeUrl,
  } = useMediaPlayerStore()

  const onClickPlayer: TogglePlayer = useCallback(
    (toggleType) => {
      togglePlayer(toggleType)
    },
    [togglePlayer],
  )

  const onChangeRange: ChangePlayer = useCallback(
    ({ type, percentage }) => {
      const { current } = playerRef

      if (
        !current &&
        percentage < PROGRESS_BAR_RANGE_PERCENTAGE.MIN &&
        percentage > PROGRESS_BAR_RANGE_PERCENTAGE.MAX
      ) {
        return
      }

      if (!(current instanceof ReactPlayer)) {
        return
      }

      changeRange({ type, percentage })

      if (type === "play") {
        current.seekTo(percentage)
      }
    },
    [changeRange],
  )

  const onChangeUrl: ChangeUrl = useCallback(
    (url) => {
      if (url === MEDIA_PLAYER_EMPTY_URL_KEYWORD) {
        changeUrl("")
        return
      }

      const isCanPlay = ReactPlayer.canPlay(url)
      if (isCanPlay) {
        changeUrl(url)
      }
    },
    [changeUrl],
  )

  return {
    playUrl,
    isPlaying,
    isMute,
    playerRef,
    volume,
    onClickPlayer,
    onChangeRange,
    onChangeUrl,
  }
}

export default useMediaPlayer
