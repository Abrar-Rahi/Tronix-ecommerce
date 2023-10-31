import { createSlice } from '@reduxjs/toolkit'

export const cartslice = createSlice({
  name: 'cart',
  initialState: {
    cartItem: [],
  },
  reducers: {
    AddToCart: (state,action) => {
      if(state.cartItem.length == 0){
        state.cartItem.push(action.payload)
      }else{
        let arr =[0]
        state.cartItem.map(item=>{
            if(item.title == action.payload.title){
                item.quantity++
                arr.push(item.title)
            }
        })
        if(arr.indexOf(action.payload.title) == -1){
            state.cartItem.push(action.payload)
        }
      }
      
    },
    increase: (state,action) => {
        state.cartItem.map(item=>{
            if(item.title == action.payload.title){
                item.quantity++
               
            }
        })
      
    },
    decrease: (state,action) => {
        state.cartItem.map(item=>{
            if(item.title == action.payload.title){
                if(item.quantity > 1){
                    item.quantity--
                }
               
            }
        })
      
    },
    remove: (state,action) => {
        state.cartItem.map((item,index)=>{
            if(item.title == action.payload.title){
                state.cartItem.splice(index,1)
                
               
            }
        })
      
    },
  },
})

// Action creators are generated for each case reducer function
export const { AddToCart,increase,decrease,remove } = cartslice.actions

export default cartslice.reducer