import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'

const useStepper = () => {
  const currentStep = useSelector((state: RootState) => state.stepper.currentStep)
  const dispatch = useDispatch()

  return { currentStep, dispatch }
}

export default useStepper
