import * as S from "./SignupInputContainer.Styles"
import SignupInputItem from "./SignupInputItem"

const SignupInputContainer = () => {
  return (
    <S.SignupInputContainerLayout>
      <SignupInputItem
        title="이메일"
        type="email"
        placeholder="이메일을 입력해주세요."
        errorMessage="사용가능한 이메일입니다."
      />
      <SignupInputItem
        title="이름"
        type="name"
        placeholder="이름을 입력해주세요."
        errorMessage="사용 가능한 이름입니다."
      />
      <SignupInputItem
        title="비밀번호"
        type="password"
        placeholder="비밀번호를 4자리 이상 입력해주세요."
      />
      <SignupInputItem
        type="password"
        placeholder="설정한 비밀번호와 동일하게 입력해주세요."
        errorMessage="비밀번호 생성 규칙에 맞지 않습니다."
      />
    </S.SignupInputContainerLayout>
  )
}

export default SignupInputContainer
