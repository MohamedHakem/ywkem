const homeStyle = `relative box-border flex w-full flex-col items-stretch` // min-h-screen bg-[#1a1a1a]`
const mainStyle = `relative flex flexing overflow-hidden z-10 box-border min-h-0 w-full items-start justify-center top-0 py-6`// md:py-12`
const bgStyle = `fixed inset-0 z-0 flex min-w-screen w-full flex-col justify-center HomeBackground` // min-h-screen` 
const extra = `fixed z-100 inset-4 pointer-events-none`
const mainContainerStyle = `z-20 mx-auto box-border flex w-[840px] max-w-full  flex-col px-4`

const MenuLayout = ({ children }) => {
  return (
    <>
      <div className={homeStyle}>
        <div className={mainStyle}>
          <div className={mainContainerStyle}>{children}</div>
        </div>
        <div className={bgStyle}></div>
      </div>
      <div className={extra}></div>
    </>
  )
}

export default MenuLayout
