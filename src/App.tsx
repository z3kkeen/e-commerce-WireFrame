// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Product from './components/Product'

function App() {


  return (
    <>
      <div className="body">

        <Header />

        <main>
          <div className="topDiv">

            <div className="divHeader">
              <h2>Items</h2>
              <p className="h2-p">description</p>
            </div>

            <div className="itemList">
              <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>
            
          </div>

          <div className="bottomDiv">

            <div className="divHeader">
              <h2>Items</h2>
              <p className="h2-p">description</p>
            </div>
            
            <div className="itemList">
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
