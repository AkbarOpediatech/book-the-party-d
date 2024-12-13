import { useFetchCartQuery } from '@/redux/features/cart/apiSlice'

interface IProps {
  limit?: number
  page?: number
}

export const useFetchCartService = ({ limit = 0, page = 0 }: IProps = {}) => {
  const { data, isLoading, isError } = useFetchCartQuery({ limit, page })
  const response = data

  if (isLoading) return { data: null, loading: true, error: false }
  if (isError) return { data: null, loading: false, error: true }

  return { response, loading: false, error: false }
}
