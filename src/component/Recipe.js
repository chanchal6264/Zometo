import React, { useState, useEffect } from "react";
import arr from "../Product/product";
import { useParams } from "react-router-dom";

function Recipe() {
  const { id } = useParams();
  console.log(id, "id");

  const product = arr.find((i) => i.id == id);
  console.log(product, "product");
  return (
    <>
      recipe
      <div>
        <div className="flex   justify-center">
          <div className="flex justify-center">
            <div className="border-2 max-w-xl grid place-items-center">
              <img className="max-w-3xl" src={product.img} />
            </div>
            <div className="m-5 justify-items-center">
              <p className="font-bold text-4xl p-3">{product.cat}</p>
              <p className="font-semibold text-2xl">
                Name:
                <span className="text-lg p-2">{product.Name}</span>
              </p>
              <p className="font-semibold text-2xl">
                Price: <span className="text-lg p-2">{product.Price}</span>
              </p>
              <p className="font-semibold text-2xl">
                Time<span className="text-lg p-2">Deliver on 30minutes</span>
              </p>
              <button
                // onClick={() => nevigate("/cart")}
                className="bg-orange-400 px-4 p-2 m-3 font-semibold text-xl rounded-xl text-white hover:bg-green-500"
              >
                Order
              </button>
            </div>
          </div>

          {/*<div>
            <img
              className="m-2"
              src={
                "https://b.zmtcdn.com/data/pictures/chains/7/3800977/be23a71354106407a839bc41e72d99ec.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
              }
            />
            <p className="text-xl px-2 font-semibold ">Gujrati Tali</p>
          </div>
          <div>
            <img
              className="m-2"
              src={
                "https://b.zmtcdn.com/data/pictures/7/3800037/ea3b0a0fb3ad58f138e3639c575ed285_featured_v2.jpg?output-format=webp&fit=around|318.75:231.25&crop=318.75:231.25;*,*"
              }
            />
            <p className="text-xl px-2 font-semibold ">
              Avadh Family Restaurant
            </p>
          </div>
          <div>
            <img
              className="m-2"
              src={
                "https://b.zmtcdn.com/data/pictures/8/20710158/fcc3e14af7dbd6c66f6b88a2bf363f57.jpg?output-format=webp&fit=around|285:195&crop=285:195;*,*"
              }
            />
            <p className="text-xl px-2 font-semibold ">Kadhahi Paneer</p>
          </div>
          <div className="border-2">
            <img
              className="m-2"
              src={
                "https://b.zmtcdn.com/data/pictures/8/18780908/97acf23409c33b2d8d12846f8fa4d075.jpg?output-format=webp&fit=around|285:195&crop=285:195;*,*"
              }
            />
            <p className="text-xl px-2 font-semibold ">
              Harikrushna Restaurant
            </p>
            </div>*/}
        </div>
      </div>
    </>
  );
}

export default Recipe;
