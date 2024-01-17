import * as S from "./SignupInputContainer.Styles"
import SignupInputItem from "./SignupInputItem"
import type { OnChange, RequiredUserInfo } from "../../types"
import { SIGNUP_PLACEHOLDER_MESSAGE } from "@/constants/placeholderMessage"

interface SignupInputContainerProp {
  onChange: OnChange
  requiredUserInfo: RequiredUserInfo
  errorMessage: RequiredUserInfo
}

const SignupInputContainer = ({
  onChange,
  requiredUserInfo,
  errorMessage,
}: SignupInputContainerProp) => {
  return (
    <S.SignupInputContainerLayout>
      <SignupInputItem
        title="이메일"
        type="text"
        name="email"
        placeholder={SIGNUP_PLACEHOLDER_MESSAGE.EMAIL}
        errorMessage={errorMessage.email}
        onChange={onChange}
        value={requiredUserInfo.email}
      />
      <SignupInputItem
        title="닉네임"
        type="text"
        name="nickname"
        placeholder={SIGNUP_PLACEHOLDER_MESSAGE.NICKNAME}
        errorMessage={errorMessage.nickname}
        onChange={onChange}
        value={requiredUserInfo.nickname}
      />
      <SignupInputItem
        title="비밀번호"
        type="password"
        name="password"
        errorMessage={errorMessage.password}
        placeholder={SIGNUP_PLACEHOLDER_MESSAGE.PASSWORD}
        onChange={onChange}
        value={requiredUserInfo.password}
      />
      <SignupInputItem
        type="password"
        name="passwordCheck"
        placeholder={SIGNUP_PLACEHOLDER_MESSAGE.CHECK_SAME_PASSWORD}
        errorMessage={errorMessage.passwordCheck}
        onChange={onChange}
        value={requiredUserInfo.passwordCheck}
      />
    </S.SignupInputContainerLayout>
  )
}

export default SignupInputContainer
