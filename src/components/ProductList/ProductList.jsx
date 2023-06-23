const ProductList = ({ products }) => {
  return (
    <div className="w-full flex flex-col items-start mt-5">
      <h2 className="font-yekan font-bold text-white text-2xl">لیست محصولات</h2>
      <div className="w-11/12 h-auto flex flex-col items-center">
        {products.map((p) => (
          <Product
            key={p.id}
            title={p.title}
            date={p.createdAt}
            category={p.category}
            quantity={p.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

const Product = ({ title, date, category, quantity }) => {
  return (
    <div className="w-full h-10 flex justify-between items-center mt-3">
      <h4 className="w-1/2 font-yekan text-sm text-white">{title}</h4>
      <div className="w-1/2 flex justify-between items-center">
        <p className="font-yekan text-white">{date}</p>
        <p className="w-20 h-7 flex justify-center items-center border border-solid border-white rounded-lg font-yekan text-white">
          {category}
        </p>
        <p className="w-7 h-7 flex justify-center items-center border border-solid border-white bg-slate-500 rounded-full text-white">
          {quantity}
        </p>
        <button type="button">
          <img src="src/assets/delete.svg" alt="delete icon" />
        </button>
      </div>
    </div>
  );
};
