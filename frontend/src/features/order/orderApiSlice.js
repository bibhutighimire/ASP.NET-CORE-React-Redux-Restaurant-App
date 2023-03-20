import {createEntityAdapter, createSelector} from '@reduxjs/toolkit'
import {apiSlice} from '../../app/api/apiSlice'

const ordersAdapter = createEntityAdapter({})
const initialState = ordersAdapter.getInitialState()
console.log("INITIAL STATE:", initialState)

export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        readorders: builder.query({
            query: () => '/api/orders',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: resData => {
                const newData = resData.map(order => {
                    order.Id = order.id
                   /*  order.FoodType = order.foodType
                    order.FoodCourse = order.foodCourse */
                    return order
                })
                return ordersAdapter.setAll(initialState, newData)
            },
            providesTags: ['Order']
        }),
/*       deleteAllCart: builder.mutation({
            query: () => ({
                url: `/api/carts/`,
                method: 'DELETE',
                body: {}
            }),
            invalidatesTags: [{type:'Order', id:'LIST'}]
            
        })  */

        

    })
})

export const {
 
    useReadordersQuery,
   
} = orderApiSlice

export const selectOrderResult = orderApiSlice.endpoints.readorders.select()

const selectOrderData = createSelector(selectOrderResult, selRes => selRes.data)

export const {
selectAll: selectAllOrders,
selectById: selectOrderById
} = ordersAdapter.getSelectors(state => selectOrderData(state)?? initialState)
     