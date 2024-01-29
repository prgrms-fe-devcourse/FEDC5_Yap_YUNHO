import { create } from "zustand"
import { UseMediaPlayerStore } from "./useMediaPlayerStore.Types"
import { MEDIA_PLAYER_INITIAL_VOLUME_PERCENTAGE } from "../constants/MediaPlayer.Constants"

const useMediaPlayerStore = create<UseMediaPlayerStore>()((set) => ({
  playUrl: "",
  isPlaying: false,
  isMute: false,
  playPercent: 0,
  volume: MEDIA_PLAYER_INITIAL_VOLUME_PERCENTAGE,

  togglePlayer: ({ type }) => {
    if (type === "play") {
      set((store) => ({
        ...store,
        isPlaying: !store.isPlaying,
      }))
    }

    if (type === "mute") {
      set((store) => ({
        ...store,
        isMute: !store.isMute,
      }))
    }
  },

  changeRange: ({ type, percent }) => {
    if (type === "play" || type === "onProgress") {
      set((store) => ({
        ...store,
        playPercent: percent,
      }))
    }

    if (type === "volume") {
      set((store) => ({
        ...store,
        volume: percent,
      }))
    }
  },

  changeUrl: (url) => {
    set((store) => ({ ...store, playUrl: url }))
  },
}))

export default useMediaPlayerStore
