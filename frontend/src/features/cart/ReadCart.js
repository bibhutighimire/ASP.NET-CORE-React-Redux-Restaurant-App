import React, { useEffect, useState } from 'react'
import { useDeleteAllCartMutation, useReadcartsQuery } from './cartApiSlice'
import Cart from './Cart'
import { useNavigate } from 'react-router-dom'

const ReadCarts = () => {
const navigate = useNavigate()
const [showCart, setShowCart] = useState(false)
    const [deleteAllCart, {
        isSuccess:isDelCartSuccess
    }] = useDeleteAllCartMutation()
  
  const {
    data: carts,
    isSuccess
  } = useReadcartsQuery()


 const onFinishAndPay = () => {
navigate('/finalcart') 

}
    
  let content
  if(isSuccess) {
    const {ids, entities} = carts
    console.log('IDS in cart',ids)
    const tableData = ids.map(cartId => <Cart key={cartId} cartId={cartId} />)
    
    content = (
        <>
         <button onClick={onFinishAndPay}>Finish and Pay</button>
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
        </>
    )


  }
  return (
    <>
 
     {content}
    </>
  )
}

export default ReadCarts