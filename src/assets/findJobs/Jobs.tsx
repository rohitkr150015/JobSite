import { jobList } from "../../Data/JobsData"
import JobCart from "./JobCart"
import Sort from "./Sort"


const Jobs = () => {
  return (
    <div className="p-5">

      <div className="flex justify-between gap-2">

        <div className="text-2xl font-semibold">Recommended Jobs</div>
       
        <Sort/>
      
      </div >
      <div className="mt-10 flex flex-wrap gap-5">
      {
  jobList.map((job , index)=><JobCart key={index} {...job} />)
}

      </div>



      
    </div>
  )
}

export default Jobs