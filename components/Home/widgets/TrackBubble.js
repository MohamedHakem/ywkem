import Image from 'next/image'

const bubbleStyle1 = `button1 absolute cursor-pointer z-0 h-full w-full animate-pulse shadow-3xl shadow-[#87b587] ring-2 ring-[#93b493] 
                      ring-offset-0 transition-all duration-100 hover:ring-[#0f0f0f]`
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
    setChangeBg(isOpen)

    setStatusColor(color)
  }
  return (
    <div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        scale: [0, 1.5, 1],
      }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className={bubbleStyle1}
      id="button"
      onMouseEnter={() => changeBgHandler(true, floorColor, true)}
      onMouseLeave={() => changeBgHandler(false, floorColor, false)}
    >
      {!changeBg && (
        <div className="relative h-[80px] w-[80px]">
          <Image
            className={`rounded-full transition`}
            src={profileImg}
            layout="fill"
            sizes="96px"
            objectFit="cover"
            alt="a-picture-of-Margaux-Sauvé-a-song-writer-and-singer-for-her-music-project-ghostly-kisses"
          />
        </div>
      )}
      <div
        className={`${
          changeBg ? 'visible' : 'hidden'
        } ${bubbleStyle2} z-0 mb-4 from-[#93b493] opacity-0 transition delay-500 duration-[1200ms] hover:opacity-100`}
      >
        <div className="relative h-[180px] w-full ">
          <Image src={coverImg} layout={'fill'} alt="ghostly-kisses" />
        </div>
        <div
          className={`text-gradient1 absolute top-[132px] z-10 flex w-full justify-start pt-4 font-sans text-[42px]
                      font-semibold capitalize tracking-tight text-[#fff] subpixel-antialiased
                      shadow-lg transition delay-1000 sm:top-[142px] sm:text-[35px] md:top-[135px] md:text-[40px] 
                      ${!changeBg ? 'text-[10px]' : ''}`}
        >
          <p className="glowing-text1 ml-3 -mt-[30px] transform pb-0 font-['serif'] font-bold md:ml-4">
            Ghostly Kisses
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrackBubble
