const NavBar = () => {
  return (
    <header className="w-full p-5 flex justify-center items-center bg-slate-600">
      <h1 className="font-yekan font-bold text-white text-2xl ml-3">
        برنامه انبارداری
      </h1>
      <span className="w-7 h-7 pt-1 flex justify-center items-center border border-solid border-white text-white rounded-full font-yekan">
        0
      </span>
    </header>
  );
};

export default NavBar;
