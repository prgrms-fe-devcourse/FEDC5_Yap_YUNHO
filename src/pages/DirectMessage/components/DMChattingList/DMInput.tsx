import * as S from "./DMInput.Styles"
import DMListProfile from "./../DMList/DMListProfile"
import Button from "@/components/Button/Button"
import { theme } from "@/styles/theme"
const DMInput = () => {
  return (
    <S.DMInputLayout>
      <S.DMInputContainer>
        <DMListProfile />
        <S.DMInputItem placeholder="메시지를 입력해주세요" />
        <S.DMInputButtonContainer>
          <Button $fontColor={`${theme.colors.sub_alt}`}>전송</Button>
        </S.DMInputButtonContainer>
      </S.DMInputContainer>
    </S.DMInputLayout>
  )
}

export default DMInput
