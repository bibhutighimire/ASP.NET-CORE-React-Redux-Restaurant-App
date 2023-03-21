import React, { useEffect, useState } from 'react'
import { useDeleteAllCartMutation, useReadcartsQuery } from './cartApiSlice'
import Cart from './Cart'
import { useNavigate } from 'react-router-dom'
import { selectAllCarts } from './cartApiSlice'
import Total from './Total'
import { useSelector } from 'react-redux'

const ReadCarts = () => {
const navigate = useNavigate()

const selectallcart = useSelector(state=> selectAllCarts(state))

const [deleteAllCart, {
        isSuccess:isDelCartSuccess
    }] = useDeleteAllCartMutation()

    const {
    data: carts,
    isSuccess
  } = useReadcartsQuery()

 
 const onPay = () => {

     deleteAllCart()
  
    } 
    useEffect(() => {
      if(isDelCartSuccess) {
       
        navigate('/readmenus')
        
      }
    },[isDelCartSuccess, navigate])
    
  let content
  if(isSuccess) {
    const {ids, entities} = carts
    const tableData = ids.map(cartId => <Cart key={cartId} cartId={cartId} />)

   

    content = (
     
     <>
      <table border={"1px solid black"} cellPadding={"10px"}>
        <thead>
           
          <tr>
          <td>Food Name</td>
          <td>Quantity</td>
          <td>Price</td>
  
          <td>Actions</td>
          </tr>
          
        </thead>
        <tbody>
          {tableData}

        </tbody>
      </table>
      <p>TOTAL:  <Total selectallcart={selectallcart}/></p>
     </>
    )


  }
  return (
    <>
     <button onClick={onPay}>Pay</button>
     {content}
    </>
  )
}

export default ReadCarts