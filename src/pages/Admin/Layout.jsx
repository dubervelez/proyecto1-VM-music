import React from 'react'
import { Children } from 'react'
import Header from '../../components/Header'

function layout({ children }) {
  return (
    <div className='layout-contenedor'>
        <Header></Header>
        <main> { children } </main>
    </div>
  )
}

export default layout
