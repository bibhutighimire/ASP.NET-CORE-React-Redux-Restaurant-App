import React, { useEffect } from 'react'
import { useReadordersQuery } from './orderApiSlice'
import Order from './Order'
import { useNavigate } from 'react-router-dom'


const ReadOrder = () => {

  const navigate = useNavigate()
  const {
    data: orders,
    isSuccess
  } = useReadordersQuery()

  const onMenu = (e) => {
  navigate('/readmenus')

  }


  let content
  if(isSuccess) {

const {ids, entities} = orders
console.log('IDS of ORDERS',ids)
const tableData = ids.map(orderId => <Order key={orderId} orderId={orderId} />)
content = (
 <>
  <table>
    <thead>
      <tr>
        <td>Food Name</td>
        <td>Quantity</td>
        <td>Price</td>
      </tr>
    </thead>
    <tbody>
      {tableData}
      <tr><td>-----------------------------</td></tr>
    </tbody>
  </table>
  <button onClick={onMenu}>Go Back to Menus</button>
 </>
)
  }
  return content
}

export default ReadOrder 