import { useParams } from "react-router-dom"
import * as S from "./DMChattingList.Styles"
import { AUTH_API } from "@/apis/Api"
import { ReactNode, useCallback, useEffect, useState } from "react"
import { Conversation } from "@/types"
const DMChattingList = () => {
  const { id } = useParams()
  const [selectedMessageList, setSelectedMessgaeList] = useState([])

  const fetchMessageList = useCallback(async () => {
    return await AUTH_API.get(`/messages?userId=${id}`)
      .then((res) => setSelectedMessgaeList(res.data))
      .catch((error) => {
        console.log(error, "메시지 검색 오류")
      })
  }, [id])

  useEffect(() => {
    // 기본 페이지에서는 메시지 받아오지 않기
    if (!id) {
      return
    }
    fetchMessageList()
  }, [id, fetchMessageList])

  return (
    <S.DMChattingListLayout>
      {id && (
        <S.DMChattingListMessageItem>
          {selectedMessageList.map(
            (list: Conversation): ReactNode => (
              <p key={list.createdAt}>
                {list.message}
                <br />
                <br />
              </p>
            ),
          )}
        </S.DMChattingListMessageItem>
      )}
    </S.DMChattingListLayout>
  )
}
export default DMChattingList
