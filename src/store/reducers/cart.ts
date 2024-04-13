import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  itemsCarrinho: Cardapio[]
  carrinhoEstado: boolean
}

const initialState: CartState = {
  itemsCarrinho: [],
  carrinhoEstado: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      state.itemsCarrinho.push(action.payload)
    },
    alteraEstadoCarrinho: (state, action: PayloadAction<boolean>) => {
      state.carrinhoEstado = action.payload
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itemsCarrinho = state.itemsCarrinho.filter(
        (i) => i.id != action.payload
      )
    }
  }
})

export const { add, alteraEstadoCarrinho, remove } = cartSlice.actions
export default cartSlice.reducer
