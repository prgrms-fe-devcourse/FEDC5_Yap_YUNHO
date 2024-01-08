import { ChangeEvent } from "react"
import * as S from "./SignupInputContainer.Styles"
import SignupInputItem from "./SignupInputItem"

export type OnChange = (event: ChangeEvent<HTMLInputElement>) => void
interface RequiredUserInfo {
  email: string
  nickname: string
  password: string
  passwordCheck: string
}
interface SignupInputContainerProp {
  onChange: OnChange
  requiredUserInfo: RequiredUserInfo
}

const SignupInputContainer = ({
  onChange,
  requiredUserInfo,
}: SignupInputContainerProp) => {
  return (
    <S.SignupInputContainerLayout>
      <SignupInputItem
        title="이메일"
        type="email"
        name="email"
        placeholder="이메일을 입력해주세요."
        errorMessage="사용가능한 이메일입니다."
        onChange={onChange}
        value={requiredUserInfo.email}
      />
      <SignupInputItem
        title="닉네임"
        type="nickname"
        name="nickname"
        placeholder="닉네임을 입력해주세요."
        errorMessage="사용 가능한 닉네임입니다."
        onChange={onChange}
        value={requiredUserInfo.nickname}
      />
      <SignupInputItem
        title="비밀번호"
        type="password"
        name="password"
        placeholder="비밀번호를 4자리 이상 입력해주세요."
        onChange={onChange}
        value={requiredUserInfo.password}
      />
      <SignupInputItem
        type="password"
        name="passwordCheck"
        placeholder="설정한 비밀번호와 동일하게 입력해주세요."
        errorMessage="비밀번호 생성 규칙에 맞지 않습니다."
        onChange={onChange}
        value={requiredUserInfo.passwordCheck}
      />
    </S.SignupInputContainerLayout>
  )
}

export default SignupInputContainer
