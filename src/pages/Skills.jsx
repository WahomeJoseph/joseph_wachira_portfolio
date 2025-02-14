import { Animate } from "../components/Animate"
import SkillsCard from "../components/SkillsCard"

const Skills = () => {

  return (

    <div className="flex flex-col w-full min-h-screen font-montserrat py-10 px-4">
      <h2 className="text-4xl font-bold uppercase bg-gradient-to-tl from-slate-800 via-blue-700 to-zinc-400 bg-clip-text text-transparent mt-24 mb-14 text-center">Skills and Experience</h2>
      <Animate><SkillsCard /> </Animate>
    </div>
  )
}

export default Skills