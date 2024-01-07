import * as S from "./DMList.Styles"
import DMListItem from "./DMListItem"
const DMList = () => {
  return (
    <S.DMListLayout>
      <S.DMListNotice>
        <S.DMListNoticeTitle>DM 목록</S.DMListNoticeTitle>
        <S.DMListNoticeContent>8</S.DMListNoticeContent>
      </S.DMListNotice>
      <S.DMListContainer>
        <DMListItem />
        <DMListItem />
        <DMListItem />
        <DMListItem />
        <DMListItem />
        <DMListItem />
        <DMListItem />
        <DMListItem />
      </S.DMListContainer>
    </S.DMListLayout>
  )
}
export default DMList
