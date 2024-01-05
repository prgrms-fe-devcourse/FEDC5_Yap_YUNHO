import { useState } from "react"
import UserCreatePostButton from "./UserCreatePostButton"
import UserLikePostButton from "./UserLikePostButton"
import * as S from "./UserPostFilter.Styles"
import { USER_POST_FILTER_LIST } from "@/pages/Profile/constants/UserPost.Constants"
import { useParams } from "react-router-dom"
import useAuthUserStore from "@/stores/useAuthUserStore"

const UserPostFilter = () => {
  const { id } = useParams()
  const { user } = useAuthUserStore()
  const isMyPage = id === user._id

  const [selectedButton, setSelectedButton] = useState(
    USER_POST_FILTER_LIST.create,
  )

  return (
    <S.UserPostFilterLayout>
      <UserCreatePostButton
        $isSelected={selectedButton === USER_POST_FILTER_LIST.create}
        onClick={() => setSelectedButton(USER_POST_FILTER_LIST.create)}
        $isMyPage={isMyPage}
      />
      {isMyPage && (
        <UserLikePostButton
          $isSelected={selectedButton === USER_POST_FILTER_LIST.like}
          onClick={() => setSelectedButton(USER_POST_FILTER_LIST.like)}
        />
      )}
    </S.UserPostFilterLayout>
  )
}

export default UserPostFilter
