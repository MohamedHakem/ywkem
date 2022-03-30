// import TopTracks from './widgets/remove-probably/TopTracks'
// import OldTracks from './widgets/OldTracks'
// import Tracks from './widgets/Tracks'
// import Projects from './widgets/Projects'
// import MenuItem from './MenuItem'
// import FindMe from './widgets/FindMe'

const masonryStyle = `grid grid-cols-1 gap-4 mx-auto w-full text-white sm:grid-cols-2 md:grid-cols-3 sm:gap-0`
const masonryColStyle = `flex flex-row m-auto justify-center gap-6 mb-4`

const HomeMasonry = ({ children }) => {
  // console.log('children: ', Children)
  return (
    <div className={masonryStyle}>
      <div className={masonryColStyle}>{children}</div>
    </div>
  )
}

export default HomeMasonry
