import { useState } from 'react'
import { useDispatch } from 'react-redux'

type InputHandlerParams = {
  useRedux: boolean
  reduxDispatch: any
  localEvent?: any
  setState?: (state: any) => void | null
}

// const handleInputChange = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
// ) => {
//   const { name, value } = e.target
//   dispatch(setNewServiceDraft({ field: 'price_type', value }))
//   console.log('New Service Draft:', newServiceDraft.price_type)
// }

const useInputHandler = ({
  useRedux,
  reduxDispatch,
  localEvent, // for manageing event
  setState
}: InputHandlerParams) => {
  const [inputState, setInputState] = useState<any>(localEvent || {})
  const dispatch = useDispatch()

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (useRedux) {
      const { name, value } = e.target
      dispatch(reduxDispatch)
    } else if (setState) {
      setState(e.target.value)
    } else {
    }
  }

  return {
    handleInputChange
  }
}

export default useInputHandler
