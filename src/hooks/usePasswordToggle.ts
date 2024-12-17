import { useState } from 'react'

const usePasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  const inputType = showPassword ? 'text' : 'password'

  return { inputType, showPassword, togglePasswordVisibility }
}

export default usePasswordToggle
