// import TopTracks from './widgets/remove-probably/TopTracks'
// import OldTracks from './widgets/OldTracks'
import Tracks from './widgets/Tracks'
import Projects from './widgets/Projects'
import Reading from './widgets/Reading'
import FindMe from './widgets/FindMe'
// import { useEffect, useState } from 'react'

// use this for mobile screens to render all widgets as flex and order them.
import useWindowSize from '../../hooks/useWindowSize'
import { motion } from 'framer-motion'

const masonryStyle = `grid grid-cols-1 gap-4 text-white sm:grid-cols-2 sm:gap-0`
const masonryColStyle = `flex-start flex flex-col gap-4 transition hidden sm:flex`

// const easing = [0.6, -0.05, 0.01, 0.99]

const popIn = {
  initial: { opacity: 0 },
  animate: {
    // scale: [0.8, 1.03, 0.85, 1.025, 0.9, 1.02, 0.95, 1.01, 0.99, 1],
    scale: [0.7, 1.04, 1],
    opacity: 1,
  },
  // transition: { duration: 0.1 },
}

// const fadeInUp = {
//   initial: {
//     y: 60,
//     opacity: 0,
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: easing,
//     },
//   },
// }

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const staggerLeft = {
  animate: {
    transition: {
      staggerChildren: 0.22,
      delay: 0.2,
    },
  },
}

const staggerRight = {
  animate: {
    transition: {
      duration: 10,
      staggerChildren: 0.3,
    },
  },
}

const HomeMasonry = ({ children, leftWidgets, rightWidgets }) => {
  const size = useWindowSize()

  // console.log('the hook: ', size)

  // const [shrinkL, setShrinkL] = useState(null)
  // const [shrinkR, setShrinkR] = useState(false)

  // console.log('children: ', children)

  // useEffect(() => {
  //   setShrinkL(false)
  // }, [])

  const dragConstraints = { top: 0, left: 0, right: 0, bottom: 0 }

  return (
    <div className={masonryStyle}>
      {/* {console.log(
        'filter: ',
        children.filter((c) => c.props.left)
      )} */}

      {/* {console.log('leftWidgets: ', leftWidgets)} */}

      {size.width >= 640 ? (
        <>
          <motion.div
            className={`${masonryColStyle} -ml-[10px]`}
            variants={staggerLeft}
          >
            {/* <div className={`${masonryColStyle} -ml-[10px]`}> */}
            {/* {children?.props?.children?.props?.children.filter(
              (c) => c.props.leftCol
            )} */}
            {leftWidgets.map((l, i) => (
              <motion.div
                key={i}
                // drag
                // dragConstraints={dragConstraints}
                // variants={popIn}
              >
                {l}
              </motion.div>
            ))}
            {/* </div> */}
          </motion.div>

          <motion.div
            className={`${masonryColStyle} -mr-[10px]`}
            variants={staggerRight}
          >
            {/* <div className={`${masonryColStyle} -mr-[10px]`}> */}
            {/* {children.props.children.filter(
              (c) => !c.props.children?.props?.children?.props.leftCol
            )} */}
            {rightWidgets.map((r, i) => (
              <motion.div
                key={i}
                // variants={popIn}
                // drag
                // dragConstraints={dragConstraints}
              >
                {r}
              </motion.div>
            ))}
          </motion.div>
        </>
      ) : (
        <motion.div variants={stagger} className="flex flex-col sm:hidden">
          {children.map((c, i) => (
            <motion.div
              key={i}
              // drag
              // dragConstraints={dragConstraints}
              // variants={popIn}
            >
              {c}
            </motion.div>
          ))}
        </motion.div>
      )}
      {/* <div className="gap-4 sm:hidden">{children}</div>
      <div className={`${masonryColStyle} -ml-[10px]`}>
        {children.filter((c) => c.props.left)}
      </div>
      <div className={`${masonryColStyle} -mr-[10px] ml-[10px]`}>
        {children.filter((c) => !c.props.left)}
      </div> */}
    </div>
  )

  // return shrinkL ? (
  //   <div class="flex flex-row flex-wrap justify-between">
  //     <div class="mb-6 basis-[48%] rounded-3xl">
  //       <Projects
  //         shrinkL={shrinkL}
  //         setShrinkL={setShrinkL}
  //         shrinkR={shrinkR}
  //         setShrinkR={setShrinkR}
  //       />
  //     </div>
  //     <div class="-order-1 mb-6 h-[300%] w-auto flex-auto basis-[100%] rounded-3xl transition">
  //       <Tracks
  //         shrinkL={shrinkL}
  //         setShrinkL={setShrinkL}
  //         shrinkR={shrinkR}
  //         setShrinkR={setShrinkR}
  //       />
  //     </div>
  //     <div class="mb-6 basis-[48%] rounded-3xl">
  //       <Reading
  //         shrinkL={shrinkL}
  //         setShrinkL={setShrinkL}
  //         shrinkR={shrinkR}
  //         setShrinkR={setShrinkR}
  //       />
  //     </div>
  //     <div class="mb-6 basis-[48%] rounded-3xl">
  //       <FindMe
  //         shrinkL={shrinkL}
  //         setShrinkL={setShrinkL}
  //         shrinkR={shrinkR}
  //         setShrinkR={setShrinkR}
  //       />
  //     </div>
  //   </div>
  // ) : (
  //   <div className={`${masonryStyle}`}>
  //     <div className={masonryColStyle}>
  //       <Projects
  //         shrinkL={shrinkL}
  //         setShrinkL={setShrinkL}
  //         shrinkR={shrinkR}
  //         setShrinkR={setShrinkR}
  //       />
  //       <Reading
  //         shrinkL={shrinkL}
  //         setShrinkL={setShrinkL}
  //         shrinkR={shrinkR}
  //         setShrinkR={setShrinkR}
  //       />
  //     </div>
  //     <div className={` ${masonryColStyle}`}>
  //       <Tracks
  //         shrinkL={shrinkL}
  //         setShrinkL={setShrinkL}
  //         shrinkR={shrinkR}
  //         setShrinkR={setShrinkR}
  //       />
  //       <FindMe
  //         shrinkL={shrinkL}
  //         setShrinkL={setShrinkL}
  //         shrinkR={shrinkR}
  //         setShrinkR={setShrinkR}
  //       />
  //     </div>
  //   </div>
  // )
}

export default HomeMasonry

//----// Method_1:  to expand widget to the whole width of the grid
// on widget hover:
// 1- change the main grid to position:relative
// 2- change the widget style to:
// position: absolute; width: 100%; left: 0px; margin: auto;
// 3- margin top or bottom the element on the other column the same size of the expanded element */

/*
<div className={`${masonryStyle}`}>
                        <div className={masonryColStyle}>
                          <Projects
                            shrinkL={shrinkL}
                            setShrinkL={setShrinkL}
                            shrinkR={shrinkR}
                            setShrinkR={setShrinkR}
                          />
                          <Reading
                            shrinkL={shrinkL}
                            setShrinkL={setShrinkL}
                            shrinkR={shrinkR}
                            setShrinkR={setShrinkR}
                          />
                        </div>
                        <div className={` ${masonryColStyle}`}>
                          <Tracks
                            shrinkL={shrinkL}
                            setShrinkL={setShrinkL}
                            shrinkR={shrinkR}
                            setShrinkR={setShrinkR}
                          />
                          <FindMe
                            shrinkL={shrinkL}
                            setShrinkL={setShrinkL}
                            shrinkR={shrinkR}
                            setShrinkR={setShrinkR}
                          />
                        </div>
                      </div>
*/
