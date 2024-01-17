import * as S from "./UserEditInputContainer.Styles"
import type { OnChange, RequiredUserInfo } from "../../types"
import UserEditInputItem from "./UserEditInputItem"
import { SIGNUP_PLACEHOLDER_MESSAGE } from "@/constants/placeholderMessage"

interface UserEditInputContainerProp {
  onChange: OnChange
  requiredUserInfo: RequiredUserInfo
  errorMessage: RequiredUserInfo
  email: string
}

const UserEditInputContainer = ({
  onChange,
  requiredUserInfo,
  errorMessage,
  email,
}: UserEditInputContainerProp) => {
  return (
    <S.UserEditInputContainerLayout>
      <UserEditInputItem
        title="이메일"
        type="text"
        name="email"
        value={email}
        disabled={true}
      />
      <UserEditInputItem
        title="닉네임"
        type="text"
        name="nickname"
        placeholder={SIGNUP_PLACEHOLDER_MESSAGE.NICKNAME}
        errorMessage={errorMessage.nickname}
        onChange={onChange}
        value={requiredUserInfo.nickname}
      />
      <UserEditInputItem
        title="비밀번호"
        type="password"
        name="password"
        errorMessage={errorMessage.password}
        placeholder={SIGNUP_PLACEHOLDER_MESSAGE.PASSWORD}
        onChange={onChange}
        value={requiredUserInfo.password}
      />
      <UserEditInputItem
        type="password"
        name="passwordCheck"
        placeholder={SIGNUP_PLACEHOLDER_MESSAGE.CHECK_SAME_PASSWORD}
        errorMessage={errorMessage.passwordCheck}
        onChange={onChange}
        value={requiredUserInfo.passwordCheck}
      />
    </S.UserEditInputContainerLayout>
  )
}

export default UserEditInputContainer
