import { Link, useLocation } from "react-router-dom";

const Navlinks = () => {
  const links = [
    { name: "Find Jobs", url: "find-jobs" },
    { name: "Find Talent", url: "find-talent" },
    { name: "Upload Job", url: "upload-job" },
    { name: "About us", url: "about" },
  ];



  const location = useLocation();

  return (
    <div className="flex gap-5 h-full items-center text-mine-shaft-300">
      {links.map((link, index) => (
        <div
          key={index}
          className={`${
            location.pathname === "/" + link.url
              ? "border-paris-m-400 text-paris-m-400"
              : "border-transparent"
          } border-t-[3px] h-full flex items-center`}
        >
          <Link to={link.url}>{link.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Navlinks;
