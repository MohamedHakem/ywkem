import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import TrackBubbleFull from './TrackBubbleFull'
// change the bubble opening/closing whole animation based on hovering state
const Tracks = ({ shrinkL, shrinkR, setShrinkL, setShrinkR }) => {
  const [changeBg, setChangeBg] = useState(false)
  const [StatusColor, setStatusColor] = useState('green-400')

  console.log('StatusColor: ', `bg-[${StatusColor}]`)

  return (
    <div
      className={`relative min-h-screen w-auto ${
        changeBg ? 'bg-[#0f0f0f] font-semibold' : 'bg-white'
      } text-center font-semibold text-white sm:mx-0 sm:mr-0`}
    >
      <div
        className={`container1 !min-h-screen rounded-3xl transition-all duration-500
      ${changeBg ? 'bg-[#0f0f0f] delay-300' : 'bg-transparent'}`}
        id="container"
      >
        <p
          className={`${
            changeBg && 'border-[#45483c] text-xs text-white'
          } blur-1xl absolute z-10 m-auto flex w-full items-center justify-center border-[#ccc] 
          bg-transparent px-4 py-3 backdrop-blur-2xl transition-all duration-700 ease-in-out`}
        >
          {/* {changeBg && '🎧 and chill'} */}
          <span>🎧 I'm Listening to</span>
          <span
            className={`status online ml-2 flex h-3 w-3 rounded-full bg-green-500 ring-1`}
          >
            <span className="status online flex h-3 w-3 animate-ping rounded-full bg-green-300 ring-1 transition ease-in"></span>
          </span>
        </p>
        <TrackBubbleFull
          changeBg={changeBg}
          setChangeBg={setChangeBg}
          profileImg={'/ghostly-kisses-profile-2.jpg'}
          coverImg={'/ghostlykisses-cover.png'}
          floorColor={'#d2f03c'}
          setStatusColor={setStatusColor}
          shrinkL={shrinkL}
          setShrinkL={setShrinkL}
          shrinkR={shrinkR}
          setShrinkR={setShrinkR}
        />
        {/* <div
          className={`${
            changeBg && 'hidden'
          } ml-12 flex h-full flex-col items-start justify-end pb-4 text-lg underline underline-offset-2`}
        >
          <Link href={'/music'}>
            <a>
              <p>See All</p>
            </a>
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default Tracks
