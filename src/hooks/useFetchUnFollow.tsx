import { AUTH_API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const FETCH_MUTATION_UN_FOLLOW_KEY =
  "IT_IS_FETCH_MUTATION_KEY_781521784628175281"

const useFetchUnFollow = () => {
  const { updateUser } = useAuthUserStore()
  const queryClient = useQueryClient()
  const fetchFollowMutate = useMutation({
    mutationKey: [FETCH_MUTATION_UN_FOLLOW_KEY],
    mutationFn: fetchUnFollow,
    onSuccess: () => {
      queryClient.refetchQueries()

      AUTH_API.get("/auth-user")
        .then((res) => res.data)
        .then((data) => updateUser(data))
    },
  })

  return fetchFollowMutate
}

export default useFetchUnFollow

const fetchUnFollow = (id: string) => {
  const response = AUTH_API.delete("/follow/delete", {
    data: { id },
  })
    .then((res) => res)
    .catch((e) => {
      throw Error(e)
    })
  return response
}
