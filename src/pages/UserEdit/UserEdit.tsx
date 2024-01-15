import { AUTH_API } from "@/apis/Api"
import * as S from "./UserEdit.Styles"
import UserEditForm from "./components/UserEditForm"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useAuthUserStore from "@/stores/useAuthUserStore"

export default function UserEdit() {
  // const {id} = useParams()
  const [userInfo, setUserInfo] = useState({ email: "", image: "" })
  const { isLoggedIn, user, myId } = useAuthUserStore()
  console.log("isLoggedIn", isLoggedIn)
  console.log("user :", user)
  console.log("myId", myId)
  // auth-user 로 토큰을 이용해서 서버에서 로그인된 user정보 새로 가져오기 -> 새로고침해도 상태 안 날아가도록
  // useAuthUserStore 의 user에서 이미지 가져오기
  // useQuery 내부에서 email, 프로필 이미지 가져오기
  // 가져온 프로필 이미지는 전달해서 설정
  // 비밀번호는 그냥 새로 설정?

  useEffect(() => {
    AUTH_API.get("/auth-user").then((res) => {
      console.log(res.data)
      const { email, image } = res.data
      setUserInfo({ email, image })
    })
  }, [])

  return (
    <S.UserEditLayout>
      <UserEditForm userInfo={userInfo} />
    </S.UserEditLayout>
  )
}
