import Link from 'next/link'

const buttonStyle = `m-auto mt-3 flex w-full items-center justify-center rounded-xl
bg-[#383838] p-[10px] transition hover:opacity-80 active:scale-[.95]`
const InboundButton = ({ children, url }) => {
  return (
    <Link href={url}>
      <a onClick>
        <div className={buttonStyle}>{children}</div>
      </a>
    </Link>
  )
}

export default InboundButton
