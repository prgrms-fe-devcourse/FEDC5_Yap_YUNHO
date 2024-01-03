import { MouseEvent } from "react"
import { ChangePlayer } from "../../store/useMediaPlayerStore.Types"
import MediaPlayerSlider from "../MediaPlayerPlaySlider/MediaPlayerSlider"
import * as S from "./MediaPlayerBottom.Styles"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import VolumeOffIcon from "@mui/icons-material/VolumeOff"
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled"
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled"

interface MediaPlayerBottomProps {
  isBlock: boolean
  isMute: boolean
  isPlaying: boolean
  onClick: (e: MouseEvent) => void
  onChange: ChangePlayer
}

export const MediaPlayerBottom = ({
  isBlock,
  isMute,
  isPlaying,
  onChange,
  onClick,
}: MediaPlayerBottomProps) => {
  return (
    <S.MediaPlayerBottomLayout>
      <S.MuteButtonContainer>
        <S.MuteButton
          data-click-type="mute"
          onClick={onClick}
        >
          {isMute ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </S.MuteButton>
      </S.MuteButtonContainer>
      <S.PlayButtonContainer>
        <S.PlayButton
          data-click-type="play"
          onClick={onClick}
        >
          {isPlaying ? <PlayCircleFilledIcon /> : <PauseCircleFilledIcon />}
        </S.PlayButton>
      </S.PlayButtonContainer>
      <S.VolumeSliderContainer>
        <MediaPlayerSlider
          isBlock={isBlock}
          onChange={onChange}
          initialValue={0.2}
          changeType="volume"
        />
      </S.VolumeSliderContainer>
    </S.MediaPlayerBottomLayout>
  )
}

export default MediaPlayerBottom
