import OutboundButton from '../OutboundButton'
import SVG from '../SVG'

const findMeStyle = `m-1 mb-[25px] sm:mb-0 h-auto w-auto rounded-2xl bg-[#0f0f0f] p-6 pt-4 text-center sm:mx-3`

const FindMe = () => {
  const [Twitter, LinkedIn, GitHub] = SVG
  return (
    <div className={findMeStyle}>
      <h3>Where you can find me 👇</h3>
      <OutboundButton
        link={'https://www.twitter.com/mh_kem'}
        size={24}
        d={Twitter}
        text={'Say hi on Twitter'}
      />
      <OutboundButton
        link={'https://linkedin.com/in/mhdev'}
        size={50}
        d={LinkedIn}
        text={'Say hello on LinkedIn'}
      />
      <OutboundButton
        link={'https://github.com/mohamedhakem'}
        size={64}
        d={GitHub}
        text={'My Work on GitHub'}
      />
    </div>
  )
}

export default FindMe
