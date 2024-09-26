import React from "react";

const RecipeLoader: React.FC = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-700 rounded"></div>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
            </div>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeLoader;
