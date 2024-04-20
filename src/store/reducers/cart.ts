import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio } from '../../pages/Home'

export type Api = {
  anoVencimento: number
  cep: number
  cidade: string
  codigoCartao: number
  complemento: string
  endereco: string
  mesVencimento: number
  nome: string
  nomeCartao: string
  num: number
  numCartao: number
}

type CartState = {
  itemsCarrinho: Cardapio[]
  carrinhoEstado: boolean
  estado: 'carrinho' | 'endereco' | 'pagamento' | 'finalizado' | ''
  api: Api
  data: string
}

const initialState: CartState = {
  itemsCarrinho: [],
  carrinhoEstado: false,
  estado: '',
  api: {
    anoVencimento: 0,
    cep: 0,
    cidade: '',
    codigoCartao: 0,
    complemento: '',
    endereco: '',
    mesVencimento: 0,
    nome: '',
    nomeCartao: '',
    num: 0,
    numCartao: 0
  },
  data: ''
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
    zerarCarrinho: (state) => {
      state.itemsCarrinho = []
    },
    adicionarApi: (state, action: PayloadAction<object>) => {
      state.api = { ...state.api, ...action.payload }
    },
    adicionarData: (state, action: PayloadAction<string>) => {
      state.data = action.payload
    }
  }
})

export const {
  add,
  alteraEstadoCarrinho,
  remove,
  zerarCarrinho,
  adicionarApi,
  adicionarData
} = cartSlice.actions
export default cartSlice.reducer
