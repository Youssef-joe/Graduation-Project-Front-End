import React, { Fragment } from 'react'

const productsDetails = ({params}) => {
  return (
    <Fragment>
        <h1>this is the details of product number {params.productsId}</h1>
    </Fragment>
  )
}

export default productsDetails