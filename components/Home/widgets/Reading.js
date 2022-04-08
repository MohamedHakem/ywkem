import { motion } from 'framer-motion'
import Image from 'next/image'
const Reading = () => {
  const dragConstraints = { top: 0, left: 0, right: 0, bottom: 0 }

  return (
    <div className="m-1 mb-[25px] h-auto w-auto rounded-2xl bg-[#0f0f0f] px-8 py-4 text-center font-semibold sm:mx-3 sm:mb-0">
      📚 I'm reading
      <div className="my-4 h-auto w-full rounded-xl border border-[#242424] py-5 px-1">
        <div className="h-full w-full transition hover:scale-110 active:scale-95">
          {/* <motion.div drag dragConstraints={dragConstraints}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            > */}
          <motion.div
            // initial={{opacity: 0}}
            //  x: [100, 50]
            // initial={{ opacity: 0, scale: 0.2 }}
            // animate={{
            //   x: [-160, 140, -120, 100, 0],
            //   y: [-50, -50, 30, 10, 0],
            //   opacity: 1,
            //   // scale: [0.8, 1.01, 1.02, 1.4, 1],
            //   scale: 1,
            // }}
            // transition={{ duration: 0.4 }}
            // initial={{ opacity: 0.2 }}
            // animate={{ opacity: 1 }}
            className="relative m-auto h-[195px] w-[131px]"
          >
            <Image
              className="cursor-none"
              src="/ydkjs-getstarted.png"
              // src="/android-icon-1077x1077.png"
              alt="you-don't-know-javascript-yet-a-book-by-kyle-simpson"
              sizes="136px"
              // sizes="470px"
              layout="fill"
            />
          </motion.div>
          {/* </motion.button>
          </motion.div> */}
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/getify/You-Dont-Know-JS"
        >
          <p className="mt-3 text-sm">
            <span className="mr-2 rounded-md bg-yellow-300 p-1 font-bold text-black">
              YDKJS
            </span>
            <span className="mr-2 text-yellow-300">You Don't Know JS</span>
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
