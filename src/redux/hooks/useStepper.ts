import { useDispatch, useSelector } from 'react-redux'

const useStepper = () => {
  const currentStep = useSelector((state: any) => state.stepper.currentStep)
  const dispatch = useDispatch()

  return { currentStep, dispatch }
}

export default useStepper
