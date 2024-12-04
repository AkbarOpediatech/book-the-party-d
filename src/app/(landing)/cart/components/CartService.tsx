import { useFetchCartQuery } from '@/redux/features/cart/apiSlice'

export const useFetchServiceService = () => {
  const { data, isLoading, isError } = useFetchCartQuery()
  const response = data

  if (isLoading) return { data: null, loading: true, error: false }
  if (isError) return { data: null, loading: false, error: true }

  return { response, loading: false, error: false }
}
