import React from 'react'
import { useSelector } from 'react-redux'
import { selectMenuById } from '../menu/menuApiSlice'

const SaleMenu = ({menuId}) => {

const menu = useSelector(state => selectMenuById(state,menuId))

const handleAddToCart = (e) => {
    e.preventDefault()
}
  return (
    <>
    <div>
      <h4>{menu.foodName}</h4>
        <p>{menu.foodType} - {menu.foodCourse}</p>
      <p>${menu.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
</>
  )
}

export default SaleMenu