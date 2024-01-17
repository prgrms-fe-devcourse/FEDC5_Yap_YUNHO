import { useMutation } from "@tanstack/react-query"
import editPassword from "../apis/editPassword"
import { USER_EDIT_ERROR_MESSAGE } from "@/constants/errorMessage"

const EDIT_PASSWORD_MUTATION_QUERY_KEY = "EDIT_PASSWORD_MUTATION_QUERY_KEY"

const useEditPassword = () => {
  const EditUserPassword = useMutation({
    mutationKey: [EDIT_PASSWORD_MUTATION_QUERY_KEY],
    mutationFn: editPassword,
    onSuccess: () => {
      return true
    },
    onError: () => {},
  })

  return {
    EditUserPassword,
  }
}

export default useEditPassword
