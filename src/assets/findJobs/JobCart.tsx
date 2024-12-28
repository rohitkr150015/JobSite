import { IconBookmark, IconClockHour4 } from "@tabler/icons-react"
import { Divider, Text } from '@mantine/core'

const JobCart = (props:any) => {
  return ( 
<div className="bg-mine-shaft-900 p-4  w-72 flex flex-col gap-2 rounded-xl
 hover:shadow-[0_0_5px_1px_blue] !shadow-paris-m-400">

<div className="flex justify-between">
  {/* icon + title */}
 <div className="flex gap-2 items-center ">
<div className="h-9 w-8 p-2   bg-mine-shaft-800 rounded-md" >
   <img src= {'/Icons/${props.company}.png'}/></div>

{/* title+bottomtag */}
<div>
  <div className="font-semibold">{props.jobTitle}</div>
  <div className="text-xs"> {props.company} &#x2022;  {props.applicants} Applicants</div>
</div>



 </div>
 <div className="text-mine-shaft-300 cursor-pointer"><IconBookmark/></div>


</div>
<div className="flex gap-2 [&>div]:py-1 [&>div]:px-2  [&>div]:bg-mine-shaft-800  [&>div]:text-paris-m-400   [&>div]:rounded-lg
text-xs">
  <div>{props.experience}</div>
  <div>{props.jobType}</div>
  <div>{props.location}</div>
</div>
<Text className="text-justify text-mine-shaft-300"  size="xs" lineClamp={3}>
 {props.description}
    </Text>

        <Divider size="xs" color="mine-shaft.7"/>
        
<div className="flex justify-between"> 

<div className="text-mine-shaft-200 font-semibold">&#8377; {props.package}/</div>
<div className="flex  gap-2 text-xs items-center"><IconClockHour4  stroke={1.5}  className="h-5 w-5  text-mine-shaft-300"/>12 {props.postedDaysAgo}</div>

</div>
<div></div>

    </div>

  )
}

export default JobCart