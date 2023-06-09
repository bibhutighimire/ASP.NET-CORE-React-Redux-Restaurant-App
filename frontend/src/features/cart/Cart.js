import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllCarts, selectCartById, useDeleteCartMutation } from './cartApiSlice'
import { useNavigate } from 'react-router-dom'
import Total from './Total'

const Cart = ({cartId}) => {
  const navigate = useNavigate()



  const [
    deleteCart, {
      isSuccess: isDelSuccess
    }] = useDeleteCartMutation()

  const cart = useSelector(state=> selectCartById(state, cartId))
 
 
  

//console.log("CART:",cart)
  useEffect(() => {
    if(isDelSuccess) {
      navigate('/readmenus')
    }
    
  },[isDelSuccess, navigate])

    const onDelete = async(e) => {
      e.preventDefault()
      await deleteCart({id: cart.id})
      
    }





  return (
    <>
    
    <tr>

      <td>{cart.foodName}</td>
   
      <td>{cart.quantity}</td>
      <td>${cart.price}</td> 
      <td><button onClick={onDelete}>Delete</button>
 
      </td>
    </tr>

    </>
  )
}

export default Cart