import { Divider } from "@mantine/core"
import Searchbar from "../findJobs/Searchbar"
import Jobs from "../findJobs/Jobs"


const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-[`poppins`]">

        <Divider size="sm" mx="md" />
      <Searchbar/>
      <Divider size="sm" mx="md" />
<Jobs/>
      
    </div>
  )
}

export default FindJobs