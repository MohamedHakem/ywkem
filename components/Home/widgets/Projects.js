import InboundButton from '../InboundButton'

const projectsStyle = `m-1 mb-[25px] h-auto w-auto rounded-2xl bg-[#0f0f0f] p-8 pt-4 text-center 
font-bold sm:mb-0 sm:mx-3`

const Projects = () => {
  return (
    <div className={projectsStyle}>
      <h3>I'm working on</h3>
      <div className="mt-2 flex h-[100px] w-full justify-center rounded-2xl bg-zinc-800 opacity-90">
        <p className="m-auto">Stay tuned!</p>
      </div>
      <InboundButton url={'/projects'}>
        <p className="text-base font-medium text-white">See All Projects</p>
      </InboundButton>
    </div>
  )
}

export default Projects
