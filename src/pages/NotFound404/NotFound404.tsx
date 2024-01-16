import { useNavigate } from "react-router-dom"
import * as S from "./NotFound404.Styles"

const NOT_FOUND_IMAGE_URL =
  "https://res.cloudinary.com/dalxgxu2o/image/upload/v1699980818/IMG_0508_mke9kp.gif"
const NotFound404 = () => {
  const navigate = useNavigate()
  return (
    <S.NotFound404Layout>
      <S.NoFound404ContainerBackground>
        <S.NoFound404Container>
          <S.NotFound404Title>{"404 Not Found!!"}</S.NotFound404Title>
          <S.NotFound404Text>
            {
              "이런, 페이지가 길을 잃었어요! 아마도 GPS가 제대로 작동하지 않는 걸까요? 🧭"
            }
          </S.NotFound404Text>
          <S.NotFound404Image $src={NOT_FOUND_IMAGE_URL} />
          <S.NotFound404ButtonContainer>
            <S.NotFound404Button
              onClick={() => navigate("/", { replace: true })}
            >
              Home
            </S.NotFound404Button>
          </S.NotFound404ButtonContainer>
        </S.NoFound404Container>
      </S.NoFound404ContainerBackground>
    </S.NotFound404Layout>
  )
}

export default NotFound404
