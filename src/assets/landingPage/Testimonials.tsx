import { Avatar, Rating } from "@mantine/core"

import { testimonials } from "../../Data/Data"

export const Testimonials = () => {
  return (
    <div className="flex flex-col gap-3 text-center pb-5 mt-20">
    <div className="text-mine-shaft-100 text-4xl font-semibold">
      What <span className="text-paris-m-400">User</span> Says About Us
    </div>

    <div className="flex justify-evenly">
    {testimonials.map((data, index) => (
  <div 
    key={index} 
    className="flex flex-col w-[22%] border border-paris-m-400 gap-3 mt-10
    rounded-lg"
  >

    
    <div className="flex text-center">
      <Avatar className="!h-14 !w-14" src="avatar.png" alt="it's me" />
      <div>
        <div className="text-lg text-mine-shaft-100">{data.name}</div>
        <Rating value={data.rating} fractions={2} readOnly />
      </div>
    </div>
    <div className="text-sm text-mine-shaft-200">{data.testimonial}</div>
  </div>
))};



    </div>





    </div>
  )
}
export default Testimonials