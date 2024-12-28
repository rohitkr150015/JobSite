import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconJoinStraight } from "@tabler/icons-react";
import { footerLinks } from "../../Data/Data";

const Footer = () => {
  return (
    <div className=" bg-mine-shaft-950 font-[`poppins`] flex pt-20 pb-5 justify-around">
      <div className="w-1/4 flex flex-col gap-4">
        <div className="flex gap-1 items-center text-paris-m-400">
          <IconJoinStraight stroke={2} className="h-9 w-10" />
          <div className="text-3xl font-semibold">GET IT</div>
        </div>
        <div>
          Job portal with user profiles, skill updates, certification, work experience, and admin job postings
        </div>
        <div
          className="flex gap-3 text-paris-m-400 [&>div]:bg-mine-shaft-900 
          [&>div]:rounded-full [&>div]:p-2 [&>div]:cursor-pointer size-2
          hover:[&>div]:bg-mine-shaft-700"
        >
          <div>
            <IconBrandInstagram />
          </div>
          <div>
            <IconBrandFacebook />
          </div>
          <div>
            <IconBrandX />
          </div>
        </div>
      </div>

      {footerLinks.map((item, index) => (
        <div key={index}>
          <div className="text-paris-m-300 text-lg font-semibold mb-4">{item.title}</div>
          {item.links.map((link, subIndex) => (
            <div key={subIndex} className="text-mine-shaft-300 text-sm
             hover:text-paris-m-400 cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">
              {link}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
