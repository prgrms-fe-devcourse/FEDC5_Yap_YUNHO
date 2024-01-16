import { ChangeEvent, useState } from "react"
import * as S from "./UserEditForm.Styles"
import { theme } from "@/styles/theme"
import UserEditInputContainer from "./UserEditInput/UserEditInputContainer"
import ProfileImageUpload from "@/components/ProfileImageUpload/ProfileImageUpload"
import { getNewErrorMessage } from "../utils/validateInput"
import useEditNickname from "../hooks/useEditNickname"
import useEditPassword from "../hooks/useEditPassword"
import useEditUserProfileImage from "../hooks/useEditUserProfileImage"
import { User } from "@/types"
import { useNavigate } from "react-router-dom"

interface UserEditFormProp {
  authUser: User
}

const UserEditForm = ({ authUser }: UserEditFormProp) => {
  const { EditUserNickname } = useEditNickname()
  const { EditUserPassword } = useEditPassword()
  const { EditUserProfileImage } = useEditUserProfileImage()

  const [requiredUserInfo, setRequiredUserInfo] = useState({
    nickname: "",
    password: "",
    passwordCheck: "",
  })

  const [errorMessage, setErrorMessage] = useState({
    nickname: "",
    password: "",
    passwordCheck: "",
  })

  const [formData, setFormData] = useState({
    binary: new FormData(),
    url: "",
  })

  const navigate = useNavigate()

  const handleEdit = async () => {
    const { nickname, password } = requiredUserInfo

    const { binary, url } = formData

    EditUserNickname.mutate({ fullName: nickname, username: "" })
    EditUserPassword.mutate({ password: password })

    if (authUser.image !== url) {
      EditUserProfileImage.mutate(binary)
    }

    navigate(`/profile/${authUser._id}`, { replace: true })
  }

  const validateUserInfo = (userInfoType: string, userInfoValue: string) => {
    const newData = {
      ...requiredUserInfo,
      [userInfoType]: userInfoValue,
    }

    const newErrorMessage = getNewErrorMessage(
      errorMessage,
      userInfoType,
      newData,
    )
    setErrorMessage(newErrorMessage)
  }

  const handleRequiredUserInfo = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event

    validateUserInfo(target.name, target.value)

    setRequiredUserInfo((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const handleDisabled = () => {
    return (
      errorMessage.nickname !== "" ||
      errorMessage.password !== "" ||
      errorMessage.passwordCheck !== "" ||
      requiredUserInfo.nickname === "" ||
      requiredUserInfo.password === "" ||
      requiredUserInfo.passwordCheck === ""
    )
  }

  return (
    <S.UserEditFormLayout>
      <S.UserEditFormTitle>
        닉네임과 프로필 정보를 입력해주세요
      </S.UserEditFormTitle>
      <S.UserEditFormContainer onSubmit={handleEdit}>
        <S.UserEditFormItem>
          <UserEditInputContainer
            requiredUserInfo={requiredUserInfo}
            onChange={handleRequiredUserInfo}
            errorMessage={errorMessage}
            email={authUser.email}
          />
          <ProfileImageUpload
            setFormData={setFormData}
            initialImage={authUser.image}
          />
        </S.UserEditFormItem>
        <S.ButtonContainer>
          <S.Button
            $width={18}
            $color={theme.colors.sub_alt}
            onClick={() => {
              navigate(`/profile/${authUser._id}`)
            }}
            type="button"
          >
            취소
          </S.Button>
          <S.Button
            $width={35}
            $color={theme.colors.point}
            type="submit"
            disabled={handleDisabled()}
          >
            변경완료
          </S.Button>
        </S.ButtonContainer>
      </S.UserEditFormContainer>
    </S.UserEditFormLayout>
  )
}

export default UserEditForm
