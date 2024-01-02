import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { UseMediaPlayerStore } from "./useMediaPlayerStore.Types"

const useMediaPlayerStore = create<UseMediaPlayerStore>()(
  devtools((set) => ({
    playUrl: "https://www.youtube.com/watch?v=gwcw5S9HSUE",
    isPlaying: false,
    isMute: false,
    playRange: 0,
    volume: 0.2,

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
      if (type === "play") {
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

    changeUrl: ({ url }) => {
      set((store) => ({ ...store, playUrl: url }))
    },
  })),
)

export default useMediaPlayerStore
