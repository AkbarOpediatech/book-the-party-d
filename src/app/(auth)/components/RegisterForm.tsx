import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import FormPage from './FormPage'

export default async function RegisterFormWrapper() {
  const session = await getServerSession()

  if (session) {
    redirect('/')
    return null
  }

  return (
    <>
      <FormPage />
    </>
  )
}
