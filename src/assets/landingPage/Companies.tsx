import Marquee from "react-fast-marquee";
import {companies} from "../../Data/Data";
const Companies=()=>{
  return (
<div className="mt-20 pb-5">

  <div className=" text-4xl text-mine-shaft-100 text-center font-semibold">
    Truested By <span className="text-paris-m-500">1000+</span> Companies
  </div>


  <Marquee pauseOnHover={true}>
        {companies.map((company, index) => (
          <div key={index} className="hover:bg-mine-shaft-900 rounded-xl mx-8 px-2 py-1">
            {/* Dynamically generate the src path using template literals */}
            <img
              src={`/Companies/${company}.png`} // Assuming each company has a 'name' field
              alt={company} // Use company.name as alt text
              className="h-20 w-auto" // Tailwind classes for size (optional)
            />
          </div>
        ))}
</Marquee>
 
</div>
  );
}

export default Companies;