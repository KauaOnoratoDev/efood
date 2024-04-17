import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

type CartState = {
  itemsCarrinho: Cardapio[]
  carrinhoEstado: boolean
  estado: 'carrinho' | 'endereco' | 'pagamento' | 'finalizado' | ''
  api: object
}

const initialState: CartState = {
  itemsCarrinho: [
    {
      descricao: '',
      foto: '',
      id: 1,
      nome: 'Prato teste',
      porcao: '',
      preco: 65.5
    }
  ],
  carrinhoEstado: false,
  estado: '',
  api: {}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      state.itemsCarrinho.push(action.payload)
    },
    alteraEstadoCarrinho: (
      state,
      action: PayloadAction<
        'carrinho' | 'endereco' | 'pagamento' | 'finalizado' | ''
      >
    ) => {
      state.estado = action.payload
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itemsCarrinho = state.itemsCarrinho.filter(
        (i) => i.id != action.payload
      )
    },
    zerarCarrinho: (state, action: PayloadAction) => {
      state.itemsCarrinho = []
    },
    adicionarApi: (state, action: PayloadAction<object>) => {
      state.api = action.payload
    }
  }
})

export const {
  add,
  alteraEstadoCarrinho,
  remove,
  zerarCarrinho,
  adicionarApi
} = cartSlice.actions
export default cartSlice.reducer
