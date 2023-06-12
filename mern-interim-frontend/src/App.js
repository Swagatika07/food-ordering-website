import React, { useEffect } from "react";
import Header from "./component/Header.js";
import { Outlet } from "react-router-dom";
import { setDataProduct } from "./redux/productSlice.js";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`);
      const responseData = await res.json();
      console.log(responseData);
      dispatch(setDataProduct(responseData));
    })();
  }, []);

  console.log(productData);
  return (
    <div>
      <Header />
      <main className="pt-24 bg-white min-h-[100vh]"> {/*bg-slate-500*/}
        <Outlet/>
      </main>
    
    </div>
  );
}

export default App;
