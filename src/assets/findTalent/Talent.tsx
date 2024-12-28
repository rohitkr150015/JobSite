
import { talents } from "../../Data/TalentData"
import Sort from "../findJobs/Sort"
import TalentCard from "./TalentCard"



const Talent = () => {
  return (
    <div className="p-5">

      <div className="flex justify-between gap-2">

        <div className="text-2xl font-semibold">Talents</div>
       
        <Sort/>
      
      </div >
      <div className="mt-10 flex flex-wrap gap-5 jsutify-between">
 {
  talents.map((talent , index)=>{
    return <TalentCard key={index} {...talent} />
  })
 }

      </div>



      
    </div>
  )
}

export default Talent