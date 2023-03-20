import React, { useEffect, useState } from 'react'
import { useCreateMenuMutation } from './menuApiSlice'
import { useNavigate } from 'react-router-dom'
const CreateMenu = () => {

  const navigate = useNavigate()

  const [createMenu, {
    isSuccess 
  }]  = useCreateMenuMutation()

  useEffect(() => {
    if(isSuccess) {
      setFoodName('')
      setFoodType('')
      setFoodCourse('')
      setPrice('')
      navigate('/readMenus')
    }
  }, [isSuccess, navigate])

  const[foodName, setFoodName] = useState('')
  const[foodType, setFoodType] = useState('')
  const[foodCourse, setFoodCourse] = useState('')
  const[price, setPrice] = useState('')

 

  const onChangeFoodName = (e) => {setFoodName(e.target.value)}
  const onChangeFoodType = (e) => {setFoodType(e.target.value)}
  const onChangeFoodCourse = (e) => {setFoodCourse(e.target.value)}
  const onChangePrice = (e) => {setPrice(e.target.value)}

  const onAddMenu = async(e) => {
    e.preventDefault()
    await createMenu({foodName, foodType, foodCourse, price})
  }

  return (
    <form onSubmit={onAddMenu}>
      Food Name: <input type='text' name='foodName' value={foodName} onChange={onChangeFoodName} /> 

      <div>
    <input type="radio" value="Vegetarian" name="foodType" onChange={onChangeFoodType} checked={foodType.value} /> Vegetarian
    <input type="radio" value="Non-Vegetarian" name="foodType" onChange={onChangeFoodType} checked={foodType.value}/> Non-Vegetarian
  </div>
{/* Drop Down Example */}

<select value={foodCourse} onChange={onChangeFoodCourse}>
<option value="null">Select</option>
            <option value="MainCourse">MainCourse</option>
            <option value="Snacks">Snacks</option>
            <option value="Drinks">Drinks</option>
            <option value="Entree">Entree</option>
          </select>

Food Price: <input type='text' name='price' value={price} onChange={onChangePrice} />
    <button type='submit'>ADD</button>
    </form>
  )
}

export default CreateMenu