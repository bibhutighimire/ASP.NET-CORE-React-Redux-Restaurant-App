import React from 'react'
import { menuApiSlice } from '../menu/menuApiSlice'
import { orderApiSlice } from '../order/orderApiSlice'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { store } from '../../app/store'

const Prefetch = () => {
  useEffect(() => {
    console.log('pre fetching .....')
    const menu = store.dispatch(menuApiSlice.endpoints.readMenus.initiate())
    const order = store.dispatch(orderApiSlice.endpoints.readorders.initiate())
    return () => {
        console.log('fetching canceled')
        menu.unsubscribe()
        order.unsubscribe()
    }
}, [])

  return <Outlet />
}

export default Prefetch