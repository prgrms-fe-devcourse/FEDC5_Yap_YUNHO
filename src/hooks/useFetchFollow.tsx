import { AUTH_API } from "@/apis/Api"
import { useMutation } from "@tanstack/react-query"

const FETCH_MUTATION_FOLLOW_KEY = "IT_IS_FETCH_MUTATION_KEY_781521784628175281"
const useFetchFollow = () => {
  const fetchFollowMutate = useMutation({
    mutationKey: [FETCH_MUTATION_FOLLOW_KEY],
    mutationFn: fetchFollow,
  })

  return fetchFollowMutate
}

export default useFetchFollow

const fetchFollow = async (targetUserId: string) => {
  return await AUTH_API.post("/follow/create", {
    userId: targetUserId,
  })
    .then((res) => res.data)
    .catch((e) => {
      throw Error(e)
    })
}
