const Reading = () => {
  return (
    <div className="m-1 mb-[25px] h-auto w-auto rounded-2xl bg-[#0f0f0f] px-6 py-4 text-center font-semibold sm:mx-3 sm:mb-0">
      📝 Top Content
      <div className="my-4 h-auto w-full rounded-xl border border-[#242424] bg-zinc-800 py-5 px-1 opacity-80">
        <div className="h-full w-full transition hover:scale-110 active:scale-95">
          <div className="m-auto flex h-[130px] w-full justify-center">
            <p className="m-auto">Performant articles!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reading
