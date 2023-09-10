import { LazyLoadImage } from "react-lazy-load-image-component";

import Settings from "../assets/icons/settings-01.svg";
import Bell from "../assets/icons/bell-01.svg";
import Menu from "../assets/icons/Icon (2).svg";
import Profile from "../assets/images/Avatar.png";

const Nav = () => {
  return (
    <div className="flex justify-between items-center py-5 border-b border-skin-gray-bg">
      <h1 className="font-bold text-[24px] font-inter">ToDo</h1>

      <nav>
        {/* Mobile Nav */}
        <div className="sm:hidden">
          <LazyLoadImage src={Menu} alt="menu" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex items-center gap-[16px]">
          <li>
            <LazyLoadImage src={Settings} alt="settings" />
          </li>
          <li>
            <LazyLoadImage src={Bell} alt="bell" />
          </li>
          <li>
            <LazyLoadImage src={Profile} alt="profile" width={40} height={40} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
