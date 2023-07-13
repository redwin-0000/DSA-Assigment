import React, { useEffect, useState } from "react";

const App = () => {
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        setDataList(await res.json());
      } catch (error) {
        alert(error.message);
      }
    })();
  }, []);

  return (
    <div>
      <header className="bg-[#1b1c21] h-12 min-w-full text-white text-center flex  justify-center items-center text-2xl font-semibold">
        All Products
      </header>
      <main
        className="bg-[#c4c6d6] w-full min-h-screen
      flex flex-wrap items-center justify-center gap-5
      "
      >
        {dataList.map((e, i) => {
          return (
            <div
              key={i}
              className="bg-[#1f1f27] text-white h-[500px] w-[500px] flex items-center justify-center flex-col gap-4 p-12"
            >
              <img
                src={e.image}
                alt="netImage"
                className="p-4 bg-white h-80 w-80"
              />
              <h1>{e.title}</h1>
              <h3>Price: {e.price}</h3>
              <div className="flex gap-3">
                <a href="" className="bg-slate-200 p-2 text-black rounded-lg">
                  Add to Cart
                </a>
                <a href="" className="bg-slate-200 p-2 text-black rounded-lg">
                  Buy Now
                </a>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default App;
