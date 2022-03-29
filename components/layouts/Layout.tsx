import { FC } from 'react'
import Head from 'next/head'

import { Navbar } from '../ui'

interface Props {
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Oscar Aguilar" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      {/* Navbar */}
      <Navbar />

      <main
        style={{
          padding: '0 20px',
        }}
      >
        {children}
      </main>
    </>
  )
}
