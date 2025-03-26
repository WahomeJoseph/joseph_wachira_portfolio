import { Animate } from "../components/Animate"
import SkillsCard from "../components/SkillsCard"

const Skills = () => {

  return (

    <div className="flex flex-col w-full min-h-screen font-montserrat py-10 px-4">
      <h2 className="text-3xl font-bold uppercase text-[#ddd6cb] mt-24 mb-2 text-center">Skills and Experience</h2>
      <span className='text-base font-semi-bold text-[#ddd6cb] mb-2 text-center'>𝓜𝔂 𝓪𝓬𝓱𝓲𝓮𝓿𝓮𝓶𝓮𝓷𝓽𝓼</span>
      <Animate><SkillsCard /> </Animate>
    </div>
  )
}

export default Skills