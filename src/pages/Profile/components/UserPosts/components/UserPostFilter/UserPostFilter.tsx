import { useState } from "react"
import * as S from "./UserPostFilter.Styles"
import { USER_POST_FILTER_LIST } from "@/pages/Profile/constants/UserPost.Constants"
import { useParams } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"
import UserPostFilterButton from "./UserPostFilterButton"

const UserPostFilter = () => {
  const { id } = useParams()
  const { user } = useAuthUserStore()
  const isMyPage = id === user._id

  const [selectedButton, setSelectedButton] = useState(
    USER_POST_FILTER_LIST.create,
  )

  return (
    <S.UserPostFilterLayout $isMyPage={isMyPage}>
      <UserPostFilterButton
        $isSelected={selectedButton === USER_POST_FILTER_LIST.create}
        onClick={() => setSelectedButton(USER_POST_FILTER_LIST.create)}
        title="생성한 게시글"
      />
      {isMyPage && (
        <UserPostFilterButton
          $isSelected={selectedButton === USER_POST_FILTER_LIST.like}
          onClick={() => setSelectedButton(USER_POST_FILTER_LIST.like)}
          title="좋아요한 게시글"
        />
      )}
    </S.UserPostFilterLayout>
  )
}

export default UserPostFilter
