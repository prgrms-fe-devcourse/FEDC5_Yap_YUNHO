import { useParams } from "react-router-dom"
import * as S from "./DMChattingList.Styles"
const DMChattingList = () => {
  const { id } = useParams()
  console.log(id)
  return <S.DMChattingListLayout></S.DMChattingListLayout>
}
export default DMChattingList
