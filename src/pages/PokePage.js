import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

import { pokemonStats } from '../data/pokemonData'
import { nextEvolutionFinder, prevEvolutionFinder, typeColorParser } from '../utils'
import EvolutionDisplay from '../component/EvolutionDisplay'
import StatRanker from '../component/StatRanker'
import EeveelutionDisplay from '../component/EeveelutionDisplay'
import PokePageHeader from '../component/PokePageHeader'
import StatComparer from '../component/StatComparer'
import PokeType from '../component/PokeType'


class PokePage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            nextPokemon: (nextEvolutionFinder(pokemonStats, this.props.match.params.name)),
            pokemon: (pokemonStats.find(element => element.name === this.props.match.params.name)),
            prevPokemon: (prevEvolutionFinder(pokemonStats, this.props.match.params.name))
        }
    }

    componentDidUpdate () {
        const { pokemon } = this.state
        if (pokemon.name !== this.props.match.params.name) {
            this.setState({ 
                nextPokemon: (nextEvolutionFinder(pokemonStats, this.props.match.params.name)),
                pokemon: (pokemonStats.find(element => element.name === this.props.match.params.name)),
                prevPokemon: (prevEvolutionFinder(pokemonStats, this.props.match.params.name)) })
        }
    }

    render () {
        const { nextPokemon, pokemon, prevPokemon } = this.state
        
        return (
            <div>
                {!pokemon
                    ? <p>Loading</p>
                    : <React.Fragment>
                    <Link to={`/`} style={{ marginLeft: '25px' }}>{`< Back to Table`}</Link>
                <div>
                    <Row style={{ display: 'flex',  marginTop: '10px' }}>
                        <Col className='pokeCol' style={{ borderColor: typeColorParser(pokemon.type), textAlign: 'center' }}>
                            <PokePageHeader pokemon={pokemon} />
                            <img src={pokemon.image} alt={pokemon.name} style={{ minHeight: '200px' }} />
                            <p>{`${pokemon.stage} Pokémon`}</p>
                            <PokeType fullType={pokemon.type} />
                            {pokemon.evolve && pokemon.evolve.includes('Eevee')
                                ? <EeveelutionDisplay pokemon={pokemon} />
                                : <React.Fragment>
                            <p style={{ textAlign: 'center' }}>Evolution Chart</p>
                            {pokemon.stage.includes('Stage 2') &&
                                <React.Fragment>
                                <Row style={{ display: 'inline-flex' }}>
                                    <EvolutionDisplay pokemon={prevEvolutionFinder(pokemonStats, prevPokemon.name)} />
                                    <EvolutionDisplay pokemon={prevPokemon} />
                                    <Row>
                                        <Col style={{ display: 'inline-grid', textAlign: 'center' }}>
                                            <img className='displayImg' src={pokemon.image} alt={pokemon.name} />
                                            <Link to={`/info/${pokemon.name}`} style={{ fontSize: '11px'}}>
                                                {pokemon.name}
                                            </Link>
                                        </Col>
                                    </Row>
                                </Row>
                                </React.Fragment>}
                            {pokemon.stage.includes('Stage 1') &&
                                <React.Fragment>
                                <Row style={{ display: 'inline-flex' }}>
                                    <EvolutionDisplay pokemon={prevPokemon} />
                                    {nextPokemon.stage.includes('2')
                                        ? <React.Fragment>
                                            <EvolutionDisplay pokemon={pokemon} />
                                            <Row>
                                                <Col style={{ display: 'inline-grid', textAlign: 'center' }}>
                                                    <img className='displayImg' src={nextPokemon.image} alt={nextPokemon.name} />
                                                    <Link to={`/info/${nextPokemon.name}`} style={{ fontSize: '11px'}}>
                                                        {nextPokemon.name}
                                                    </Link>
                                                </Col>
                                            </Row>
                                          </React.Fragment>
                                        : <Row>
                                                <Col style={{ display: 'inline-grid', textAlign: 'center' }}>
                                                    <img className='displayImg' src={pokemon.image} alt={pokemon.name} />
                                                    <Link to={`/info/${pokemon.name}`} style={{ fontSize: '11px'}}>
                                                        {pokemon.name}
                                                    </Link>
                                                </Col>
                                          </Row>}
                                </Row>
                                </React.Fragment>}
                            {(pokemon.stage.includes('Basic') && pokemon.evolve) &&
                                 <React.Fragment>
                                    <Row style={{ display: 'inline-flex' }}>
                                        <EvolutionDisplay pokemon={pokemon} />
                                            {nextPokemon.evolve
                                                ? <React.Fragment>
                                                <EvolutionDisplay pokemon={nextPokemon} />
                                                <Row>
                                                    <Col style={{ display: 'inline-grid', textAlign: 'center' }}>
                                                        <img className='displayImg' src={(nextEvolutionFinder(pokemonStats, nextPokemon.name)).image} alt={(nextEvolutionFinder(pokemonStats, nextPokemon.name)).name} />
                                                        <Link to={`/info/${(nextEvolutionFinder(pokemonStats, nextPokemon.name)).name}`} style={{ fontSize: '11px'}}>
                                                            {(nextEvolutionFinder(pokemonStats, nextPokemon.name)).name}
                                                        </Link>
                                                    </Col>
                                                </Row>
                                                </React.Fragment>
                                                : <Row>
                                                        <Col style={{ display: 'inline-grid', textAlign: 'center' }}>
                                                            <img className='displayImg' src={nextPokemon.image} alt={nextPokemon.name} />
                                                            <Link to={`/info/${nextPokemon.name}`} style={{ fontSize: '11px'}}>
                                                                {nextPokemon.name}
                                                            </Link>
                                                        </Col>
                                                 </Row>}
                                    </Row>
                                </React.Fragment>}
                                {(pokemon.stage.includes('Basic') && !pokemon.evolve) &&
                                    <React.Fragment>
                                 <img className='displayImg' src={pokemon.image} alt={pokemon.name} />
                                 <p style={{ fontSize: '11px' }}>(Does Not Evolve)</p>
                                 </React.Fragment>}
                                 </React.Fragment>}
                        </Col>        
                        <Col className='pokeCol' style={{ borderColor: typeColorParser(pokemon.type) }}>
                            <StatComparer pokemon={pokemon} />
                        </Col>
                        <Col className='pokeCol' style={{ borderColor: typeColorParser(pokemon.type) }}>
                            <StatRanker pokemon={pokemon} />
                        </Col>
                    </Row>
                </div>
                </React.Fragment>}
            </div>
        )
    }
}

export default PokePage