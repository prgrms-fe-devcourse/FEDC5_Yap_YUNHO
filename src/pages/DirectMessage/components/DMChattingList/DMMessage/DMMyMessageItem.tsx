import MyMessage from "./MyMessage/MyMessage"
import { MessageProps } from "./../../../DirectMessage.Types"

const DMMyMessageItem = ({ children }: MessageProps) => {
  return <MyMessage>{children}</MyMessage>
}

export default DMMyMessageItem
