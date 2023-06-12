import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import { motion } from "framer-motion";
// import Delivery from "../images/delivery.png";
// import orderNow from "../images/orderNow.gif";
import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
// import { GrPrevious, GrNext } from "react-icons/gr";
import HomeContainer from "../component/HomeContainer";
// import AllProduct from "../component/AllProduct";
import FilterProduct from "../component/FilterProduct";
const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "fruits",
    []
  );
  const loadingArrayFeature = new Array(10).fill(null);
  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };
  const [scrollValue, setScrollValue] = useState(0);
  const categoryList = [...new Set(productData.map((el) => el.category))];
  // console.log(categoryList)

  //filter data to display
  const [filterby, setFilterBy] = useState("");
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category) => {
    const filter = productData.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };
  return (
    <>
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <HomeContainer />
        <section className="w-full my-6">
          <div className="w-full flex items-center flex-wrap justify-between ml-2">
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
              Our fresh & healthy fruits
            </p>

            <div className="hidden md:flex gap-3 items-center">
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
                onClick={preveProduct}
              >
                <MdChevronLeft className="text-lg text-white" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
                onClick={nextProduct}
              >
                <MdChevronRight className="text-lg text-white" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="flex flex-start gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all mb-10"
        ref={slideProductRef}
      >
        {homeProductCartListVegetables[0]
          ? homeProductCartListVegetables.map((el) => {
              return (
                <CardFeature
                  key={el._id + "fruits"}
                  id={el._id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                  calories={el.calories}
                  flag={true}
                />
              );
            })
          : loadingArrayFeature.map((el, index) => (
              <CardFeature
                key={index + "cartLoading"}
              /> /* loading="Loading..." */
            ))}
      </div>
      <div className="w-full flex items-center flex-wrap justify-between mb-5 ml-2">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          Our popular dishes
        </p>
      </div>

      <div className="flex justify-center gap-2">
        {categoryList[0] &&
          categoryList.map((el) => {
            return (
              <FilterProduct
                key={el._id}
                category={el}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })}
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-4">
        {dataFilter.map((el) => {
          return (
            <CardFeature
              flag={false}
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              category={el.category}
              calories={el.calories}
              price={el.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
