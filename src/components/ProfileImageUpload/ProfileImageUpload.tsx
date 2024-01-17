import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import * as S from "./ProfileImageUpload.Styles"
import standard from "@/assets/standard.jpeg"
import Input from "@/components/Input/Input"
import { theme } from "@/styles/theme"

interface FormDataType {
  binary: FormData
  url: string
}

interface ProfileImageUploadProp {
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>
  initialImage?: string
}
/**
 *
 * @param prop setFormData : React.Dispatch<React.SetStateAction<FormData>>
 *
 * @returns void
 *
 * @usage 사용하고자 하는 컴포넌트에서 UserProfileImageUpload 컴포넌트를 import한 후
 *
 * 다음과 같은 useState를 선언하고 UserProfileImageUpload 컴포넌트에 전달하면 프로필 이미지를 세팅할 수 있습니다.
 *
 * const [formData, setFormData] = useState<FormData>(new FormData())
 */
const ProfileImageUpload = ({
  setFormData,
  initialImage,
}: ProfileImageUploadProp) => {
  const [previewUserProfile, setPreviewUserProfile] = useState(initialImage)
  const imageRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setPreviewUserProfile(initialImage)
  }, [initialImage])

  const openFileSelector = () => {
    if (!imageRef.current) {
      return
    }
    imageRef.current.click()
  }

  const addImageFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return
    }

    const fileList: FileList = event.target.files
    const imageFile = Array.from(fileList)[0]
    if (!imageFile) {
      return
    }

    const previewImage = URL.createObjectURL(imageFile)
    setPreviewUserProfile(previewImage)

    const formData = new FormData()
    formData.append("isCover", "false")
    formData.append("image", imageFile)

    setFormData({ binary: formData, url: previewImage })
  }

  const removeImageFile = async () => {
    setPreviewUserProfile("")
    const response = await fetch(standard)
    const defaultImageFile = await response.blob()

    const formData = new FormData()
    formData.append("isCover", "false")
    formData.append("image", defaultImageFile, "defaultImage")

    setFormData({ binary: formData, url: "" })
  }

  return (
    <S.ProfileImageUploadLayout>
      <S.ProfileImageUploadContainer onClick={openFileSelector}>
        <S.ProfileImage
          src={previewUserProfile ? previewUserProfile : standard}
          draggable="false"
        />
      </S.ProfileImageUploadContainer>
      <Input
        key={Date.now()}
        type="file"
        ref={imageRef}
        onChange={addImageFile}
      />
      <S.Button
        $width={53}
        $color={theme.colors.sub_alt}
        type="button"
        onClick={removeImageFile}
      >
        {"프로필 이미지 제거"}
      </S.Button>
    </S.ProfileImageUploadLayout>
  )
}

export default ProfileImageUpload
