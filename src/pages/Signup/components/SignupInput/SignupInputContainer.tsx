import * as S from "./SignupInputContainer.Styles"
import SignupInputItem from "./SignupInputItem"
import type { OnChange, RequiredUserInfo } from "../../types"

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
        type="email"
        name="email"
        placeholder="이메일을 입력해주세요."
        errorMessage={errorMessage.email}
        onChange={onChange}
        value={requiredUserInfo.email}
      />
      <SignupInputItem
        title="닉네임"
        type="nickname"
        name="nickname"
        placeholder="닉네임을 입력해주세요."
        errorMessage={errorMessage.nickname}
        onChange={onChange}
        value={requiredUserInfo.nickname}
      />
      <SignupInputItem
        title="비밀번호"
        type="password"
        name="password"
        errorMessage={errorMessage.password}
        placeholder="비밀번호를 4자리 이상 입력해주세요."
        onChange={onChange}
        value={requiredUserInfo.password}
      />
      <SignupInputItem
        type="password"
        name="passwordCheck"
        placeholder="설정한 비밀번호와 동일하게 입력해주세요."
        errorMessage={errorMessage.passwordCheck}
        onChange={onChange}
        value={requiredUserInfo.passwordCheck}
      />
    </S.SignupInputContainerLayout>
  )
}

export default SignupInputContainer
