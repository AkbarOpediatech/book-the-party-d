import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import React, { useState } from 'react'

type PopupProps = {
  isVisible: boolean
  title: string
  message: string
  onConfirm: (reason?: string, penalty?: number) => void
  onCancel: () => void
  showReasonInput?: boolean
  penaltyNotice?: boolean
}
const CancelPopup: React.FC<PopupProps> = ({
  isVisible,
  title,
  message,
  onConfirm,
  onCancel,
  showReasonInput,
  penaltyNotice
}) => {
  const [reason, setReason] = useState('')
  const [penalty, setPenalty] = useState<number | string>('')
  const handlePenaltyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (Number(value) <= 100) {
      setPenalty(value)
    } else {
      setPenalty(100)
    }
  }
  const isPenaltyValid = penalty && !isNaN(Number(penalty)) && Number(penalty) >= 0 && Number(penalty) <= 100

  if (!isVisible) return null
  return (
    <Dialog open={isVisible} onClose={onCancel} className="relative z-50 overflow-scroll">
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md">
        <DialogPanel className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
          <DialogTitle className="text-2xl font-semibold text-gray-900">{title}</DialogTitle>
          <Description className="mt-3 text-lg text-gray-600">{message}</Description>

          {penaltyNotice && (
            <div className="mt-5">
              <p className="mb-2 text-sm text-red-500">
                Penalty percentage will be applied based on your cancellation.
              </p>
              <input
                type="number"
                className="w-full rounded-xl border-2 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter penalty percentage (e.g., 10)"
                value={penalty}
                min={0}
                max={100}
                onChange={handlePenaltyChange}
              />
            </div>
          )}

          {showReasonInput && (
            <textarea
              className="mt-5 w-full rounded-xl border-2 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Please explain your reason for cancellation"
              value={reason}
              onChange={e => setReason(e.target.value)}
            />
          )}

          <div className="mt-6 flex justify-end gap-4">
            <button
              className="rounded-full bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition duration-200 hover:bg-gray-300"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button
              className="rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-red-600"
              onClick={() => onConfirm(reason, penalty ? Number(penalty) : undefined)}
              disabled={showReasonInput && !isPenaltyValid}
            >
              Confirm
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default CancelPopup
