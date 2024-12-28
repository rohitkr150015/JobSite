import { Avatar } from "@mantine/core";
import { work } from "../../Data/Data";

const Working = () => {
  return (
    <div className=" pb-5 mt-20">
      <div className= " text-4xl text-center mb-3 text-mine-shaft-100 font-semibold">
        How it <span className="text-paris-m-400">Works</span>
      </div>

      <div className="text-mine-shaft-300 text-lg w-1/2 m-auto">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>

      <div className="flex px-16  justify-between items-center">
        <div className="relative">
          <img className="w-[32rem]" src="/Working/Girl.png" alt="GirlPicture" />

          <div className="w-36 top-[15%]  right-0 absolute flex flex-col items-center gap-1 border border-paris-m-400 rounded-xl py-3 px-1 backdrop-blur-md">
          <Avatar className="!h-16 !w-16"  src="/avatar1.png" alt="it's me" />
          <div className="text-sm font-semibold text-mine-shaft-100 text-center">Complete your profile</div>
          <div className="text-xs text-mine-shaft-300">70% Completed</div>
          </div>
       
        </div>

      
      
<div className="flex flex-col gap-3 top-[10%] ">
    {/* Mapping through work array */}
{work.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="p-2.5 bg-paris-m-300 rounded-full">
                {/* Corrected img tag */}
                <img
                  className="h-14 w-14"
                  src={`/Working/${item.name}.png`}
                  alt={item.name} // Use item.name for alt text
                />
              </div>
              <div className="flex flex-col">

              <div className="text-mine-shaft-300 font-semibold text-xl ">
                {item.name}
              </div>
              <div className="text-mine-shaft-300">{item.desc}</div>
            </div>

              </div>
            
          ))}
</div>
        
         
        </div>
      </div>
    
  );
};

export default Working;































// import { work } from "../../Data/Data";

// const Working=()=>{

//   return (
//     <div className="flex flex-col gap-3 text-center pb-5 mt-20">
//   <div className="text-mine-shaft-100 text-4xl font-semibold">
//      How it <span className="text-paris-m-400">Works</span>
//   </div>

//   <div className="text-mine-shaft-300 text-lg w-1/2 m-auto">
//     Explore diverse job opportunities tailored to your skills. Start your career journey today!
//   </div>

// <div>

// <div>
// <img className="w-[32rem]" src="/Working/Girl.png" alt="GirlPicture"></img>

// </div>

//   <div className="flex px-16 justify-around items-center">
//     <div>
//       <img src="/Working/Apply for job.png" ></img>
//     </div>
//     {
//       work.map((item,index)=>  (< div key={index} className="flex  items-center gap-4">
//       <div className="p-2.5 bg-paris-m-300 rounded-full"> 
//         <img className="h-12 w-12"  src={`/Working/${item.name}.png' }alt="" /></div>
//       <div className="text-mine-shaft-300 font-semibold text-xl">Build Your Resume</div>
//       <div className="text-mine-shaft-300">{item.desc}
//       </div>
//       </div>
   
//     </div>))
    


// </div>

//     </div>
  

//   );
// }

// export default Working;