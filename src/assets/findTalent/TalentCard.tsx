import { IconHeart, IconMapPin } from "@tabler/icons-react"
import { Button, Divider, Text } from '@mantine/core'
import { Link } from "react-router-dom"

const TalentCard = (props:any) => {
  return ( 
<div className="bg-mine-shaft-900 p-4  w-96 flex flex-col gap-2 rounded-xl
 hover:shadow-[0_0_5px_1px_blue] !shadow-paris-m-400">

<div className="flex justify-between">
  {/* icon + title */}
 <div className="flex gap-2 items-center ">
<div className="h-9 w-8 p-2   bg-mine-shaft-800 rounded-md" >
   <img  className=" rounded-full"  src= {`/${props.image}.png`}/></div>

{/* title+bottomtag */}
<div>
  <div className="font-semibold text-lg">{props.name}</div>
  <div className="text-sm"> {props.role} &#x2022;  {props.comapany}</div>
</div>



 </div>
 <div className="text-mine-shaft-300 cursor-pointer"><IconHeart/></div>


</div>
<div className="flex gap-2 [&>div]:py-1 [&>div]:px-2  [&>div]:bg-mine-shaft-800  [&>div]:text-paris-m-400   [&>div]:rounded-lg
text-xs">

  {/* {
    props.topSkills.map((skill:any,index:any)=>
    )
  } */}
  <div>React</div>
  <div>Spring</div>
  <div>Mongo</div>
</div>
<Text className="text-justify text-mine-shaft-300"  size="xs" lineClamp={3}>
 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente reiciendis libero dignissimos ad fugit sint?
    </Text>

        <Divider size="xs" color="mine-shaft.7"/>
        
<div className="flex justify-between"> 

<div className="text-mine-shaft-200 font-semibold">&#8377; {props.expectedCtc}/</div>
<div className="flex  gap-2 text-xs items-center"><IconMapPin  stroke={1.5}  className="h-5 w-5  text-mine-shaft-300"/> {props.location}</div>

</div>
<Divider size="sm" mx="md" />

<div className="flex">
  <Link to="/talent-profile">
  <Button color="brightparis.4" variant="outline"  fullWidth >Profile</Button>
  </Link>

<div className="flex [&>*]:w-1/2  gap-3  [&>*]:p-1"  >
<Button variant="light"  fullWidth>Message</Button>
</div>

</div>

    </div>

  )
}

export default TalentCard