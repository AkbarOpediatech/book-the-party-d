const Pagination = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button className="px-4 py-2 text-sm md:text-base">Prev</button>

      <div className="flex flex-wrap justify-center gap-3">
        <button className="h-10 w-10 rounded-md border border-clr-fb bg-clr-fb font-sora text-lg text-white md:h-16 md:w-16">
          1
        </button>
        <button className="h-10 w-10 rounded-md border font-sora text-lg text-clr-bc hover:border-clr-fb hover:bg-clr-fb hover:text-white md:h-16 md:w-16">
          2
        </button>
        <button className="h-10 w-10 rounded-md border font-sora text-lg text-clr-bc hover:border-clr-fb hover:bg-clr-fb hover:text-white md:h-16 md:w-16">
          ...
        </button>
        <button className="h-10 w-10 rounded-md border font-sora text-lg text-clr-bc hover:border-clr-fb hover:bg-clr-fb hover:text-white md:h-16 md:w-16">
          100
        </button>
      </div>

      <button className="px-4 py-2 text-sm md:text-base">Next</button>
    </div>
  )
}

export default Pagination
