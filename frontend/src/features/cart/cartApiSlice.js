import {createEntityAdapter, createSelector} from '@reduxjs/toolkit'
import {apiSlice} from '../../app/api/apiSlice'

const cartsAdapter = createEntityAdapter({})
const initialState = cartsAdapter.getInitialState()
console.log("INITIAL STATE:", initialState)

export const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        readcarts: builder.query({
            query: () => '/api/carts',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: resData => {
                const newData = resData.map(cart => {
                    cart.Id = cart.id
                    cart.FoodName = cart.foodName
                    cart.Quantity = cart.quantity
                    cart.Price = cart.price
                    return cart
                })
                return cartsAdapter.setAll(initialState, newData)
            },
            providesTags: (result, error, arg) => {
                if(result?.ids) {
                    return [{type: 'Cart', id: 'LIST'},
                            ...result.ids.map(id => ({type:'Cart', id}))    
                ]
                
                } 
                else { return [{type:'Cart', id: 'LIST'}]
                    return [{type:'Cart', id: 'LIST'}]
                    }
            }            
        }),

     
        createCart: builder.mutation({
            query: initialData => ({
                url: '/api/carts',
                method: 'POST',
                body: {
                    ...initialData
                }
            }),
            invalidatesTags: [{type:'Cart', id:'LIST'}]
        }),
        updateCart: builder.mutation({
            query: ({id, foodName, foodType, foodCourse, price}) => ({
                url: `/api/carts/${id}`,
                method: 'PUT',
                body: {
                    id, foodName, foodType, foodCourse, price
                }
            }),
            invalidatesTags: (result, error, arg) => {
                return [{type:'Cart', id:arg.id}]
            }
        }),

        deleteCart: builder.mutation({
            query: ({id}) => ({
                url: `/api/carts/${id}`,
                method: 'DELETE',
                body: {id}
            }),
            invalidatesTags: (result, error, arg) => {
                return [{type:'Cart', id: arg.id}]
            }
        }),
        deleteAllCart: builder.mutation({
            query: () => ({
                url: `/api/carts/`,
                method: 'DELETE',
                body: {}
            }),
            invalidatesTags: [{type:'Cart', id:'LIST'}]
                   
        }), 
  
    })
})

export const {
    useDeleteAllCartMutation,
    useReadcartsQuery,
    useCreateCartMutation,
    useUpdateCartMutation,
    useDeleteCartMutation,
} = cartApiSlice

export const selectCartResult = cartApiSlice.endpoints.readcarts.select()

const selectCartData = createSelector(selectCartResult, selRes => selRes.data)

export const {
selectAll: selectAllCarts,
selectById: selectCartById
} = cartsAdapter.getSelectors(state => selectCartData(state)?? initialState)
     