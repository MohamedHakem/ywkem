import Head from 'next/head'
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
// import { useSession } from 'next-auth/react'

const leftWidgets = [
  <Projects leftCol />,
  <Reading leftCol />,
  <ProTips leftCol />,
  // <Movies leftCol />,
  // <Dashboard leftCol />,
  // <DesignPatterns leftCol />,
]

const rightWidgets = [
  <Tracks />,
  <FindMe />,
  <Blogs />,
  // <DataStructure />,
  // <Algorithms />,
  // <ComponentLibrary />,
  // <Snippets />,
  // <Resources />,
]

const widgets = [
  <Tracks />,
  <Projects leftCol />,
  <Reading leftCol />,
  <FindMe />,
  <ProTips leftCol />,
  <Blogs leftCol />,
  // <Movies leftCol />,
  // <Dashboard leftCol />,
  // <DesignPatterns leftCol />,
  // <DataStructure />,
  // <Algorithms />,
  // <ComponentLibrary />,
  // <Snippets />,
  // <Resources />,
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
const title = 'Mohamed Hakem | Software Engineer'
const description =
  'Front-end developer, JavaScript enthusiast, and an Upcoming Software Engineer'
const image = '/mohamed-hakem-pic1.jpg'

const Home = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} key="title" />
        <link href="/static/favicon.ico" rel="shortcut icon" />

        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta property="og:url" content="https://ywkem.vercel.app/" />
        <link rel="canonical" href="https://ywkem.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mohamed Hakem" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ywkem" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <HomeLayout>
        <AboutCard />
        <HomeMasonry leftWidgets={leftWidgets} rightWidgets={rightWidgets}>
          {widgets.map((w, i) => (
            <div key={i}>{w}</div>
          ))}
        </HomeMasonry>
      </HomeLayout>
    </>
  )
}

export default Home
