import { Divider } from "@mantine/core"
import Searchbar from "../findTalent/Searchbar"
import Talent from "../findTalent/Talent"


const FindTalent = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-[`poppins`]">

    <Divider size="sm" mx="md" />
<Searchbar/>
  <Divider size="sm" mx="md" />
<Talent/>
  
</div>
)
  
}

export default FindTalent