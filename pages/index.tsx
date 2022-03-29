import type { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'
import { pokeApi } from '../api'

import { Layout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons[0])

  return (
    <Layout title="Listado de Pokemons">
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            #{pokemon.id} - {pokemon.name}
            {/* <Image src={pokemon.img} alt={pokemon.name} /> */}
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  console.log(data)
  const pokemons: SmallPokemon[] = data.results.map((el, index) => ({
    ...el,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }))

  return {
    props: {
      pokemons,
    },
  }
}

export default HomePage
