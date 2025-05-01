import { logoIconsList } from "../constants/data";
import type { LogoIcon as LogoIconType } from "../constants/types";

const LogoIcon = ({ icon }: { icon: LogoIconType }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} />
    </div>
  );
};

export default function LogoShowcase() {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}

          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
