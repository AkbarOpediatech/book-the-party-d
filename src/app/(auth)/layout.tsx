const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="w-full max-w-[720px] rounded-lg bg-clr-f8 p-5 lg:px-[104px] lg:py-[127px]">
        {children}
      </div>
    </div>
  )
}

export default AuthLayout
