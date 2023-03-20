import {createEntityAdapter, createSelector} from '@reduxjs/toolkit'
import {apiSlice} from '../../app/api/apiSlice'

const menusAdapter = createEntityAdapter({})
const initialState = menusAdapter.getInitialState()
console.log("INITIAL STATE:", initialState)

export const menuApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        readMenus: builder.query({
            query: () => '/api/menus',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            transformResponse: resData => {
                const newData = resData.map(menu => {
                    menu.Id = menu.id
                    menu.FoodType = menu.foodType
                    menu.FoodCourse = menu.foodCourse
                    menu.Price = menu.price
                    return menu
                })
                return menusAdapter.setAll(initialState, newData)
            },
            providesTags: (result, error, arg) => {
                if(result?.ids) {
                    return [{type: 'Menu', id: 'LIST'},
                            ...result.ids.map(id => ({type:'Menu', id}))    
                ]
                
                } 
                else {
                    return [{type:'Menu', id: 'LIST'}]
                    }
            }            
        }),

        createMenu: builder.mutation({
            query: initialData => ({
                url: '/api/menus',
                method: 'POST',
                body: {
                    ...initialData
                }
            }),
            invalidatesTags: [{type:'Menu', id:'LIST'}]
        }),
        updateMenu: builder.mutation({
            query: ({id, foodName, foodType, foodCourse, price}) => ({
                url: `/api/menus/${id}`,
                method: 'PUT',
                body: {
                    id, foodName, foodType, foodCourse, price
                }
            }),
            invalidatesTags: (result, error, arg) => {
                return [{type:'Menu', id:arg.id}]
            }
        }),

        deleteMenu: builder.mutation({
            query: ({id}) => ({
                url: `/api/menus/${id}`,
                method: 'DELETE',
                body: {id}
            }),
            invalidatesTags: (result, error, arg) => {
                return [{type:'Menu', id: arg.id}]
            }
        }),
    
    })
})

export const {
    useReadMenusQuery,
    useCreateMenuMutation,
    useUpdateMenuMutation,
    useDeleteMenuMutation
} = menuApiSlice

export const selectMenuResult = menuApiSlice.endpoints.readMenus.select()

const selectMenuData = createSelector(selectMenuResult, selRes => selRes.data)

export const {
selectAll: selectAllMenus,
selectById: selectMenuById
} = menusAdapter.getSelectors(state => selectMenuData(state)?? initialState)
