import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";


const JobCategory = () => {
  return (
    <div className="flex flex-col gap-3 text-center pb-5 mt-20">
      <div className="text-mine-shaft-100 text-4xl font-semibold">
        Browse <span className="text-paris-m-400">Job</span> Category
      </div>

      <div className="text-mine-shaft-300 text-lg w-1/2 m-auto">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>

      <Carousel slideSize="22%" slideGap="xs" controlSize={25} loop dragFree
      className="[&_button]:bg-paris-m-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100"
      
      nextControlIcon={<IconArrowRight  className="h-8 w-8"/>}
      previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center w-64 gap-1 border border-paris-m-400 p-5 rounded-xl hover:cursor-pointer
            hover:shadow-[0_0_5px_2px_black] my-5 transition duration-300 ease-in-out !paris-m-300">
              <div className="bg-paris-m-500 p-2 rounded-full">
                <img
                  className="w-8 h-8"
                  src={`/Category/${category.name}.png`}
                  alt={category.name}
                />
              </div>
              <div className="text-mine-shaft-200 text-xl font-semibold">{category.name}</div>
              <div className="text-mine-shaft-300 text-sm">{category.desc}</div>
              <div className="text-paris-m-300 text-lg">{category.jobs} new job posted</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;




// import { Carousel } from "@mantine/carousel";
// import { jobCategory } from "../../Data/Data";

// const JobCategory=()=>{


//   return (
// <div className=" flex flex-col gap-3 text-center  pb-5 mt-20">
 

// <div className=" text-mine-shaft-100 text-4xl font-semibold"> Browse <span className="text-paris-m-400">Job</span> Category  </div>

//  <div className=" text-mine-shaft-300 text-lg w-1/2 m-auto" >
//   Explore diverse job opportunities tailored to your skills. Start your career journey today! </div>

  
// <Carousel slideSize="22%"  slideGap="md" controlSize={25} loop dragFree>
//      {
//       jobCategory.map((category,index)=> (
//       <Carousel.Slide key={index}>
//         <div className="flex flex-col items-center w-64 gap-1">
//     <div className="bg-paris-m-500 p-2 rounded-full">
// <img className="w-8 h-8" src={`/Category/${category.name}.png'} alt={category.name}></img>
// </div>
//   <div className="text-mine-shaft-200 text-xl font-semibold">{category.name}</div>
//   <div className="text-mine-shaft-300 text-sm">{category.desc}</div>
//   <div className="text-paris-m-300 text-lg">{category.jobs}  new job posted</div>
//   </div>  

//       </Carousel.Slide>
//       )) }
//     </Carousel>
//     </div>


//   );
// };

// export default JobCategory;