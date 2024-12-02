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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-11/12 max-w-md rounded-lg bg-white p-5 shadow-lg">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-3 text-sm text-gray-600">{message}</p>
        {penaltyNotice && (
          <div className="mt-4">
            <p className="mt-2 text-sm text-red-500">
              {penalty}% penalty will be applied based on your cancellation.
            </p>
            <input
              type="number"
              className="mt-2 w-full rounded border p-2 text-sm"
              placeholder="Penalty percentage (e.g., 10)"
              value={penalty}
              min={0}
              max={100}
              onChange={handlePenaltyChange}
            />
          </div>
        )}
        {showReasonInput && (
          <textarea
            className="mt-4 w-full rounded border p-2 text-sm"
            placeholder="Please explain your reason for cancellation"
            value={reason}
            onChange={e => setReason(e.target.value)}
          />
        )}
        <div className="mt-5 flex justify-end gap-3">
          <button
            className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-bold text-gray-600 hover:bg-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="rounded-lg bg-red-500 px-4 py-2 text-sm font-bold text-white hover:bg-red-600"
            onClick={() => onConfirm(reason, penalty ? Number(penalty) : undefined)}
            disabled={showReasonInput && !isPenaltyValid}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

export default CancelPopup
