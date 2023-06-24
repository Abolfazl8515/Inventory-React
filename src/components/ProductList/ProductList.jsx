const ProductList = ({
  products,
  setProducts,
  searchProducts,
  setSearchProducts,
}) => {
  const deleteHandler = (id) => {
    const allProducts = [...products];
    const filtredProducts = allProducts.filter((p) => p.id !== id);
    setProducts(filtredProducts);
    setSearchProducts(filtredProducts);
  };

  return (
    <div className="w-full flex flex-col lg:items-start items-center mt-5 sm:overflow-hidden overflow-auto">
      <h2 className="font-yekan font-bold text-white text-2xl">لیست محصولات</h2>
      <div className="w-11/12 h-auto flex flex-col items-center">
        {searchProducts.map((p) => (
          <Product
            key={p.id}
            title={p.title}
            date={p.createdAt}
            category={p.category}
            quantity={p.quantity}
            onDelete={() => deleteHandler(p.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

const Product = ({ title, date, category, quantity, onDelete }) => {
  return (
    <div className="w-full h-10 flex justify-between items-center mt-3">
      <h4 className="sm:w-1/2 w-1/3 font-yekan text-sm text-white">{title}</h4>
      <div className="sm:w-1/2 w-2/3 flex justify-between items-center">
        <p className="font-yekan text-white">{date}</p>
        <p className="w-20 h-7 flex justify-center items-center border border-solid border-white rounded-lg font-yekan text-white">
          {category}
        </p>
        <p className="w-7 h-7 flex justify-center items-center border border-solid border-white bg-slate-500 rounded-full text-white">
          {quantity}
        </p>
        <button type="button" onClick={onDelete}>
          <img src="src/assets/delete.svg" alt="delete icon" />
        </button>
      </div>
    </div>
  );
};
