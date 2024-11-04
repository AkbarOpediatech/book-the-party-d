import LoginForm from '@/app/(auth)/components/LoginForm'
import RegisterForm from '@/app/(auth)/components/RegisterForm'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

type IProps = {
  setShowAuthModal: (show: boolean) => void
}

const AuthModal: React.FC<IProps> = ({ setShowAuthModal }) => {
  const [showRegister, setShowRegister] = useState<boolean>(false)
  return (
    <div className="fixed left-0 top-0 z-50 flex size-full items-center justify-center backdrop-blur-md">
      <div className="relative max-h-[90vh] w-full max-w-[428px] rounded-lg bg-white p-6">
        <button
          onClick={() => setShowAuthModal(false)}
          className="absolute -top-10 right-0 flex size-8 items-center justify-center rounded bg-white"
        >
          <XMarkIcon className="size-[18px]" />
        </button>

        {showRegister ? (
          <>
            <RegisterForm />
            <div className="flex items-center gap-1 text-sm font-medium">
              <p className="text-gray-900"> Already have an account?</p>
              <button onClick={() => setShowRegister(false)} className="text-clr-fb">
                Login here
              </button>
            </div>
          </>
        ) : (
          <>
            <LoginForm />
            <div className="flex items-center gap-1 text-sm font-medium">
              <p className="text-gray-900"> Don’t have an account yet?</p>
              <button onClick={() => setShowRegister(true)} className="text-clr-fb">
                Sign up
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default AuthModal
