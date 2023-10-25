import React from 'react'
import './css/Checkout.css'
import Header from '../components/Header'
import ItemSummary from '../components/checkout/ItemSummary'
import Payment from '../components/checkout/Payment'

export default function Checkout() {
  return (
    <div className="body">
      <Header />

      <div className="container">
        <ItemSummary />
        <Payment />
      </div>
    </div>
  )
}
