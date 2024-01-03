export type TogglePlayer = (params: { type: "play" | "mute" }) => void

export type ChangePlayer = (params: {
  type: "play" | "volume" | "onProgress"
  percentage: number
}) => void

export type ChangeUrl = (url: string) => void

export interface UseMediaPlayerStore {
  playUrl: string
  isPlaying: boolean
  isMute: boolean
  volume: number
  playRange: number
  togglePlayer: TogglePlayer
  changeRange: ChangePlayer
  changeUrl: ChangeUrl
}
