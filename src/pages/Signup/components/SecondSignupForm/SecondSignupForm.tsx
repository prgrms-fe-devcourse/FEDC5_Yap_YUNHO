import { ChangeEvent, useState, useRef } from "react"
import * as S from "./SecondSignupForm.Styles"
import { theme } from "@/styles/theme"
import Input from "../SignupInput/Input"
import emptyImg from "@/assets/emptyimg.png"

const SecondSignupForm = () => {
  const [previewUserProfile, setPreviewUserProfile] = useState<string>("")
  const imgRef = useRef<HTMLInputElement>(null)

  const openFileSelector = () => {
    if (imgRef.current === null) {
      return
    }
    imgRef.current.click()
  }

  const handleImageFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return
    }

    const fileList: FileList = event.target.files
    const file = Array.from(fileList)[0] || null

    if (file === null) {
      return
    }

    const userImg = URL.createObjectURL(file)

    setPreviewUserProfile(userImg)
  }

  return (
    <S.SignupFormLayout>
      <S.SignupFormTitle> 필수 회원정보를 입력해주세요 </S.SignupFormTitle>
      <S.SignupFormContainer>
        <S.ImgContainer>
          <S.ImgItem onClick={openFileSelector}>
            <S.Img
              src={previewUserProfile === "" ? emptyImg : previewUserProfile}
              draggable="false"
            />
          </S.ImgItem>
          <Input
            type="file"
            ref={imgRef}
            onChange={handleImageFile}
          />
        </S.ImgContainer>
        <S.ButtonContainer>
          <S.Button
            $width={53}
            $color={theme.colors.point}
            type="submit"
          >
            완료
          </S.Button>
        </S.ButtonContainer>
      </S.SignupFormContainer>
    </S.SignupFormLayout>
  )
}

export default SecondSignupForm
