import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectMenuById, useDeleteMenuMutation, useUpdateMenuMutation } from './menuApiSlice'
import { cartApiSlice, selectCartById, useCreateCartMutation } from '../cart/cartApiSlice'
import { useNavigate } from 'react-router-dom'
import ReadCart from '../../features/cart/ReadCart'

const Menu = ({menuId}) => {
  const navigate = useNavigate()

  const[number, setNumber] = useState(0)
  
  const[createCart, {
    isSuccess
  }] = useCreateCartMutation()

  const [
    deleteMenu, {
      isSuccess: isDelSuccess
    }] = useDeleteMenuMutation()

  const menu = useSelector(state=> selectMenuById(state, menuId))

  useEffect(() => {
    if(isDelSuccess) {
      navigate('/readMenus')
    }
    
  },[isDelSuccess, navigate])
  
    const onDelete = async(e) => {
      e.preventDefault()
      await deleteMenu({id: menu.id})
      
    }

    const onAddToCart = (e) => {
      e.preventDefault()
      
createCart({foodName:menu.foodName, Quantity: number, price: menu.price, menuId:menu.id})
}

    const onPlus = (e) => {
setNumber(number+1)
    }

    const onMinus = (e) => {
      setNumber(number-1)
    }
    const onUpdate = () => {
navigate(`/${menu.id}`)
    }

  return (
    <>
     <tr>
      <td>{menu.foodName}</td>
      <td>{menu.foodType}</td>
      <td>{menu.foodCourse}</td>
      <td>${menu.price}</td> 
      <td><button onClick={onUpdate}>Update</button><button onClick={onDelete}>Delete</button>
      <button onClick={onMinus}>-</button>{number}<button onClick={onPlus}>+</button>
      <button onClick={onAddToCart}>Add to Cart</button>
      </td>
    </tr>
  
    </>
   
  )
}

export default Menu