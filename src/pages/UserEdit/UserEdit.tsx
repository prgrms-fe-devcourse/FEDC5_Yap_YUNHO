import { AUTH_API } from "@/apis/Api"
import * as S from "./UserEdit.Styles"
import UserEditForm from "./components/UserEditForm"
// import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { User } from "@/types"

export default function UserEdit() {
  // const {id} = useParams()
  const [userInfo, setUserInfo] = useState<User>(null)

  const { isLoggedIn, user, myId } = useAuthUserStore() // 이거로 바꿔야함
  console.log("isLoggedIn", isLoggedIn)
  console.log("user :", user)
  console.log("myId", myId)

  // useAuthUserStore 의 user에서 이미지 가져오기

  useEffect(() => {
    AUTH_API.get("/auth-user").then((res) => {
      setUserInfo(res.data)
    })
  }, [])

  if (!userInfo) {
    return
  }

  return (
    <S.UserEditLayout>
      <UserEditForm authUser={userInfo} />
    </S.UserEditLayout>
  )
}
