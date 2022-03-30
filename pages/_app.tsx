import '../styles/globals.css'
import '../styles/freeCircle.css'
import '../styles/TracksBubble.css'

import { AnimatePresence } from 'framer-motion'
import { SessionProvider } from 'next-auth/react'

import type { AppProps } from 'next/app'
// import { Router } from 'next/router'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </SessionProvider>
  )
}

export default MyApp
