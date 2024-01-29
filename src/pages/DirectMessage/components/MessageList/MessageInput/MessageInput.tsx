import * as S from "./MessageInput.Styles"
import MessageProfile from "../../MessageGroupList/MessageGroupUserlist/MessageProfile/MessageProfile"
import SendIcon from "@mui/icons-material/Send"
import { DM_PLACEHOLDER_MESSAGE } from "@/constants/placeholderMessage"
import useTextArea from "@/pages/DirectMessage/hooks/useTextArea"
import useAuthUserStore from "@/stores/useAuthUserStore"

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

  const { user } = useAuthUserStore()

  return (
    <>
      {AlertModalComponent}
      <S.MessageInputLayout>
        <S.MessageInputForm onSubmit={handleSubmit}>
          <MessageProfile profileImg={user.image} />
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
