import Image from 'next/image'

const cardStyle = `relative mb-6 box-border flex w-auto flex-col rounded-2xl bg-[#0f0f0f] p-6 text-white drop-shadow-xl`
const innerCardStyle = `relative flex-start box-border flex flex-row flex-nowrap items-center justify-start`
const imageStyle = `relative inset-0 h-16 w-16 flex-shrink-0 rounded-full object-cover object-center`

const AboutCard = () => {
  return (
    <div className={cardStyle}>
      <div className={innerCardStyle}>
        <div className="relative h-[64px] w-[64px]">
          <Image
            alt="Mohamed-Hakem"
            layout="fill"
            className={imageStyle}
            src="/mohamed-hakem.jpg"
            sizes="64px"
          />
        </div>
        <div className="ml-5 flex-1 text-white">
          <h1 className="font-sans text-2xl font-bold">Mohamed Hakem</h1>
          <p className="text-md">All 5-star excellent-feedback Software Engineer, hire me on Upwork</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
