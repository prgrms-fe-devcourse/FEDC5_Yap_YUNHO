import { useNavigate } from "react-router-dom"
import { HandleMenuClickProps } from "../types"
import { API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"
import authToken from "@/stores/authToken"

const useMenuClick = () => {
  const navigate = useNavigate()
  const { setLogin, setLogout } = useAuthUserStore()

  const handleMenuClick: HandleMenuClickProps = (menu) => {
    switch (menu) {
      case "로그인":
        // navigate("/login")
        handleLogin()
        break
      case "로그아웃":
        handleLogout()
        break
      case "DM":
        navigate("/directmessage")
        break
      case "게시물 생성":
        // 게시물 생성 모달
        break
      case "알림":
        // 알림 창(후순위)
        break
      default:
        break
    }
  }

  const handleLogin = async () => {
    await API.post("login", {
      email: "gnsdh8616@gmail.com",
      password: "gch220874!",
    }).then((res) => {
      const { user, token } = res.data
      setLogin(user, token)
      authToken.setToken(token)
    })
  }

  const handleLogout = async () => {
    await API.post("/logout")
      .then(() => {
        setLogout()
        navigate("/")
      })
      .catch((err) => {
        console.log("로그아웃 오류", err)
      })
  }

  return { handleMenuClick }
}

export default useMenuClick
