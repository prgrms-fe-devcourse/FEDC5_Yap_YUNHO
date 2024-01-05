import { HandleEditPost } from "@/components/PostEdit/PostEdit.Types"
import * as S from "./PostEditUrl.Styles"
import useModal from "@/components/Modal/hooks/useModal"
import SmallModal from "@/components/Modal/SmallModal"

interface PostEditUrlProps {
  text: string
  placeholder?: string
  onEdit: HandleEditPost
}

const PostEditUrl = ({ placeholder, text, onEdit }: PostEditUrlProps) => {
  const { isModalToggle, showModal, closeModal } = useModal()

  return (
    <>
      <S.PostEditUrlLayout>
        <S.PostEditUrlTitle>영상 URL</S.PostEditUrlTitle>
        <S.PostEditUrlInput
          readOnly
          value={text}
          placeholder={placeholder}
          onClick={() => showModal()}
        />
      </S.PostEditUrlLayout>

      <SmallModal isShow={isModalToggle}>
        <S.PostEditPromptLayout>
          <S.PostEditPromptContainer>
            <S.PostEditPromptTitle>
              {`등록하실 URL을 입력하신 후
              등록 버튼을 눌러주세요!`}
            </S.PostEditPromptTitle>
            <S.PostEditPromptInput />
          </S.PostEditPromptContainer>
          <S.PostEditPromptActions>
            <S.PostEditPromptButton>취소</S.PostEditPromptButton>
            <S.PostEditPromptButton>등록</S.PostEditPromptButton>
          </S.PostEditPromptActions>
        </S.PostEditPromptLayout>
      </SmallModal>
    </>
  )
}

export default PostEditUrl
