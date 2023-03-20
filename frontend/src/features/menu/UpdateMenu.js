import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectMenuById, useUpdateMenuMutation } from './menuApiSlice'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateMenu = () => {

  const navigate = useNavigate()
let courses = ['MainCourse', 'Snacks', 'Drink', 'Entree']
  const [
    updateMenu, {
      isSuccess: isUpdateSuccess
    }] = useUpdateMenuMutation()

    const {id} = useParams()

    const menu = useSelector(state => selectMenuById(state, id))
  useEffect(() => {
    if(isUpdateSuccess) {
      setFoodName('')
      setFoodType('')
      setFoodCourse('')
      setPrice('')
      navigate('/readMenus')
    }
  }, [isUpdateSuccess, navigate])

  const[foodName, setFoodName] = useState(menu.foodName)
  const[foodType, setFoodType] = useState(menu.foodType)
  const[foodCourse, setFoodCourse] = useState(menu.foodCourse)
  const[price, setPrice] = useState(menu.price)

 

  const onChangeFoodName = (e) => {setFoodName(e.target.value)}
  const onChangeFoodType = (e) => {setFoodType(e.target.value)}
  const onChangeFoodCourse = (e) => {setFoodCourse(e.target.value)}
  const onChangePrice = (e) => {setPrice(e.target.value)}

  const onUpdateMenu = async(e) => {
    e.preventDefault()
    await updateMenu({id:menu.id,foodName, foodType, foodCourse, price})
  }

 

  return (
    <form onSubmit={onUpdateMenu}>
    Food Name: <input type='text' name='foodName' value={foodName} onChange={onChangeFoodName} /> 

    <div checked={foodType} >
  <input type="radio" value="Vegetarian" name="foodType" onChange={onChangeFoodType} checked={foodType === 'Vegetarian'} /> Vegetarian
  <input type="radio" value="Non-Vegetarian" name="foodType" onChange={onChangeFoodType} checked={foodType === 'Non-Vegetarian'} /> Non-Vegetarian
</div>
{/* Drop Down Example */}

         
  <select value={foodCourse} onChange={onChangeFoodCourse} checked={foodCourse}>
<option value="null">Select</option>
{
  courses.map(course => (

          <option value={course} checked={foodCourse === course}>{course}</option>
  ))
}
   </select>



Food Price: <input type='text' name='price' value={price} onChange={onChangePrice} />
  <button type='submit'>UPDATE</button>
  </form>
  )
}

export default UpdateMenu