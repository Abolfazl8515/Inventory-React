import NavBar from "../NavBar/NavBar";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";
import CategoryForm from "../CategoryForm/CategoryForm";
import Filters from "../Filters/Filters";
import { useEffect, useState } from "react";

const Parent = () => {
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("Categories"))
  );
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("Products"))
  );
  const [searchProducts, setSearchProducts] = useState([...products]);
  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(products));
  }, [products]);
  useEffect(() => {
    localStorage.setItem("Categories", JSON.stringify(categories));
  }, [categories]);
  return (
    <main className="App">
      <NavBar numOfProducts={products.length} />
      <section className="w-11/12 h-auto flex justify-between items-start">
        <div className="w-1/2 flex flex-col">
          <Filters products={products} setSearchProducts={setSearchProducts} />
          <ProductList
          setSearchProducts={setSearchProducts}
            searchProducts={searchProducts}
            setProducts={setProducts}
            products={products}
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <CategoryForm categories={categories} setCategories={setCategories} />
          <ProductForm
            categories={categories}
            setProducts={setProducts}
            setSearchProducts={setSearchProducts}
            products={products}
          />
        </div>
      </section>
    </main>
  );
};

export default Parent;
