import * as S from "./UserEdit.Styles"
import UserEditForm from "./components/UserEditForm"
import { useNavigate, useParams } from "react-router-dom"

import useAuthUserStore from "@/stores/useAuthUserStore"

export default function UserEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isLoggedIn, user, myId } = useAuthUserStore()

  if (!user) {
    return
  }

  if (!isLoggedIn || id !== myId) {
    navigate("/", { replace: true })
  }

  return (
    <S.UserEditLayout>
      <UserEditForm authUser={user} />
    </S.UserEditLayout>
  )
}
