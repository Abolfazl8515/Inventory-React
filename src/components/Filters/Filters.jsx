const Filters = ({ products, setSearchProducts }) => {
  const searchHandler = (e) => {
    const allProducts = [...products];
    const filtredProducts = allProducts.filter((p) =>
      p.title.includes(e.target.value)
    );
    setSearchProducts(filtredProducts);
  };

  const sortHandler = (e) => {
    const allProducts = [...products];
    const sortedProducts = allProducts.sort((a, b) => {
      if (e.target.value === "newest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      } else if (e.target.value === "oldest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      }
    });
    setSearchProducts(sortedProducts);
  };

  return (
    <div className="w-3/4 flex flex-col items-start mt-5">
      <h2 className="text-white font-yekan font-bold text-2xl">فیلتر ها</h2>
      <form className="w-full flex flex-col">
        <div className="w-full h-10 flex items-center justify-around">
          <label
            htmlFor="search"
            className="w-1/2 text-white font-yekan text-xl"
          >
            جستجو:
          </label>
          <input
            onChange={searchHandler}
            type="text"
            id="search"
            className="w-40 h-8 p-2 mt-2 text-white font-yekan border border-solid border-white focus:outline-none bg-transparent rounded-md"
          />
        </div>
        <div className="w-full h-10 flex items-center justify-around">
          <label htmlFor="sort" className="w-1/2 text-white font-yekan text-xl">
            مرتب سازی بر اساس:
          </label>
          <select
            onChange={sortHandler}
            id="sort"
            className="w-40 h-8 mt-4 text-white font-yekan border border-solid border-white focus:outline-none bg-gray-900 rounded-md"
          >
            <option value="oldest">قدیمی ترین</option>
            <option value="newest">جدیدترین</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
