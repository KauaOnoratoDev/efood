import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Card from '../../components/Cards'

import { useGetRestaurantesQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantesQuery()

  return (
    <>
      <Header />
      <Card
        isLoading={isLoading}
        restaurantes={restaurantes}
        titleButton="Saiba mais"
      />
      <Footer />
    </>
  )
}

export default Home
