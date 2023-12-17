import React from "react";

export const MainColumn = () => {
  return (
      <div className="w-[895px]">
        {/* Row with 1 column */}
        <div className="flex mb-10">
          <div className="flex-1 bg-gray-200 p-5">Content 1 (Single Column)</div>
        </div>

        {/* Row with 2 columns */}
        <div className="flex mb-10 gap-x-5">
          <div className="flex-1 bg-gray-200 p-5">Content 2A</div>
          <div className="flex-1 bg-gray-200 p-5">Content 2B</div>
        </div>

        {/* Row with 3 columns */}
        <div className="flex mb-10 gap-x-5">
          <div className="flex-1 bg-gray-200 p-5">Content 3A</div>
          <div className="flex-1 bg-gray-200 p-5">Content 3B</div>
          <div className="flex-1 bg-gray-200 p-5">Content 3C</div>
        </div>
      </div>
  );
};
