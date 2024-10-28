import React, { Dispatch, SetStateAction } from 'react'

type SingleInputChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  setState: Dispatch<SetStateAction<string>>
) => void

export const handleInputChange: SingleInputChangeHandler = (e, setState) => {
  setState(e.target.value)
}
