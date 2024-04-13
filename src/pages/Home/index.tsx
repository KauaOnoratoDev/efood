import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Card from '../../components/Cards'
import { useGetRestaurantesQuery } from '../../services/api'

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  return (
    <>
      <Header />
      <Card restaurantes={restaurantes} titleButton="Saiba mais" />
      <Footer />
    </>
  )
}

export default Home
