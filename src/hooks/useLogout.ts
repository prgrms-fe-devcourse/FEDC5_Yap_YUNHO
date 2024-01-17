import { API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

const QUERY_KEY_LOGOUT =
  "HANDLE_LOGOUT_1238213124124124932092038590284091840918"

const useLogout = () => {
  const queryClient = useQueryClient()
  const { setLogout } = useAuthUserStore()
  const navigate = useNavigate()
  const logoutMutate = useMutation({
    mutationKey: [QUERY_KEY_LOGOUT],
    mutationFn: fetchLogout,
    onMutate: () => {
      setLogout()
      queryClient.clear()
      navigate("/")
    },
  })

  return { logoutMutate }
}

export default useLogout

const fetchLogout = async () => {
  await API.post("/logout")
}
