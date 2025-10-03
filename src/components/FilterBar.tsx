import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterBarProps {
  selectedSize: string | null;
  onSizeChange: (size: string | null) => void;
}

const FilterBar = ({ selectedSize, onSizeChange }: FilterBarProps) => {
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto max-w-[1600px] px-8 py-6">
        {/* Page Title */}
        <h1 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground">
          ALL CLOTHING
        </h1>

        {/* Filter and Sort Controls */}
        <div className="flex items-center justify-between">
          {/* Left: Filters */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground">
              FILTER:
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1.5 border border-border bg-card px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-secondary">
                {selectedSize || "SIZE"}
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border border-border z-50">
                <DropdownMenuItem
                  onClick={() => onSizeChange(null)}
                  className="text-[10px] uppercase tracking-[0.12em] cursor-pointer hover:bg-secondary"
                >
                  ALL SIZES
                </DropdownMenuItem>
                {sizes.map((size) => (
                  <DropdownMenuItem
                    key={size}
                    onClick={() => onSizeChange(size)}
                    className="text-[10px] uppercase tracking-[0.12em] cursor-pointer hover:bg-secondary"
                  >
                    {size}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right: Sort and Count */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-foreground">
                SORT BY:
              </span>
              <button className="flex items-center gap-1.5 border border-border bg-card px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:bg-secondary">
                FEATURED
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>
            <span className="text-[10px] tracking-[0.1em] text-muted-foreground">335 PRODUCTS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
