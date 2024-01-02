import useMediaPlayerStore from "@/components/MediaPlayer/store/useMediaPlayerStore"
import { useRef } from "react"
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
    playRange,
    volume,
    togglePlayer,
    changeRange,
    changeUrl,
  } = useMediaPlayerStore()

  const onClickPlayer: TogglePlayer = (toggleType) => {
    togglePlayer(toggleType)
  }

  const onChangeRange: ChangePlayer = ({ type, percentage }) => {
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
  }

  const onChangeUrl: ChangeUrl = (url) => {
    // 이후 EditPage 에서의 player의 초기화를 위한 조건 - 해당 주석 다음 PR에서 제거 예정
    if (url === MEDIA_PLAYER_EMPTY_URL_KEYWORD) {
      changeUrl("")
      return
    }

    const isCanPlay = ReactPlayer.canPlay(url)
    if (isCanPlay) {
      changeUrl(url)
    }
  }

  return {
    playUrl,
    isPlaying,
    isMute,
    playerRef,
    playRange,
    volume,
    onClickPlayer,
    onChangeRange,
    onChangeUrl,
  }
}

export default useMediaPlayer
