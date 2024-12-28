import { IconJoinStraight ,IconBell ,IconSettings} from "@tabler/icons-react";
import { Avatar ,Indicator} from '@mantine/core';
import Navlinks from "./Navlinks";


const Header=()=>{
return(
    <div className=" w-full bg-mine-shaft-900 h-20 px-5 text-paris-m-300 flex  items-center  justify-between">
       <div className="flex gap-3 items-center  text-paris-m-400">
       <IconJoinStraight  stroke={2}  className="h-9 w-10"/>
       <div className="text-3xl font-semibold" >GET IT</div>
       </div>
       <Navlinks></Navlinks>
       <div className="flex gap-4 items-center">
       
        <div className="flex gap-1 items-center">
     
            <div>Avatar</div>
            
            <Avatar src="avatar.png" alt="it's me" />
           
        </div>
  <div className="bg-mine-shaft-950 p-1 rounded-full">
  <IconSettings stroke={1.5}/>
  </div>
  <div className="p-1 rounded-full bg-mine-shaft-950">
  <Indicator  color="brightparis-200"  size={11} offset={6}  processing/>
        <IconBell stroke={1.5}/> 
        {/* by defalut stroke is 2 */}
       </div>
  </div>
 
    </div>
)

}
export default Header;