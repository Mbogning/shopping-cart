import React, { Component } from 'react'
import Products from './section/Products'
import { Route, Routes } from 'react-router-dom'
import Details from './section/Details'

export default class Section extends Component {
  render() {
    return (
      <section>
          <Routes>
            <Route path='/product'  element={<Products />} exact />
            <Route path='/product/:id' element={<Details />} exact />

          </Routes>

      </section>
    )
  }
}

