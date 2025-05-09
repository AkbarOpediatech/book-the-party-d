const AddressField = ({ label, value }: { label: string; value?: string }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-full max-w-[830px] border-b pb-4">
        <p className="mb-2 text-sm font-bold text-clr-0f md:text-base">{label}</p>
        <p className="text-sm font-light text-clr-0f">{value || 'N/A'}</p>
      </div>
    </div>
  )
}

export default AddressField
