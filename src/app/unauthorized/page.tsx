import Link from 'next/link'

const UnauthorizedPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="flex w-full max-w-4xl flex-col items-center rounded-xl bg-white p-12 shadow-lg">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mb-4 h-20 w-20 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="mb-4 text-5xl font-extrabold text-red-500">Unauthorized Access</h1>
          <p className="mb-6 text-center text-lg text-gray-600">
            Unfortunately, you don’t have the necessary permissions to access this page. Please check with
            your administrator if you believe this is a mistake.
          </p>
        </div>
        <div className="flex w-full justify-center space-x-4">
          <Link href="/login">
            <button className="rounded-full bg-purple-500 px-8 py-3 text-lg text-white shadow-md transition duration-300 hover:bg-purple-600">
              Go Back to Login
            </button>
          </Link>
          <Link href="/contact">
            <button className="rounded-full bg-purple-100 px-8 py-3 text-lg text-purple-500 shadow-md transition duration-300 hover:bg-purple-200">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UnauthorizedPage
