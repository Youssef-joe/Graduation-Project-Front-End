import React, { Fragment } from 'react'

const reviewsDetails = ({params}) => {
  return (
    <Fragment>
        <h1>this is review number {params.reviewsId} for product number {params.productsId}</h1>
    </Fragment>
  )
}

export default reviewsDetails