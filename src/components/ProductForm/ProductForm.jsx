const ProductForm = () => {
  return (
    <div className="w-600 h-80 p-5 flex justify-start flex-col items-center bg-slate-600 mt-10 rounded-md">
      <h2 className="font-yekan font-bold text-white">اضافه کردن محصول جدید</h2>
      <div className="w-full mt-5">
        <form className="w-full flex flex-col items-center">
          <label
            htmlFor="titleProduct"
            className="font-yekan text-white w-11/12 text-right"
          >
            عنوان
          </label>
          <input
            id="titleProduct"
            type="text"
            className="w-11/12 h-8 p-2 mt-2 text-white font-yekan border border-solid border-white focus:outline-none bg-transparent rounded-md"
          />
          <label
            htmlFor="quantity"
            className="font-yekan text-white w-11/12 text-right mt-2"
          >
            تعداد
          </label>
          <input
            id="quantity"
            type="number"
            className="w-11/12 h-8 p-2 mt-2 text-white font-yekan border border-solid border-white focus:outline-none bg-transparent rounded-md"
          />
          <select className="w-11/12 h-8 mt-4 text-white font-yekan border border-solid border-white focus:outline-none bg-slate-600 rounded-md">
            <option value="default" className="bg-slate-500">
              انتخاب دسته بندی
            </option>
          </select>
          <div className="w-11/12 mt-5 flex">
            <button
              type="submit"
              className="w-full h-7 flex justify-center items-center bg-slate-500 border-none text-white rounded-md font-yekan"
            >
              اضافه کردن
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
