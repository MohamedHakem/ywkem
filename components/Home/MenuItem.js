import Image from 'next/image'
import InboundButton from './InboundButton'
import Link from 'next/link'

const MenuItem = ({ url }) => {
  return (
    <Link href={url}>
      <a>
        <div className="mx-1 h-auto w-auto text-center font-semibold sm:mx-0">
          <div className="h-auto w-full rounded-[30px] border border-[#454545] p-5 transition duration-300 hover:bg-[#464646]">
            <p className="p-2 py-6 text-sm backdrop-blur-2xl">
              <span className="mr-4 rounded-md bg-yellow-300 p-1 font-bold text-black">
                YDKJS
              </span>
              <span className="text-yellow-300">You Don&apos;t Know JS</span>
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default MenuItem
