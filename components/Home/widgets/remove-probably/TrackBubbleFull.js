import Image from 'next/image'

const bubbleStyle1 = `button1 absolute z-0 h-full w-full animate-pulse shadow-3xl shadow-[#87b587] ring-2 ring-[#93b493] 
                      ring-offset-0 transition-all duration-300 hover:ring-[#0f0f0f]`
const bubbleStyle2 = `absolute h-full w-full bg-[#0f0f0f] bg-gradient-to-b to-[#0f0f0f] transition` // from-[#d2f03c]

const TrackBubble = ({
  changeBg,
  setChangeBg,
  profileImg,
  coverImg,
  floorColor,
  setStatusColor,
  shrinkL,
  shrinkR,
  setShrinkL,
  setShrinkR,
}) => {
  const changeBgHandler = (isOpen, color, shrink) => {
    // e.preventDefault()

    setChangeBg(isOpen)

    setStatusColor(color)

    // setShrinkL(shrink)
  }
  console.log('floorColor: ', floorColor)
  return (
    <div
      className={bubbleStyle1}
      id="button"
      onMouseEnter={() => changeBgHandler(true, floorColor, true)}
      onMouseLeave={() => changeBgHandler(false, floorColor, false)}
    >
      {!changeBg && (
        <Image
          className="rounded-full opacity-100 transition delay-500 duration-1000 ease-in-out hover:opacity-0"
          src={profileImg}
          width={100}
          height={100}
        />
      )}
      <div
        className={`${
          changeBg ? 'visible' : 'hidden'
        } ${bubbleStyle2} z-0 mb-4 from-[#93b493] opacity-0 transition delay-200 duration-[1200ms] hover:opacity-100`}
      >
        <div className="relative h-2/5 w-full">
          <Image src={coverImg} layout="fill" objectFit="cover" />
        </div>
        {/* <div
          className="text-gradient1 absolute top-[120px] z-10 flex w-full justify-start pt-4 font-sans
                      text-[45px] font-semibold capitalize tracking-tight text-[#fff] subpixel-antialiased shadow-lg md:text-[50px]"
        >
          <p className="glowing-text1 ml-2 -mt-[30px] transform pb-0 font-['serif'] font-bold md:ml-4">
            Ghostly Kisses
          </p>
        </div> */}
      </div>

      <div className="spotify1" id="spotify">
        {/* <iframe
              src="https://open.spotify.com/embed/user/lydia.lewis249/playlist/2tCd3KMX7opiv0RE3kEeEy"
              width="300"
              height="80"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe> */}
      </div>
    </div>
  )
}

export default TrackBubble
