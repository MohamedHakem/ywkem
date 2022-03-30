import AboutCard from '../components/Home/AboutCard'
import MenuMasonry from '../components/Home/MenuMasonry'
import HomeLayout from '../components/Layouts/HomeLayout'
import Controls from '../components/Home/controls'
import { motion } from 'framer-motion'
import MenuItem from '../components/Home/MenuItem'

const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const items = [
  <MenuItem url={'/projects'} />,
  <MenuItem url={'/projects'} />,
  <MenuItem url={'/projects'} />,
  <MenuItem url={'/projects'} />,
  <MenuItem url={'/projects'} />,
]
const menu = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // initial="initial"
      // animate="animate"
    >
      <motion.div initial="initial" animate="animate">
        <HomeLayout>
          <Controls />
          <AboutCard />
          <motion.div variants={stagger}>
            <MenuMasonry>
              {items.map((item, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  {item}
                </motion.div>
              ))}
            </MenuMasonry>
          </motion.div>
        </HomeLayout>
      </motion.div>
    </motion.div>
  )
}

export default menu
