import React from 'react';
import {BottomSVG} from "@/components/NavBar/NavBar";

const Footer = () => {
  return (
      <footer className="bg-white text-gray-800 pt-10">
        <div className="max-w-[1240px] mx-auto py-15 px-25 flex justify-between items-center">
          {/* Column 1 */}
          <div className="flex-1">
            <h2 className="font-bold text-lg mb-4">Column 1 Title</h2>
            {/* Content for column 1 */}
          </div>

          {/* Column 2 */}
          <div className="flex-1">
            <h2 className="font-bold text-lg mb-4">Column 2 Title</h2>
            {/* Content for column 2 */}
          </div>

          {/* Column 3 */}
          <div className="flex-1">
            <h2 className="font-bold text-lg mb-4">Column 3 Title</h2>
            {/* Content for column 3 */}
          </div>
        </div>

        {/* SVG Section */}
        <div className="w-full bg-gray-200 overflow-hidden flex mt-10">
          <BottomSVG/>
        </div>
      </footer>
  );
};

export default Footer;
