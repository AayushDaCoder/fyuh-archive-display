import { ChevronDown } from "lucide-react";

const FilterBar = () => {
  return (
    <div className="border-b border-gray-border bg-background">
      <div className="mx-auto max-w-[1400px] px-12 py-8">
        {/* Page Title */}
        <h1 className="mb-6 text-[32px] font-bold uppercase tracking-wide text-primary-black">
          T-Shirts
        </h1>

        {/* Filter and Sort Controls */}
        <div className="flex items-center justify-between">
          {/* Left: Filters */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-medium">
              FILTER:
            </span>
            <button className="flex items-center gap-2 rounded border border-gray-border bg-white px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-gray-light">
              SIZE
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 rounded border border-gray-border bg-white px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-gray-light">
              AVAILABILITY
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* Right: Sort and Count */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-medium">
                SORT BY:
              </span>
              <button className="flex items-center gap-2 rounded border border-gray-border bg-white px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-gray-light">
                FEATURED
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <span className="text-xs text-gray-medium">335 PRODUCTS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
