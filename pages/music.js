import HomeLayout from '../components/Layouts/HomeLayout'
import Controls from '../components/Home/controls'
import AboutCard from '../components/Home/AboutCard'
import MenuMasonry from '../components/Home/MenuMasonry'
import TracksFull from '../components/Home/widgets/remove-probably/TracksFull'
const menu = () => {
  return (
    <HomeLayout>
      <TracksFull />
    </HomeLayout>

    //   {/* <Controls />  <AboutCard /> <MenuMasonry /> */}
  )
}

export default menu
