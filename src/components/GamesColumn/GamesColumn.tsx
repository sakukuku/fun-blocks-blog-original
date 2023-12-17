import React from 'react';
import Button from "@mui/joy/Button";
import {Avatar, Chip} from "@mui/joy";

export const GamesColumn = () => {
  return (
      <div className="border border-black bg-[#FFFCF9] p-5 w-[285px] max-h-[776px]">
        {/* Row 1 */}
        <div className="flex justify-between items-center mb-10 h-[33px]">
          <Chip>Games</Chip>
          <div>
            {/* Replace IconComponent with your actual icon button component */}
            <Avatar>F</Avatar>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mb-10 min-h-[583px] overflow-auto">
          {/* Row 2 content, potentially overflowing */}
        </div>

        {/* Row 3 */}
        <div className="flex justify-end h-[40px]">
          {/* Replace ButtonComponent with your actual button component */}
          <Button variant="solid">Solid</Button>
        </div>
      </div>
  );
}
