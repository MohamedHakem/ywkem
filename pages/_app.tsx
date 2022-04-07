import '../styles/globals.css'
import '../styles/freeCircle.css'
import '../styles/TracksBubble.css'

import { AnimatePresence } from 'framer-motion'
// import { SessionProvider } from 'next-auth/react'

import type { AppProps } from 'next/app'
// import { Router } from 'next/router'

function MyApp({ Component, pageProps: { ...pageProps }, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default MyApp
