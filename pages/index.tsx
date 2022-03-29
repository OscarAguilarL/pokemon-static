import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'

import { Layout } from '../components/layouts'

const HomePage: NextPage = (props) => {
  console.log(props)

  return (
    <Layout title="Listado de Pokemons">
      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get('/pokemon?limit=151')
  console.log(data)

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default HomePage
