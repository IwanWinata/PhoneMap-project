import "./App.css";
import CardComp from "./components/CardComp";
import axios from "axios";
import url from "./constant/url";
import { useState, useEffect } from "react";

function App() {
  const  [products, setProducts]  = useState([]);

  const fetchPhones = async () => {
    try {
      let { data } = await axios.get(url + "/products");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPhones();
    console.log(products);
  }, []);
  return (
    <>
      <p className="text-4xl text-white font-bold m-4">Find Your New Product</p>
      <div className="container my-12 mx-auto px-4 md:px-12 rounded-xl">
        {(products && products.length !== 0 ) && (
          <div className="flex flex-wrap -mx-1 lg:-mx-4 gap-4">
            {products.map((el) => (
              <CardComp el={el} key={el.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
