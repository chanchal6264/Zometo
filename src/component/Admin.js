import React from "react";

import product from "../Product/product";

function Admin() {
  console.log(product);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = () => {
    setOpen(!open);
  };
  return (
    <>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>cat</th>
            <th>price</th>
            <th>img</th>
          </tr>
        </thead>
        <tbody>
          {product.map((e, i) => {
            return (
              <tr key={i}>
                <th>{i+1}</th>
                <th>{e.Name}</th>
                <th>{e.cat}</th>
                <th>{e.Price}</th>
                <th><img className="w-20" src={e.img}/></th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Admin;
