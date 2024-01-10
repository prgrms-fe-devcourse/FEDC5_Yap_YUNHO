import { MessageProps } from "../../../types"
import MyMessage from "./MyMessage/MyMessage"

const DMMyMessageItem = ({ children }: MessageProps) => {
  return <MyMessage>{children}</MyMessage>
}

export default DMMyMessageItem
