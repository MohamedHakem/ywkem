import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const cardStyle = `relative mb-6 box-border flex w-auto flex-col rounded-2xl bg-[#0f0f0f] p-6 text-white drop-shadow-xl`
const innerCardStyle = `flex-start box-border flex flex-row flex-nowrap items-center justify-start`
const imageStyle = `absolute inset-0 h-16 w-16 flex-shrink-0 rounded-full object-cover object-center`
const buttonStyle = `m-auto flex w-full items-center justify-center border border-[#383838] rounded-xl bg-transparent p-[10px] transition 
hover:bg-[#383838] duration-300 active:scale-[.9]`

const AboutCard = () => {
  const dragConstraints = { top: 0, left: 0, right: 0, bottom: 0 }
  return (
    <div className={cardStyle}>
      <div className={innerCardStyle}>
        <Image
          alt="MohamedHakem"
          width={64}
          height={64}
          className={imageStyle}
          src="https://dummyimage.com/80x80"
        />
        <div className="ml-5 flex-1 text-white">
          <h1 className="font-sans text-2xl font-bold">Mohamed Hakem</h1>
          <p className="text-md">Software Developer</p>
        </div>
        <motion.div drag dragConstraints={dragConstraints}>
          <Link href={'/menu'}>
            <a className="my-auto h-full">
              <div className={buttonStyle}>
                <p>Menu</p>
              </div>
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutCard
