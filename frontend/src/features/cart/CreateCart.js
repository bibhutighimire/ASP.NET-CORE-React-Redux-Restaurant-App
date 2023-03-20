// import React, { useEffect, useState } from 'react'
// import { useCreateCartMutation } from './cartApiSlice'
// import { useNavigate } from 'react-router-dom'
// const CreateCart = () => {

//   const navigate = useNavigate()

//   const [createCart, {
//     isSuccess 
//   }]  = useCreateCartMutation()

//   useEffect(() => {
//     if(isSuccess) {
//       setFoodName('')
//       setFoodType('')
//       setFoodCourse('')
//       setPrice('')
//       navigate('/readCarts')
//     }
//   }, [isSuccess, navigate])

//   const[foodName, setFoodName] = useState('')
//   const[foodType, setFoodType] = useState('')
//   const[foodCourse, setFoodCourse] = useState('')
//   const[price, setPrice] = useState('')

 

//   const onChangeFoodName = (e) => {setFoodName(e.target.value)}
//   const onChangeFoodType = (e) => {setFoodType(e.target.value)}
//   const onChangeFoodCourse = (e) => {setFoodCourse(e.target.value)}
//   const onChangePrice = (e) => {setPrice(e.target.value)}

//   const onAddCart = async(e) => {
//     e.preventDefault()
//     await createCart({foodName, foodType, foodCourse, price})
//   }

//   return (
//     <form onSubmit={onAddCart}>
//       Food Name: <input type='text' name='foodName' value={foodName} onChange={onChangeFoodName} /> 

//       <div>
//     <input type="radio" value="Vegetarian" name="foodType" onChange={onChangeFoodType} checked={foodType.value} /> Vegetarian
//     <input type="radio" value="Non-Vegetarian" name="foodType" onChange={onChangeFoodType} checked={foodType.value}/> Non-Vegetarian
//   </div>
// {/* Drop Down Example */}

// <select value={foodCourse} onChange={onChangeFoodCourse}>
// <option value="null">Select</option>
//             <option value="MainCourse">MainCourse</option>
//             <option value="Snacks">Snacks</option>
//             <option value="Drinks">Drinks</option>
//             <option value="Entree">Entree</option>
//           </select>

// Food Price: <input type='text' name='price' value={price} onChange={onChangePrice} />
//     <button type='submit'>ADD</button>
//     </form>
//   )
// }

// export default CreateCart

import React from 'react'

const CreateCart = () => {
  return (
    <div>CreateCart</div>
  )
}

export default CreateCart