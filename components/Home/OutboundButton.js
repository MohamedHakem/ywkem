// import Link from 'next/link'

const buttonStyle = `m-auto mt-3 flex w-full items-center justify-center rounded-xl
bg-[#383838] p-[10px] transition hover:opacity-80 active:scale-[.95]`

const Button = ({ link, size, d, text }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <div className={buttonStyle}>
        <svg
          className="relative mr-3 box-border h-6 w-6"
          fill="white"
          viewBox={`0 0 ${size} ${size}`}
        >
          <path d={d}></path>
        </svg>
        <p className="text-base font-medium text-white">{text}</p>
      </div>
    </a>
  )
}

export default Button
