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

const meta = {
  title: 'Mohamed Hakem | Software Engineer | Digital Garden',
  description:
    'Front-end developer, JavaScript enthusiast, and an Upcoming Software Engineer. Follow for Web Development Content.',
  image: '/mohamed-hakem.jpg',
  canonical: 'https://ywkem.vercel.app/',
}

const Home = () => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover"
        />
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.canonical} />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://ywkem.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mohamed Hakem" />
        <meta property="og:title" content={meta.title} key="title" />
        <meta property="og:image" content={meta.image} />
        <meta property="og:description" content={meta.description} />
        {/* <!-- Twitter Meta Tags --> */}
        <meta property="twitter:domain" content="ywkem.vercel.app" />
        <meta property="twitter:url" content="https://ywkem.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ywkem" />
        <meta name="twitter:site" content="@ywkem" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:description" content={meta.description} />
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
