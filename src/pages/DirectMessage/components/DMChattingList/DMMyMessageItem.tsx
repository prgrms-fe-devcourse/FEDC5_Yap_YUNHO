import { MessageProps } from "../../types"
import MyMessage from "./MyMessage"

const DMMyMessageItem = ({ children }: MessageProps) => {
  console.log("gg")
  return <MyMessage>{children}</MyMessage>
}

export default DMMyMessageItem
