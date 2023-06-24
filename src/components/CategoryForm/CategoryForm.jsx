import { useState } from "react";

const CategoryForm = ({ categories, setCategories }) => {
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const addCategoryHandler = (e) => {
    e.preventDefault();
    if (formValues.title.trim() === "") return;
    const allCategories = [...categories];
    const newCategory = {
      id: Date.now(),
      title: formValues.title,
      desc: formValues.desc,
    };
    allCategories.push(newCategory);
    setCategories(allCategories);
    setShowForm(false);
    formValues.title = "";
    formValues.desc = "";
  };

  if (showForm) {
    return (
      <div className="xl:w-600 sm:w-400 w-80 h-80 p-5 flex justify-start flex-col items-center bg-slate-600 mt-10 rounded-md">
        <h2 className="font-yekan font-bold text-white">
          اضافه کردن دسته بندی جدید
        </h2>
        <div className="w-full mt-5">
          <form
            className="w-full flex flex-col items-center"
            onSubmit={addCategoryHandler}
          >
            <label
              htmlFor="title"
              className="font-yekan text-white w-11/12 text-right"
            >
              عنوان
            </label>
            <input
              id="title"
              type="text"
              value={formValues.title}
              name="title"
              onChange={changeHandler}
              className="w-11/12 h-8 p-2 mt-2 text-white font-yekan border border-solid border-white focus:outline-none bg-transparent rounded-md"
            />
            <label
              htmlFor="desc"
              className="font-yekan text-white w-11/12 text-right mt-2"
            >
              توضیحات
            </label>
            <textarea
              id="desc"
              rows="2"
              value={formValues.desc}
              name="desc"
              onChange={changeHandler}
              className="w-11/12 bg-transparent focus:outline-none p-2 text-white border border-solid border-white rounded-md max-w-lg max-h-40 mt-2"
            ></textarea>
            <div className="w-11/12 mt-5 flex justify-between">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="lg:w-52 w-28 h-7 flex justify-center items-center bg-transparent border border-solid border-white text-white rounded-md font-yekan"
              >
                صرف نظر کردن
              </button>
              <button
                type="submit"
                className="lg:w-52 w-28 h-7 flex justify-center items-center bg-slate-500 border-none text-white rounded-md font-yekan"
              >
                اضافه کردن
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <h2
        className="w-full text-center font-yekan font-bold text-2xl text-white my-3 cursor-pointer"
        onClick={() => setShowForm(true)}
      >
        اضافه کردن دسته بندی جدید؟
      </h2>
    );
  }
};

export default CategoryForm;
