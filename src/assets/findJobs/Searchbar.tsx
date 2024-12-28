

import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../../Data/JobsData";
import MultiInput from "./MultiInput";
import { useState } from "react";


const Searchbar = () => {
  const [value, setValue] = useState<[number, number]>([20, 80]);
  return (
     
  
    <div className="flex items-center justify-center p-4 gap-4">
      {dropdownData.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="min-w-[200px]">
            <MultiInput 
              title={item.title} 
              icon={item.icon} 
              options={item.options} 
            />
          </div>
          {index < dropdownData.length - 1 && (
            <Divider size="sm" orientation="vertical" className="h-8 bg-mine-shaft-800" />
          )}
        </div>
      ))}
<div  className="w-1/5  [&_.mantine-Slider-label]:!translate-y-10">
<div className=" flex justify-between">
<div>Salary</div>
<div>&#8377; {value[0]}LPA - &#8377; {value[1]} LPA</div>


</div>

<RangeSlider  color="brightparis.4" size="xs"  
 labelTransitionProps={{
  transition: 'skew-down',
  duration: 150,
  timingFunction: 'linear',
}}  value={value} onChange={setValue} />
</div>


    </div>
  );
};

export default Searchbar;








// import { Divider } from "@mantine/core";
// import { dropdownData } from "../../Data/JobsData";
// import MultiInput from "./MultiInput";

// const Searchbar = () => {
//   return (
//     <div className="flex">
//       {dropdownData.map((item, index) => (
//         <div key={index} className="flex items-center">
//           <div className="w-1/5">
//             <MultiInput {...item} />
//           </div>
//           {index < dropdownData.length - 1 && ( // Add Divider only between items
//             <Divider size="sm" orientation="vertical" />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Searchbar;
