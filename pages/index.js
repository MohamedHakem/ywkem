import { motion } from 'framer-motion'

import HomeLayout from '../components/Layouts/HomeLayout'
import HomeMasonry from '../components/Home/HomeMasonry'

import AboutCard from '../components/Home/AboutCard'
import FindMe from 'components/Home/widgets/FindMe'
import Projects from 'components/Home/widgets/Projects'
import Reading from 'components/Home/widgets/Reading'
import Tracks from 'components/Home/widgets/Tracks'
import Blogs from 'components/Home/widgets/Blogs'
import Movies from 'components/Home/widgets/Movies'
import Dashboard from 'components/Home/widgets/Dashboard'
import ProTips from 'components/Home/widgets/ProTips'
import DesignPatterns from 'components/Home/widgets/DesignPatterns'
import DataStructure from 'components/Home/widgets/DataStructure'
import Algorithms from 'components/Home/widgets/Algorithms'
import Snippets from 'components/Home/widgets/Snippets'
import ComponentLibrary from 'components/Home/widgets/ComponentLibrary'
import Resources from 'components/Home/widgets/Resources'
import { useSession } from 'next-auth/react'

const leftWidgets = [
  <ProTips leftCol />,
  <Reading leftCol />,
  <Projects leftCol />,
  <Blogs leftCol />,
  <Movies leftCol />,
  <Dashboard leftCol />,
  <DesignPatterns leftCol />,
]

const rightWidgets = [
  <Tracks />,
  <FindMe />,
  <DataStructure />,
  <Algorithms />,
  <ComponentLibrary />,
  <Snippets />,
  <Resources />,
]

const widgets = [
  <ProTips leftCol />,
  <Tracks />,
  <Reading leftCol />,
  <FindMe />,
  <Projects leftCol />,
  <Blogs leftCol />,
  <Movies leftCol />,
  <Dashboard leftCol />,
  <DesignPatterns leftCol />,
  <DataStructure />,
  <Algorithms />,
  <ComponentLibrary />,
  <Snippets />,
  <Resources />,
]

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
      staggerChildren: 0.5,
    },
  },
}

const Home = () => {
  const dragConstraints = { top: 0, left: 0, right: 0, bottom: 0 }

  const { data: session, status } = useSession()
  console.log('session: ', session)
  console.log('status: ', status)

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // transition={{ duration: 1 }}
    >
      <motion.div animate="animate" initial="initial">
        <HomeLayout>
          <AboutCard />
          {/* <motion.div variants={stagger}> */}
          <HomeMasonry leftWidgets={leftWidgets} rightWidgets={rightWidgets}>
            {widgets.map((w, i) => (
              <div key={i}>{w}</div>
            ))}
            {/* <motion.div variants={stagger}>
              {widgets.map((w, i) => (
                <motion.div
                  // variants={fadeInUp}
                  key={i}
                  drag
                  dragConstraints={dragConstraints}
                  // initial={{ scale: 1 }}
                  // animate={{
                  //   // scale: [0.8, 1.03, 0.85, 1.025, 0.9, 1.02, 0.95, 1.01, 0.99, 1],
                  //   scale: [0.8, 1.02, 0.95],
                  // }}
                  // transition={{ duration: 0.8 }}
                  variants={fadeInUp}
                >
                  {w}
                </motion.div>
              ))}
            </motion.div> */}
          </HomeMasonry>
          {/* </motion.div> */}
        </HomeLayout>
      </motion.div>
    </motion.div>
  )
}

export default Home

//
//
//
//
// function useWindowSize() {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSize, setWindowSize] = useState({
//     width: undefined,
//     height: undefined,
//   })

//   useEffect(() => {
//     // only execute all the code below in client side
//     if (typeof window !== 'undefined') {
//       // Handler to call on window resize
//       function handleResize() {
//         // Set window width/height to state
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         })
//       }

//       // Add event listener
//       window.addEventListener('resize', handleResize)

//       // Call handler right away so state gets updated with initial window size
//       handleResize()

//       // Remove event listener on cleanup
//       return () => window.removeEventListener('resize', handleResize)
//     }
//   }, []) // Empty array ensures that effect is only run on mount
//   return windowSize
// }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//
//
//
//   return <HomeLayout />
// }

/*
app structure 

/ Root
  Pages:
  1-home (all widgets)
    widgets:
      1- projects
      2- blogs 
        - all blogs
          - [blog-1]
          - [blog-2]
      // you can ignore this 3- interesting Ted Talks 
      4- fav music / <Tracks /> (in progress)
      5- last movies watched
      6- last books read / <Reading /> (in progress)
      7- dashboard for stats
      8- tips&tricks
        - js item/button
        - react.js
        - next.js
        - css

      9- design patterns (you can start writing this as blogs, 
        and when it gets more make a dedicated page/hub for them later.)
        - js
        - react
        - node.js

      10- DS (could merge with Algo)
      11- Algo 

      12- components

      13- resources (for.. everything!)

      14- snippets (like leerob.io)

  2-  projects
    - all projects
    - [project-1]
    - [project-2]
    - ...etc

  3- blogs (all blogs)
    - [blog-1]
    - [blog-2]
    - ...etc

  4- fav music (in progress)

  5- fav/last movies watched

  6- fav/recommended-list/last books read 

  7- dashboard for stats

  8- interesting ted talks 

  9- tips&tricks
      - js item/button
      - react.js
      - next.js
      - css

  10- design patters
      - js
      - react
      - node.js

  11- DS (could merge with Algo)
  12- Algo 

  13- components

  14- resources (for.. everything!)

  15- snippets (like leerob.io)

  16- achievements, certifications, learning paths, courses, etc

  17- sweet resume page with a 1-page-pdf-resume download button to open as pdf file in the browser.










  */
