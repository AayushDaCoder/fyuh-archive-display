const categories = [
  "VIEW ALL",
  "T-SHIRTS",
  "POLOS",
  "SHIRTS",
  "JACKETS",
  "HOODIES",
  "SWEATSHIRTS",
  "CARGOS",
  "JEANS",
  "SHORTS",
  "PANTS",
  "JERSEY"
];

const CategoryNav = () => {
  return (
    <nav className="border-b border-[#e5e5e5] bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1600px] px-8">
        <ul className="flex items-center justify-start gap-8 py-3 overflow-x-auto">
          {categories.map((category) => (
            <li key={category}>
              <a
                href="#"
                className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.12em] text-[#1a1a1a] transition-opacity hover:opacity-60"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryNav;
