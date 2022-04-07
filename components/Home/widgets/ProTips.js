import { motion } from 'framer-motion'
import Image from 'next/image'
const ProTips = () => {
  const dragConstraints = { top: 0, left: 0, right: 0, bottom: 0 }

  return (
    <div className="m-1 mb-[25px] h-auto w-auto rounded-2xl bg-[#0f0f0f] px-8 py-4 text-center font-semibold sm:mx-3 sm:mb-0">
      💡 Pro Tips
      <div className="my-4 h-auto w-full rounded-xl border border-[#242424] py-5 px-1">
        <div className="h-full w-full transition hover:scale-110 active:scale-95">
          <div className="m-auto flex h-[130px] w-full justify-center">
            <p className="m-auto">JS and React Tips!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProTips
