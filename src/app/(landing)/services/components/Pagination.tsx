const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <button>Prev</button>
      <div className="flex gap-3">
        <button className="h-16 w-16 rounded-md border border-clr-fb bg-clr-fb font-sora text-lg text-white">
          1
        </button>
        <button className="h-16 w-16 rounded-md border font-sora text-lg text-clr-bc hover:border-clr-fb hover:bg-clr-fb hover:text-white">
          2
        </button>
        <button className="h-16 w-16 rounded-md border font-sora text-lg text-clr-bc hover:border-clr-fb hover:bg-clr-fb hover:text-white">
          ...
        </button>
        <button className="h-16 w-16 rounded-md border font-sora text-lg text-clr-bc hover:border-clr-fb hover:bg-clr-fb hover:text-white">
          100
        </button>
      </div>
      <button>Next</button>
    </div>
  )
}

export default Pagination
