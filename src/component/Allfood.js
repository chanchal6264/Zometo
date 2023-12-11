import React from "react";
import arr from "../Product/product";
import { useLocation, useNavigate } from "react-router-dom";

const Allfood = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  console.log(arr, "dsffd");
  const product = arr.filter((i) => i.cat === location.state);
  return (
    <div className="flex justify-center my-10">
      <div className="flex  flex-wrap max-w-7xl">
        {product.map((e, i) => {
          return (
            <div onClick={() => navigate("/recipe/" + e.id)}>
              <div className="border-2 rounded-xl max-w-max p-2 m-2">
                <img
                  src={e.img}
                  className="rounded-3xl max-w-[250px] hover:bg-slate-400 mx-auto"
                />
                <button className="  text-xl ">{e.Name}</button>
                <p className="grid text-gray-600">{e.cat}</p>
                <p className="grid text-gray-600">{e.Price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allfood;
