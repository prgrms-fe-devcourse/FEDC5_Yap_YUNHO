import { ChangeEvent, useEffect, useState } from "react"
import * as S from "./UserEditForm.Styles"
import { theme } from "@/styles/theme"
import UserEditInputContainer from "./UserEditInput/UserEditInputContainer"
import ProfileImageUpload from "@/components/ProfileImageUpload/ProfileImageUpload"
import { getNewErrorMessage } from "../utils/validateInput"
import useEditNickname from "../hooks/useEditNickname"
import useEditPassword from "../hooks/useEditPassword"
import useEditUserProfileImage from "../hooks/useEditUserProfileImage"

interface UserEditFormProp {
  userInfo: {
    email: string
    image: string
  }
}

const UserEditForm = ({ userInfo }: UserEditFormProp) => {
  useEffect(() => {
    console.log("userInfo", userInfo)
  }, [userInfo])
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

  const [formData, setFormData] = useState(new FormData())

  const { EditUserNickname } = useEditNickname()
  const { EditUserPassword } = useEditPassword()
  const { EditUserProfileImage } = useEditUserProfileImage()

  const handleEdit = () => {
    const { nickname, password } = requiredUserInfo
    console.log("requiredUserInfo", requiredUserInfo)
    for (const data of formData.entries()) {
      console.log("data", data)
    }

    // 수정 api 전부 하기
    // EditUserNickname.mutate({ fullName: nickname, username: "" })
    // EditUserPassword.mutate({ password })
    // EditUserProfileImage.mutate(formData)
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
            email={userInfo.email}
          />
          <ProfileImageUpload
            setFormData={setFormData}
            initialImage={userInfo.image}
          />
        </S.UserEditFormItem>
        <S.ButtonContainer>
          <S.Button
            $width={18}
            $color={theme.colors.sub_alt}
            onClick={() => {
              // navigate("/profile/:id")
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
