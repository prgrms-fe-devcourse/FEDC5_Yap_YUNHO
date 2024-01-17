import { useMutation } from "@tanstack/react-query"
import editNickname from "../apis/editNickname"
import useAuthUserStore from "@/stores/useAuthUserStore"

const EDIT_NICKNAME_MUTATION_QUERY_KEY = "EDIT_NICKNAME_MUTATION_QUERY_KEY"

const useEditNickname = () => {
  const { updateUser } = useAuthUserStore()

  const EditUserNickname = useMutation({
    mutationKey: [EDIT_NICKNAME_MUTATION_QUERY_KEY],
    mutationFn: editNickname,
    onSuccess: (user) => {
      updateUser(user)
    },
    onError: () => {},
  })

  return {
    EditUserNickname,
  }
}

export default useEditNickname
