import React from 'react'
import Product from '../home/Product'
import TotalSum from './TotalSum'

export default function ItemSummary() {
  return (
    <div>
      <div className="itemsDisplay">
        <h1 className="yourItems"><u>Your Items</u></h1>
        <div className="products">
          <Product />
          <Product />
        </div>
        <TotalSum />
      </div>
    </div>
  )
}
