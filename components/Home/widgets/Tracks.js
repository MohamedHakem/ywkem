import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import TrackBubble from './TrackBubble'
// change the bubble opening/closing whole animation based on hovering state
const Tracks = ({ shrinkL, shrinkR, setShrinkL, setShrinkR }) => {
  const [changeBg, setChangeBg] = useState(false)
  const [StatusColor, setStatusColor] = useState('green-400')

  // console.log('StatusColor: ', `bg-[${StatusColor}]`)

  return (
    <div
      className={`relative m-1 h-auto  w-auto rounded-3xl sm:mb-0 ${
        changeBg ? 'bg-[#0f0f0f] font-semibold text-white' : 'bg-[#0f0f0f]'
      } text-center font-semibold text-zinc-900 sm:mx-3`}
    >
      <div
        className={`container1 rounded-3xl transition-all duration-500
      ${changeBg ? 'bg-[#0f0f0f] delay-300' : 'bg-[#fff]'}`}
        id="container"
      >
        <div className="absolute flex h-full w-full flex-col items-center justify-center">
          <div className="tracks m-auto mb-10 h-[50%] w-[50%] opacity-[.35] blur-[90px] saturate-[5] filter"></div>
        </div>
        <div
          className={`${
            changeBg &&
            '!left-[10px] mt-6 w-auto border-[#45483c] text-xs text-white'
          } blur-1xl z-100 absolute left-[30px] z-10 m-auto mt-4 flex w-fit items-center rounded-full border-[#ccc] bg-transparent 
          px-4 py-3 backdrop-blur-2xl transition-all duration-1000 ease-in-out md:left-[90px]`}
        >
          <span>🎧 Im Listening to</span>
          <span
            className={`status online ml-2 flex h-3 w-3 rounded-full bg-green-500 ring-1`}
          >
            <span className="status online flex h-3 w-3 animate-ping rounded-full bg-green-300 ring-1 transition ease-in"></span>
          </span>
        </div>

        <TrackBubble
          changeBg={changeBg}
          setChangeBg={setChangeBg}
          profileImg={'/ghostly-kisses.jpg'}
          coverImg={'/ghostlykisses-cover.png'}
          floorColor={'#d2f03c'}
          setStatusColor={setStatusColor}
          shrinkL={shrinkL}
          setShrinkL={setShrinkL}
          shrinkR={shrinkR}
          setShrinkR={setShrinkR}
        />
      </div>
    </div>
  )
}

export default Tracks
