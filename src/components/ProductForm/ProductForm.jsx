import { useRef, useState } from "react";

const ProductForm = ({
  products,
  setProducts,
  categories,
  setSearchProducts,
}) => {
  const selectRef = useRef();
  const [formValues, setFormValues] = useState({
    productTitle: "",
    quantity: 0,
    category: "default",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formValues.category === "default" ||
      formValues.productTitle.trim() === "" ||
      formValues.quantity === 0 ||
      formValues.quantity === ""
    )
      return;
    const allProducts = [...products];
    const newProduct = {
      id: Date.now(),
      title: formValues.productTitle,
      quantity: formValues.quantity,
      category: formValues.category,
      createdAt: new Date().toLocaleDateString("fa-ir"),
    };
    allProducts.push(newProduct);
    setProducts(allProducts);
    setSearchProducts(allProducts);
    formValues.productTitle = "";
    selectRef.current.value = "default";
    formValues.category = "default";
    formValues.quantity = 0;
  };

  return (
    <div className="xl:w-600 sm:w-400 w-80 h-80 p-5 flex justify-start flex-col items-center bg-slate-600 mt-10 rounded-md">
      <h2 className="font-yekan font-bold text-white">اضافه کردن محصول جدید</h2>
      <div className="w-full mt-5">
        <form
          className="w-full flex flex-col items-center"
          onSubmit={submitHandler}
        >
          <label
            htmlFor="productTitle"
            className="font-yekan text-white w-11/12 text-right"
          >
            عنوان
          </label>
          <input
            value={formValues.productTitle}
            onChange={changeHandler}
            id="productTitle"
            name="productTitle"
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
            value={formValues.quantity}
            onChange={changeHandler}
            id="quantity"
            name="quantity"
            type="number"
            className="w-11/12 h-8 p-2 mt-2 text-white font-yekan border border-solid border-white focus:outline-none bg-transparent rounded-md"
          />
          <select
            ref={selectRef}
            onChange={changeHandler}
            name="category"
            className="w-11/12 h-8 mt-4 text-white font-yekan border border-solid border-white focus:outline-none bg-slate-600 rounded-md"
          >
            <option value="default" className="bg-slate-500">
              انتخاب دسته بندی
            </option>
            {categories.map((c) => {
              return (
                <option value={c.title} className="bg-slate-500" key={c.id}>
                  {c.title}
                </option>
              );
            })}
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
