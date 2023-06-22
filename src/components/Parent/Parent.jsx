import NavBar from "../NavBar/NavBar";
import ProductForm from "../ProductForm/ProductForm";
import ProductList from "../ProductList/ProductList";
import CategoryForm from "../CategoryForm/CategoryForm";
import Filters from "../Filters/Filters";

const Parent = () => {
  return (
    <main className="App">
      <NavBar />
      <div className="w-11/12 h-auto flex justify-between items-start">
        <Filters />
        <ProductList />
        <div className="w-1/2 flex flex-col">
          <CategoryForm />
          <ProductForm />
        </div>
      </div>
    </main>
  );
};

export default Parent;
