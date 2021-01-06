import React from 'react'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select'

import ComparisonRow from './ComparisonRow'
import { pokemonStats } from '../data/pokemonData'
import { ComparisonSelect } from './styled'
import { generateComparisonOptions, statTotaler } from '../utils'

class StatComparer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            opposingPokemon: ''
        }
    }

    handleOpposingPokemonSelect = (event) => {
        this.setState({ opposingPokemon: event })
    }

    componentDidMount() {
        const { opposingPokemon } = this.state
        const { pokemon } = this.props

        if (!opposingPokemon.value) {
            if (pokemon.name === 'Mew') {
                let oppPoke = pokemonStats.find(element => element.name === 'Bulbasaur')

                this.setState({ opposingPokemon: { label: oppPoke.name, value: oppPoke } })
            }
            else {
                let oppPoke = pokemonStats.find(element => element.entry == (parseInt(pokemon.entry) + 1))

                this.setState({ opposingPokemon: { label: oppPoke.name, value: oppPoke } })
            }
        }
    }

    componentDidUpdate() {
        const { opposingPokemon } = this.state
        const { pokemon } = this.props

        if ((opposingPokemon.value) && (opposingPokemon.label === pokemon.name)) {
            if (pokemon.name === 'Mew') {
                let oppPoke = pokemonStats.find(element => element.name === 'Bulbasaur')

                this.setState({ opposingPokemon: { label: oppPoke.name, value: oppPoke } })
            }
            else {
                let oppPoke = pokemonStats.find(element => element.entry == (parseInt(pokemon.entry) + 1))

                this.setState({ opposingPokemon: { label: oppPoke.name, value: oppPoke } })
            }
        }
    }

    render () {
        const { pokemon } = this.props
        const { opposingPokemon } = this.state

        return (
            <React.Fragment>
            {!opposingPokemon.value
                ? <p>Loading...</p>
                : <React.Fragment>
                    <Row style={{ display: 'flex' }}>
                        <h2 style={{ textAlign: 'center' }}>Compare Stats With</h2>
                        <Select
                            options={generateComparisonOptions(pokemon)}
                            onChange={this.handleOpposingPokemonSelect}
                            styles={ComparisonSelect}
                            value={opposingPokemon}
                        />
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'center', marginBottom: '-10px' }}>
                        <p className='keyBlock' style={{ backgroundColor: '#6c3' }}></p>
                        <p className='keyText'>Stronger</p>
                        <p className='keyBlock' style={{ backgroundColor: '#fc3' }}></p>
                        <p className='keyText'>Equal</p>
                        <p className='keyBlock' style={{ backgroundColor: '#f00' }}></p>
                        <p className='keyText'>Weaker</p>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <Col className='spriteLink'>
                        <img className='displayImg' src={pokemon.image} alt={pokemon.name} />
                        <Link to={`/info/${pokemon.name}`} className='pokeLink'>
                            {pokemon.name}
                        </Link>
                    </Col>
                    <p className='versusHeader'>VS</p>
                    <Col className='spriteLink'>
                        <img className='displayImg' src={opposingPokemon.value.image} alt={opposingPokemon.value.name} />
                        <Link to={`/info/${opposingPokemon.value.name}`} className='pokeLink'>
                            {opposingPokemon.value.name}
                        </Link>
                    </Col>
                    </Row>
                    <ComparisonRow
                        statName='HP'
                        stat={pokemon.hp}
                        opposingStat={opposingPokemon.value.hp}
                    />
                    <ComparisonRow
                        statName='Attack'
                        stat={pokemon.attack}
                        opposingStat={opposingPokemon.value.attack}
                    />
                    <ComparisonRow
                        statName='Defense'
                        stat={pokemon.defense}
                        opposingStat={opposingPokemon.value.defense}
                    />
                    <ComparisonRow
                        statName='Speed'
                        stat={pokemon.speed}
                        opposingStat={opposingPokemon.value.speed}
                    />
                    <ComparisonRow
                        statName='Special'
                        stat={pokemon.special}
                        opposingStat={opposingPokemon.value.special}
                    />
                    <ComparisonRow
                        statName='Total'
                        stat={statTotaler(pokemon)}
                        opposingStat={statTotaler(opposingPokemon.value)}
                    />
            </React.Fragment>}
            </React.Fragment>
        )
    }
}

export default StatComparer