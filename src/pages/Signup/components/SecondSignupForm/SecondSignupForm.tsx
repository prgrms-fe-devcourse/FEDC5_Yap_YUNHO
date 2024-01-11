import { ChangeEvent, useState, useRef, FormEvent } from "react"
import * as S from "./SecondSignupForm.Styles"
import { theme } from "@/styles/theme"
import Input from "../SignupInput/Input"
import emptyImg from "@/assets/emptyimg.png"

const SecondSignupForm = () => {
  const [previewUserProfile, setPreviewUserProfile] = useState<string>("")
  const [userProfileImgFile, setUserProfileImgFile] = useState<File>()
  const imgRef = useRef<HTMLInputElement>(null)

  const openFileSelector = () => {
    if (imgRef.current === null) {
      return
    }

    imgRef.current.click()
  }

  const addImgFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return
    }

    const fileList: FileList = event.target.files
    const file = Array.from(fileList)[0] || null

    if (file === null) {
      return
    }

    setUserProfileImgFile(file)

    const userImg = URL.createObjectURL(file)
    setPreviewUserProfile(userImg)
  }

  const removeImgFile = () => {
    setPreviewUserProfile("")
    setUserProfileImgFile(undefined)
  }

  const handleUpdateUserProfile = async (event: FormEvent) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append("isCover", "false")

    const isDefaultImg = previewUserProfile === ""
    if (isDefaultImg) {
      const defaultImgFile = await getDefaultImgFile()
      formData.append("image", defaultImgFile, "defaultImg")
    }

    if (userProfileImgFile instanceof File) {
      formData.append("image", userProfileImgFile)
    }
  }

  const getDefaultImgFile = async () => {
    const response = await fetch(emptyImg)
    const defaultImg = await response.blob()

    return defaultImg
  }

  return (
    <S.SignupFormLayout>
      <S.SignupFormTitle> 추가 회원정보를 입력해주세요 </S.SignupFormTitle>
      <S.SignupFormContainer onSubmit={handleUpdateUserProfile}>
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
            onChange={addImgFile}
          />
        </S.ImgContainer>
        <S.ButtonContainer>
          <S.Button
            $width={53}
            $color={theme.colors.sub_alt}
            type="button"
            onClick={removeImgFile}
          >
            프로필 이미지 제거
          </S.Button>
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
