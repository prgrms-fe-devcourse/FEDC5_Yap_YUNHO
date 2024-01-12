import { AUTH_API } from "@/apis/Api"
import useAuthUserStore from "@/stores/useAuthUserStore"
import { User } from "@/types"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

const FOLLOW_MUTATION_KEY = "IS_IS_FOLLOW_MUTATION_KEY_5364127461273"

export const useFollow = () => {
  const { updateUser } = useAuthUserStore()
  const newAuthUserData = useFetchUserData()
  const queryClient = useQueryClient()
  const followMutate = useMutation({
    mutationKey: [FOLLOW_MUTATION_KEY],
    mutationFn: fetchFollow,
    onSuccess: async () => {
      await queryClient.refetchQueries()

      newAuthUserData.then((data) => {
        if (!data) {
          return
        }
        updateUser(data)
        return data
      })
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

interface FetchFollow {
  targetId: string
  isUnFollow: boolean
}
const fetchFollow = async ({ targetId, isUnFollow }: FetchFollow) => {
  return await AUTH_API.post("/follow/create", {
    userId: targetId,
  })
    .then((res) => res.data)
    .catch((e) => {
      throw Error(e)
    })
}

const REFETCH_USER_QUERY_KEY = "FETCH_UPDATE_AUTH_USER_712918964821"
type QueryKey = ["FETCH_UPDATE_AUTH_USER_712918964821"]
const useFetchUserData = async () => {
  const { data } = useQuery<QueryKey, Error, User>({
    queryKey: [REFETCH_USER_QUERY_KEY],
    queryFn: async () => {
      return await AUTH_API.get("/auth-user")
        .then((res) => res.data)
        .catch((error) => {
          console.error(error)
          return false
        })
    },
  })

  if (!data) {
    return false
  }

  return data
}
