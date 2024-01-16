import * as S from "./UserEditInputContainer.Styles"
import type { OnChange, RequiredUserInfo } from "../../types"
import UserEditInputItem from "./UserEditInputItem"

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
        placeholder="닉네임을 입력해주세요."
        errorMessage={errorMessage.nickname}
        onChange={onChange}
        value={requiredUserInfo.nickname}
      />
      <UserEditInputItem
        title="비밀번호"
        type="password"
        name="password"
        errorMessage={errorMessage.password}
        placeholder="비밀번호를 4자리 이상 입력해주세요."
        onChange={onChange}
        value={requiredUserInfo.password}
      />
      <UserEditInputItem
        type="password"
        name="passwordCheck"
        placeholder="설정한 비밀번호와 동일하게 입력해주세요."
        errorMessage={errorMessage.passwordCheck}
        onChange={onChange}
        value={requiredUserInfo.passwordCheck}
      />
    </S.UserEditInputContainerLayout>
  )
}

export default UserEditInputContainer
