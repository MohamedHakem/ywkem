const OldTracks = () => {
  return (
    <div className="relative m-1 h-auto w-auto rounded-2xl bg-[#fff] p-6 pt-4 text-center font-semibold text-gray-600 sm:mx-3 sm:mr-0">
      <p>I'm Listening to 🎧</p>
      <div className="tracksbg relative z-10 mt-4 w-full">
        <div className="z-20 h-auto w-auto">
          <div className="flex">
            <div className="has-tooltip">
              <div className="container ml-0 justify-center hover:animate-pulse">
                <div className="box h-[120px] w-[120px]">
                  <div className="spin-container">
                    <div className="shape">
                      <div className="bd"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="tooltip relative py-1 px-3 transition-all duration-300">
                hello
              </p>
            </div>
            {/* <div className="has-tooltip"> */}
            <div className="container mr-0 justify-center hover:animate-pulse">
              <div className="box mt-[10px] h-[60px] w-[60px]">
                <div className="spin-container">
                  <div className="shape">
                    <div className="bd"></div>
                  </div>
                </div>
                {/* </div> */}
              </div>
              {/* <p className="tooltip relative py-1 px-3 transition-all duration-300">
              hello
            </p> */}
            </div>
            <div className="container mr-0 justify-end hover:animate-pulse">
              <div className="box mt-[-40px] h-[90px] w-[90px]">
                <div className="spin-container">
                  <div className="shape">
                    <div className="bd"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="box m-auto mt-[-40px] ml-[130px] h-[145px] w-[145px] hover:animate-pulse">
              <div className="spin-container">
                <div className="shape h-full hover:h-[200px] hover:w-[150px]">
                  <div className="bd"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-14 ml-[30px] flex">
            <div className="container ml-0 justify-start hover:animate-pulse">
              <div className="box h-[100px] w-[100px]">
                <div className="spin-container">
                  <div className="shape">
                    <div className="bd"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mr-0 justify-end hover:animate-pulse">
              <div className="box h-[80px] w-[80px]">
                <div className="spin-container">
                  <div className="shape">
                    <div className="bd"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OldTracks
