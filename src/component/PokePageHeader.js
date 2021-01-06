import React from 'react'
import { typeColorParser } from '../utils'

function PokePageHeader (props) {
  const { pokemon } = props

  return (
    <h1 style={{ color: typeColorParser(pokemon.type), margin: '0px', marginTop: '18px' }}>{`${pokemon.name} #${pokemon.entry}`}</h1>
  )
}

export default PokePageHeader