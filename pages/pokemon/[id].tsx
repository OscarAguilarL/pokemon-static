import { useRouter } from 'next/router'
import React from 'react'
import { Layout } from '../../components/layouts'
import { SmallPokemon } from '../../interfaces'

interface Props {
  pokemon: SmallPokemon
}

const PokemonPage = () => {
  const { query } = useRouter()

  return (
    <Layout title="Algún pokémon">
      <h1>Hola mundo</h1>
    </Layout>
  )
}

export default PokemonPage
