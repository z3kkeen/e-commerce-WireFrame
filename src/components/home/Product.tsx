import React from 'react'

// type Products = {
//   data: {
//     id: number,
//     name: string,
//     stock: number,
//     price: number,
//     imgurl: string,
//   }
// }
// {data}: Products

export default function Product() {
  return (
    <div className="item">
        <img src="public\mugg.jpg" alt="mugg" />
        <div className="itemInfo">
          <h1 className="itemName">name</h1>
          <hr className="hr" />
          <p className="itemPrice">price</p>
          <p className="itemStock">stock</p>
        </div>
    </div>
  )
}
