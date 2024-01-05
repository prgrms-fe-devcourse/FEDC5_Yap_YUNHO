import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { UseMediaPlayerStore } from "./useMediaPlayerStore.Types"
import { MEDIA_PLAYER_INITIAL_VOLUME_PERCENTAGE } from "../constants/MediaPlayer"

const useMediaPlayerStore = create<UseMediaPlayerStore>()(
  devtools((set) => ({
    playUrl: "",
    isPlaying: true,
    isMute: false,
    playRange: 0,
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

    changeRange: ({ type, percentage }) => {
      if (type === "play" || type === "onProgress") {
        set((store) => ({
          ...store,
          playRange: percentage,
        }))
      }

      if (type === "volume") {
        set((store) => ({
          ...store,
          volume: percentage,
        }))
      }
    },

    changeUrl: (url) => {
      set((store) => ({ ...store, playUrl: url }))
    },
  })),
)

export default useMediaPlayerStore
