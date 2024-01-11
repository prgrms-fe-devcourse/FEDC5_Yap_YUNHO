import { PostComment } from "@/types"
import * as S from "./PostCommentItem.Styles"
import useAuthUserStore from "@/stores/useAuthUserStore"
import DeleteIcon from "@mui/icons-material/Delete"
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline"

interface PostCommentItemProps {
  comment: PostComment
}

const PostCommentItem = ({ comment }: PostCommentItemProps) => {
  const { user } = useAuthUserStore()
  const { author } = comment

  const isMyComment = author._id === user._id

  console.log(isMyComment)
  return (
    <S.PostCommentItemLayout>
      <S.PostCommentItemUserProfile $profile={author.image} />
      <S.PostCommentItemContainer></S.PostCommentItemContainer>
      <S.PostCommentItemActions>
        {isMyComment && (
          <>
            <S.PostCommentItemButton>
              <DeleteIcon />
            </S.PostCommentItemButton>
            <S.PostCommentItemButton>
              <ModeEditOutlineIcon />
            </S.PostCommentItemButton>
          </>
        )}
      </S.PostCommentItemActions>
    </S.PostCommentItemLayout>
  )
}

export default PostCommentItem
