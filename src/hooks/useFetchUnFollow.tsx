import { AUTH_API } from "@/apis/Api"
import { useMutation } from "@tanstack/react-query"

const FETCH_MUTATION_UN_FOLLOW_KEY =
  "IT_IS_FETCH_MUTATION_KEY_781521784628175281"

const useFetchUnFollow = () => {
  const fetchFollowMutate = useMutation({
    mutationKey: [FETCH_MUTATION_UN_FOLLOW_KEY],
    mutationFn: fetchUnFollow,
  })

  return fetchFollowMutate
}

export default useFetchUnFollow

const fetchUnFollow = async (followId: string) => {
  return await AUTH_API.delete("/follow/delete", {
    data: { id: followId },
  })
    .then((res) => res.data)
    .catch((e) => {
      throw Error(e)
    })
}
