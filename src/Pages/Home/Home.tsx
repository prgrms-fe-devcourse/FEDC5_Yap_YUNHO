import { useState } from "react"
import * as S from "./Home.Styles"

const Home = () => {
  const [category, setCategory] = useState("ALL")

  return <S.HomeLayout></S.HomeLayout>
}

export default Home
