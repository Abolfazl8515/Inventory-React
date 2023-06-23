const ProductList = () => {
  return (
    <div className="w-full flex flex-col items-start mt-5">
      <h2 className="font-yekan font-bold text-white text-2xl">لیست محصولات</h2>
      <div className="w-11/12 h-auto flex flex-col items-center">
        <Product />
      </div>
    </div>
  );
};

export default ProductList;

const Product = () => {
  return (
    <div className="w-full h-10 flex justify-between items-center mt-3">
      <h4 className="w-1/2 font-yekan text-sm text-white">koshsare</h4>
      <div className="w-1/2 flex justify-between items-center">
        <p className="font-yekan text-white">1401/3/2</p>
        <p className="w-20 h-7 flex justify-center items-center border border-solid border-white rounded-lg font-yekan text-white">
          salam
        </p>
        <p className="w-7 h-7 flex justify-center items-center border border-solid border-white bg-slate-500 rounded-full text-white">
          23
        </p>
        <button type="button">
          <img src="src/assets/delete.svg" alt="delete icon" />
        </button>
      </div>
    </div>
  );
};
