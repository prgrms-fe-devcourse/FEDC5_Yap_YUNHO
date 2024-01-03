import * as S from "./ServiceInfoComponent.Styles"

const ServiceInfoComponent = () => {
  return (
    <S.ServiceInfoLayout>
      <S.ServiceInfoContainer>
        <S.ServiceTitle>
          <S.Strong>Yap!</S.Strong> 에 오신 여러분 환영합니다!{" "}
        </S.ServiceTitle>
        <S.ServiceInfoText>
          얍! (Yap!)은 누구에게나 열려있는 가벼운 분위기의 음악 공유
          플랫폼입니다.🙌 <br></br>
          여기에서는 좋아하는 음악을 가볍게 추천하고, 다양한 음악을 손쉽게 알 수
          있습니다. <br></br>
          누구나 자신의 음악 취향을 자유롭게 나누고, <br></br>
          음악의 새로운세계를 함께 탐험할 수 있는 공간을 제공합니다.
        </S.ServiceInfoText>
      </S.ServiceInfoContainer>
    </S.ServiceInfoLayout>
  )
}

export default ServiceInfoComponent
