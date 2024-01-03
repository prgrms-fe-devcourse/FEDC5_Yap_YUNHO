export type TogglePlayer = (params: { type: "play" | "mute" }) => void

export type ChangePlayer = (params: {
  type: "play" | "volume" | "onProgress"
  percent: number
}) => void

export type ChangeUrl = (url: string) => void

export interface UseMediaPlayerStore {
  playUrl: string
  isPlaying: boolean
  isMute: boolean
  volume: number
  playPercent: number
  togglePlayer: TogglePlayer
  changeRange: ChangePlayer
  changeUrl: ChangeUrl
}
