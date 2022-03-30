import Link from 'next/link'

const cardStyle = `relative mb-6 box-border flex w-auto flex-col rounded-2xl text-white drop-shadow-xl`
const innerCardStyle = `flex-start box-border flex flex-row flex-nowrap items-center justify-start`
const buttonStyle = `m-auto flex w-full items-center justify-center border border-[#383838] rounded-xl bg-transparent p-[10px] transition 
hover:bg-[#383838] duration-300 active:scale-[.9]`

const Controls = () => {
  return (
    <div className={cardStyle}>
      <div className={innerCardStyle}>
        <Link href={'/'}>
          <a className="my-auto h-full">
            <div className={buttonStyle}>
              <p>Home</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Controls
