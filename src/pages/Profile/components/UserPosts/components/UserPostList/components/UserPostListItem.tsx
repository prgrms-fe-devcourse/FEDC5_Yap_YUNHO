import { useNavigate } from "react-router-dom"
import * as S from "./UserPostListItem.Styles"
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt"
import useHover from "@/components/Popover/hooks/useHover"
import { Comment, ThumbUpAlt } from "@mui/icons-material"

export interface UserPostListItemProps {
  thumbnail: string
  id?: string
  likeCount?: number
  commentCount?: number
  isLikedByMe?: boolean
}

const UserPostListItem = ({
  thumbnail,
  id,
  likeCount,
  commentCount,
  isLikedByMe = true,
}: UserPostListItemProps) => {
  const navigate = useNavigate()

  const { hoverRef, isHover } = useHover()

  const onClickPostItem = () => {
    navigate(`postdetail/${id}`)
  }

  return (
    <>
      <S.UserPostListItemContainer
        onClick={onClickPostItem}
        ref={hoverRef}
        $src={thumbnail}
      >
        {isHover && (
          <S.PostItemHoverContainer>
            <S.PostItemHoverIconContainer>
              {isLikedByMe ? <ThumbUpAlt /> : <ThumbUpOffAltIcon />}
              {likeCount}
            </S.PostItemHoverIconContainer>

            <S.PostItemHoverIconContainer>
              <Comment />
              {commentCount}
            </S.PostItemHoverIconContainer>
          </S.PostItemHoverContainer>
        )}
      </S.UserPostListItemContainer>
    </>
  )
}

export default UserPostListItem
