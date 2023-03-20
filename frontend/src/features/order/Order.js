import React from 'react'
import { useSelector } from 'react-redux'
import { selectOrderById } from './orderApiSlice'

const Order = ({orderId}) => {
  
    const order = useSelector(state => selectOrderById(state, orderId))

  return (
   <>
 
   <tr>
    <td>{order.foodName}</td>
    <td>{order.quantity}</td>
    <td>{order.price}</td>
   </tr>
   </>
  )
}

export default Order