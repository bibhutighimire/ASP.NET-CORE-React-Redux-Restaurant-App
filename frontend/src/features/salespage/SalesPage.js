import React, { useEffect } from 'react'
import '../../index.css'
import { useReadMenusQuery } from '../menu/menuApiSlice'
import SaleMenu from './SaleMenu'

const SalesPage = () => {
    const {data: menus,
    isSuccess
} = useReadMenusQuery()
let content

if(isSuccess) {
    const {ids} = menus
    console.log('ids from sale page', ids)
    const tableData = ids.map(menuId => <SaleMenu key={menuId} menuId={menuId}/>)
    content = <div className="container">
    <div className="card">
        {tableData}
    </div>
    </div>
}

  return content
}

export default SalesPage