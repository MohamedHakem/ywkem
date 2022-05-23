import Image from 'next/image'
const Reading = () => {
  const dragConstraints = { top: 0, left: 0, right: 0, bottom: 0 }

  return (
    <div className="m-1 h-auto w-auto rounded-2xl bg-[#0f0f0f] px-8 py-3 text-center font-medium text-white sm:mx-3 sm:mb-0">
      📚 I&apos;m reading
      <div className="my-3 h-auto w-full rounded-xl border border-[#242424] py-5 px-1">
        <div className="h-full w-full transition hover:scale-110 active:scale-95">
          <div className="relative m-auto h-[195px] w-[131px]">
            <Image
              priority="true"
              className="cursor-none"
              src="/ydkjs-getstarted.png"
              alt="you-don't-know-javascript-yet-a-book-by-kyle-simpson"
              sizes="136px"
              layout="fill"
            />
          </div>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/getify/You-Dont-Know-JS"
        >
          <p className="mt-3 text-xs">
            <span className="mr-2 rounded-md bg-yellow-300 p-1 font-bold text-black">
              YDKJS
            </span>
            <span className="mr-2 text-yellow-300">You Don&apos;t Know JS</span>
            by Kyle Simpson.
          </p>
        </a>
      </div>
      <p className="flex-start flex justify-end text-[13px]">
        Follow me
        <a
          className="ml-1 underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com/mh_kem"
        >
          on Oku.
        </a>
      </p>
    </div>
  )
}

export default Reading
