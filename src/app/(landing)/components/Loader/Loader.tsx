'use client'

import { Player } from '@lottiefiles/react-lottie-player'
import loadingAnimation from '../../../../../public/assets/loading.json'
import errorAnimation from '../../../../../public/assets/lottie-error.json'

interface LoaderProps {
  type?: 'loading' | 'error'
  message?: string
}

const Loader: React.FC<LoaderProps> = ({ type, message }) => {
  const animationSrc = type === 'loading' ? loadingAnimation : errorAnimation

  return (
    <div className="flex flex-col items-center justify-center">
      <Player
        autoplay
        loop={type === 'loading'}
        src={animationSrc}
        style={{ height: '200px', width: '200px' }}
      />
      {message && <p className="mt-4 text-center text-lg font-medium text-gray-700">{message}</p>}
    </div>
  )
}

export default Loader
