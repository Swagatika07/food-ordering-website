import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsCloudUpload } from "react-icons/bs";
import { ImageToBase64 } from "../utility/ImageToBase64";
import {
  MdFastfood,
  MdCloudUpload,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    calories: "",
    price: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);
    console.log(data);

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, image, category, calories, price } = data;

    if (name && image && category && calories && price) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      toast.success(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          calories: "",
        };
      });
    } else {
      toast.error("Enter required Fields");
    }
  };
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <form
        className="m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
        {/* <label htmlFor="name">Name</label> */}

        <div className="w-full mb-2 py-2 border-b border-gray-300 h-20px flex flex-item-center gap-4">
          <MdFastfood className="text-xl mt-2 text-gray-700" />
          <input
            type={"text"}
            name="name"
            placeholder="Give me a title"
            className="w-full py-1 h-full text-lg bg-transparent font-semibold
          outline-none border-none placeholder:text-gray-400 text-textColor"
            onChange={handleOnChange}
            value={data.name}
          />
        </div>

        {/*<label htmlFor="category">Category</label>*/}
        <div className="w-full mb-2">
          <select
            className="outline-none w-full text-base border-b-2 mb-2"
            id="category"
            name="category"
            onChange={handleOnChange}
            value={data.category}
          >
            <option
              className="text-base border-0 outline-none capitalize
bg-white text-headingColor"
              value="others"
            >
              Select category
            </option>

            <option
              className="text-base border-0 outline-none capitalize
    bg-white text-headingColor"
              value="fruits"
            >
              Fruits
            </option>
            <option value="vegetable">Vegetable</option>
            <option
              className="text-base border-0 outline-none capitalize
    bg-white text-headingColor"
              value="icecream"
            >
              Icecream
            </option>
            <option
              className="text-base border-0 outline-none capitalize
    bg-white text-headingColor"
              value="dosa"
            >
              Dosa
            </option>
            <option
              className="text-base border-0 outline-none capitalize
    bg-white text-headingColor"
              value="pizza"
            >
              Pizza
            </option>
            <option
              className="text-base border-0 outline-none capitalize
            bg-white text-headingColor"
              value="rice"
            >
              Rice
            </option>
            <option
              className="text-base border-0 outline-none capitalize
            bg-white text-headingColor"
              value="cake"
            >
              Cake
            </option>
            <option
              className="text-base border-0 outline-none capitalize
    bg-white text-headingColor"
              value="burger"
            >
              Burger
            </option>
            <option
              className="text-base border-0 outline-none capitalize
    bg-white text-headingColor"
              value="paneer"
            >
              Paneer
            </option>
            <option
              className="text-base border-0 outline-none capitalize
    bg-white text-headingColor"
              value="sandwich"
            >
              Sandwich
            </option>
          </select>
        </div>
        <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
          {data.image ? (
            <img src={data.image} className="h-full" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
              <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
              <p className="text-gray-500 hover:text-gray-700">
                Click here to upload
              </p>
            </div>
          )}
          <input
            type="file"
            name="uploadimage"
            accept="image/*"
            className="w-0 h-0"
            onChange={uploadImage}
          />
        </label>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFoodBank className="text-gray-700 text-2xl" />
            <input
              type={"number"}
              value={data.calories}
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
              placeholder="calories"
              name="calories"
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2 mb-2">
          <MdAttachMoney className="text-gray-700 text-2xl" />

          <input
            type={"number"}
            className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            name="price"
            placeholder="price"
            onChange={handleOnChange}
            value={data.price}
          />
        </div>
        <button
          type="submit"
          className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
          onClick={handleSubmit}
        >
          Save
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Newproduct;
