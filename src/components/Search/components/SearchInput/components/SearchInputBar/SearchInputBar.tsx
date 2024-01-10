import { API } from "@/apis/Api"
import * as S from "./SearchInputBar.Styles"
import { useState } from "react"
import { Search } from "@mui/icons-material"

const SearchInputBar = () => {
  const [input, setInput] = useState("")
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // filter 컴포넌트, result 컴포넌트 작업 후 수정 예정
    const { data } = await API.get(`/search/all/${input}`)
    console.log(data)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <S.SearchBarForm onSubmit={handleSubmit}>
      <S.SearchBarInput
        type="search"
        placeholder="사용자나 게시물을 검색해보세요"
        name="searchbar"
        onChange={handleInputChange}
      />
      {!input && (
        <S.SearchIconLayout>
          <Search />
        </S.SearchIconLayout>
      )}
    </S.SearchBarForm>
  )
}

export default SearchInputBar
