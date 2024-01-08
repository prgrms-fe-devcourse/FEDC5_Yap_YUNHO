import { useParams } from "react-router-dom"
import * as S from "./DMChattingList.Styles"
import { AUTH_API } from "@/apis/Api"
import { useCallback, useEffect, useState } from "react"
import DMMessageItem from "./DMMessageItem"
import { Message } from "@/types"

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
        <S.DMMessageList>
          {selectedMessageList.map((list: Message) => (
            <DMMessageItem key={list.createdAt}>{list}</DMMessageItem>
          ))}
        </S.DMMessageList>
      )}
    </S.DMChattingListLayout>
  )
}
export default DMChattingList
