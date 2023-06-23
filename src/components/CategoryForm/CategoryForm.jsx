const CategoryForm = () => {
  return (
    <div className="w-600 h-400 p-5 flex justify-start flex-col items-center bg-slate-600 mt-10 rounded-md">
      <h2 className="font-yekan font-bold text-white">
        اضافه کردن دسته بندی جدید
      </h2>
      <div className="w-full mt-5">
        <form className="w-full flex flex-col items-center">
          <label htmlFor="title" className="font-yekan text-white w-11/12 text-right">عنوان</label>
          <input
          id="title"
            type="text"
            className="w-11/12 h-8 p-2 mt-2 text-white font-yekan border border-solid border-white focus:outline-none bg-transparent rounded-md"
          />
          <label htmlFor="desc" className="font-yekan text-white w-11/12 text-right mt-2">
            توضیحات
          </label>
          <textarea
          id="desc"
            cols="67"
            rows="15"
            className="bg-transparent focus:outline-none p-2 text-white border border-solid border-white rounded-md max-w-lg max-h-40 mt-2"
          ></textarea>
          <div className="w-11/12 mt-5 flex justify-between">
            <button
              type="button"
              className="w-52 h-7 flex justify-center items-center bg-transparent border border-solid border-white text-white rounded-md font-yekan"
            >
              صرف نظر کردن
            </button>
            <button
              type="submit"
              className="w-52 h-7 flex justify-center items-center bg-slate-500 border-none text-white rounded-md font-yekan"
            >
              اضافه کردن
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;
