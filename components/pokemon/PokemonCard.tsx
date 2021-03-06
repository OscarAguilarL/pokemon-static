import React, { FC } from 'react'
import { Grid, Card, Row, Text } from '@nextui-org/react'

import { SmallPokemon } from '../../interfaces/'
import { useRouter } from 'next/router'

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { name, img, id } = pokemon
  const router = useRouter()

  const onPokemonClick = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card hoverable clickable onClick={onPokemonClick}>
        <Card.Body css={{ p: 8 }}>
          <Card.Image src={img!} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
