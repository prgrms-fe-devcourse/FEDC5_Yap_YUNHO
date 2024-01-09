import * as S from "./SignupInputContainer.Styles"
import SignupInputItem from "./SignupInputItem"

const SignupInputContainer = () => {
  return (
    <S.SignupInputContainerLayout>
      <SignupInputItem
        title="이메일"
        errorMessage="사용가능한 이메일입니다."
      />
      <SignupInputItem
        title="이름"
        errorMessage="사용 가능한 이름입니다."
      />
      <SignupInputItem
        title="비밀번호"
        errorMessage="비밀번호 생성 규칙에 맞지 않습니다."
        additionalInput={<input style={{ width: "27rem" }} />}
      />
    </S.SignupInputContainerLayout>
  )
}

export default SignupInputContainer
