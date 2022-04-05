import type { NextPage, GetStaticProps } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react'

import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonCard } from '../components/pokemon'

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start" css={{ mt: 12, mb: 12 }}>
        {pokemons.map((poke) => (
          <PokemonCard key={poke.id} pokemon={poke} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
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
