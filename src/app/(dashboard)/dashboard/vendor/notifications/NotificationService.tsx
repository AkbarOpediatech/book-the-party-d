import { useFetchNotificationQuery } from '@/redux/features/notification/apiSlice'

export const useFetchServiceService = () => {
  const { data, isLoading, isError } = useFetchNotificationQuery()
  const response = data

  if (isLoading) return { data: null, loading: true, error: false }
  if (isError) return { data: null, loading: false, error: true }

  return { response, loading: false, error: false }
}
