import '../styles/globals.css'
import '../styles/freeCircle.css'
import '../styles/TracksBubble.css'
import '../styles/masonry-grid.css'

export default function MyApp({
  Component,
  pageProps: { ...pageProps },
  router,
}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    // <AnimatePresence exitBeforeEnter>
      getLayout(
      <Component {...pageProps} key={router.route} />)
    // </AnimatePresence>
      // <Component {...pageProps} key={router.route} />
  )
}
