import * as S from "./MessageInput.Styles"
import MessageProfile from "../../MessageGroupList/MessageProfile"
import SendIcon from "@mui/icons-material/Send"
import { DM_PLACEHOLDER_MESSAGE } from "@/constants/placeholderMessage"
import useTextArea from "@/pages/DirectMessage/hooks/useTextArea"
import useGetMyProfileImg from "@/pages/DirectMessage/hooks/useGetMyProfileImg"

export interface MessageInputProps {
  scrollRef: React.RefObject<HTMLDivElement>
  setMessageListHeight: (messageListHeight: number) => void
}

const MessageInput = ({
  scrollRef,
  setMessageListHeight,
}: MessageInputProps) => {
  const {
    textValue,
    handleInputChange,
    handleSubmit,
    textRef,
    AlertModalComponent,
    handleEnter,
  } = useTextArea({ scrollRef, setMessageListHeight })

  const { myProfileImg } = useGetMyProfileImg()

  return (
    <>
      {AlertModalComponent}
      <S.MessageInputLayout>
        <S.MessageInputForm onSubmit={handleSubmit}>
          <MessageProfile profileImg={myProfileImg} />
          <S.MessageInputItem
            ref={textRef}
            placeholder={DM_PLACEHOLDER_MESSAGE.SEND_MESSAGE_INPUT}
            onChange={handleInputChange}
            onKeyDown={handleEnter}
            value={textValue}
          />
          <S.MessageSendButton>
            <SendIcon />
          </S.MessageSendButton>
        </S.MessageInputForm>
      </S.MessageInputLayout>
    </>
  )
}

export default MessageInput
