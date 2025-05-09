import Loader from './Loader'

interface LoaderProps {
  type?: 'loading' | 'error'
  message?: string
}

const FullPageLoader: React.FC<LoaderProps> = ({ type, message }) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-gray-900/30">
      <Loader type={type} message={message} />
    </div>
  )
}

export default FullPageLoader
