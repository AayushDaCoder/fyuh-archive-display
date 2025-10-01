const categories = ["VIEW ALL", "T-SHIRTS", "SHIRTS", "PANTS", "HOODIES"];

const CategoryNav = () => {
  return (
    <nav className="border-b border-gray-border bg-gray-light">
      <div className="mx-auto max-w-[1400px] px-12">
        <ul className="flex items-center justify-center gap-10 py-4">
          {categories.map((category) => (
            <li key={category}>
              <a
                href="#"
                className="text-sm font-medium uppercase tracking-wide text-gray-dark transition-colors hover:text-primary-black"
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
