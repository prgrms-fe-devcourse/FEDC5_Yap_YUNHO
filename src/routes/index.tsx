import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { DirectMessage, Home, Login, Profile, Signup, UserEdit } from "@/pages"
import Navbar from "@/components/Navbar/Navbar"

const YAPRoute = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
          children={
            <Route
              path="/postedit/:id?"
              element={<></>}
            />
          }
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/useredit/:id?"
          element={<UserEdit />}
        />
        <Route
          path="/profile/:id?"
          element={<Profile />}
        />
        {/* query string Category 구별 */}
        <Route
          path="/directmessage/:id?"
          element={<DirectMessage />}
        />
        {/* // Path URL을 통한 Modal 컨트롤이 가능할 때 사용 - 추가 구현 사항  */}
        <Route
          path="/search"
          element={<></>}
        />
        <Route
          path="/postdetail/:id?"
          element={<></>}
        />

        <Route
          path="*"
          element={<div></div>}
        />
      </Routes>
    </Router>
  )
}

export default YAPRoute
