import * as S from "./UserEdit.Styles"
import UserEditForm from "./components/UserEditForm"
import { useNavigate, useParams } from "react-router-dom"

import useAuthUserStore from "@/stores/useAuthUserStore"
import { useEffect } from "react"

export default function UserEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isLoggedIn, user } = useAuthUserStore()

  useEffect(() => {
    if (!id || !isLoggedIn || id !== user._id) {
      navigate("/", { replace: true })
    }
  }, [id, isLoggedIn, navigate, user._id])

  if (!user) {
    return
  }

  return (
    <S.UserEditLayout>
      <UserEditForm authUser={user} />
    </S.UserEditLayout>
  )
}
