import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:'https://localhost:7282'}),
    tagTypes:['Menu', 'Order', 'Cart'],
    endpoints: builder => ({})
})