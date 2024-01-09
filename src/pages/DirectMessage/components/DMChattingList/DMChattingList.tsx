import { useParams } from "react-router-dom"
import * as S from "./DMChattingList.Styles"
import { AUTH_API } from "@/apis/Api"
import { useCallback, useEffect, useState } from "react"
import DMMessageItem from "./DMMessageItem"
import { Conversation, Message } from "@/types"
import DMInput from "./DMInput"
import useAuthUserStore from "@/stores/useAuthUserStore"

const DMChattingList = () => {
  const { id } = useParams()
  const { user } = useAuthUserStore()
  const [selectedMessageList, setSelectedMessageList] = useState([])

  const fetchMessageList = useCallback(async () => {
    await AUTH_API.get(`/messages?userId=${id}`)
      .then((res) => {
        // 나 와의 메시지일 경우 내가 보낸 것만 데이터 정제
        if (user._id === id) {
          setSelectedMessageList(
            res.data.filter((list: Conversation) => {
              return list.receiver?._id === list.sender?._id
            }),
          )
        } else {
          setSelectedMessageList(res.data)
        }
      })
      .catch((error) => {
        console.log(error, "채팅방을 받아오는데 실패했습니다.")
      })
  }, [id, user])

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
        <>
          <S.DMMessageList>
            {selectedMessageList.map((list: Message) => (
              <DMMessageItem
                key={list.createdAt}
                id={id}
              >
                {list}
              </DMMessageItem>
            ))}
          </S.DMMessageList>
          <DMInput id={id} />
        </>
      )}
    </S.DMChattingListLayout>
  )
}
export default DMChattingList
