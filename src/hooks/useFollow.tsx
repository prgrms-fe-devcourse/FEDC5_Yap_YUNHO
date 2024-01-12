import { AUTH_API } from "@/apis/Api"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const FOLLOW_MUTATION_KEY = "IS_IS_FOLLOW_MUTATION_KEY_5364127461273"

export const useFollow = () => {
  const queryClient = useQueryClient()
  const followMutate = useMutation({
    mutationKey: [FOLLOW_MUTATION_KEY],
    mutationFn: fetchFollow,
    onSuccess: (data) => {
      queryClient.refetchQueries()

      console.log(data)
    },
    onError: (e) => {
      console.log(e)
    },
  })

  return {
    followMutate,
  }
}

export default useFollow

const fetchFollow = async (targetUserId: string) => {
  return await AUTH_API.post("/follow/create", {
    userId: targetUserId,
  })
    .then((res) => res.data)
    .catch((e) => {
      throw Error(e)
    })
}
