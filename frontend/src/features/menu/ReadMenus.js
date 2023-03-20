import React, { useEffect } from 'react'
import {useReadMenusQuery} from './menuApiSlice'
import Menu from './Menu'
import ReadCart from '../../features/cart/ReadCart'
import { useNavigate } from 'react-router-dom'

const ReadMenus = () => {
const navigate = useNavigate()


  const {
    data: menus,
    isSuccess
  } = useReadMenusQuery()



  let content
  if(isSuccess) {
    const {ids, entities} = menus
/*     console.log('IDS',ids)
    console.log('ENTITIES',entities) */
    const tableData = ids.map(menuId => <Menu key={menuId} menuId={menuId} />)
    content = (
      <>
      <table border={"1px solid black"} cellPadding={"10px"}>
        <thead>
          <tr>
          <td>Food Name</td>
          <td>Food Type</td>
          <td>Food Course</td>
          <td>Price</td>
          <td>Actions</td>
          </tr>
          
        </thead>
        <tbody>
          {tableData}
          
        </tbody>
      </table>
  <ReadCart />
      </>
    )
  }
  return content
}

export default ReadMenus