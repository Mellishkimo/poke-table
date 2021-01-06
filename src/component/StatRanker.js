import React from 'react'
import Select from 'react-select'
import { withRouter } from 'react-router-dom'
import { Row } from 'reactstrap'

import { pokemonStats } from '../data/pokemonData'
import { generateRankGroupOptions, statRanker, statTotaler } from '../utils'
import { RankSelect } from './styled'
import GradedStat from './GradedStat'

class StatRanker extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            rankGroup: { value: pokemonStats, label: 'Among All Pokémon' }
        }
    }

    handleRankGroupSelect = (event) => {
        this.setState({ rankGroup: { value: event.value, label: `Among ${event.label}` } })
    }

    componentDidUpdate () {
        const { pokemon } = this.props
        if (pokemon.name !== this.props.match.params.name) {
            this.setState({ rankGroup: { value: pokemonStats, label: 'Among All Pokémon' } })
        }
    }

    render () {
        const { rankGroup } = this.state
        const { pokemon } = this.props
        return (
            <React.Fragment>
                <Row style={{ display: 'flex' }}>
                    <h2>Stat Ranker</h2>
                    <Select
                            id='rankGroup'
                            options={generateRankGroupOptions(pokemon)}
                            onChange={this.handleRankGroupSelect}
                            styles={RankSelect}
                            value={rankGroup}
                            />
                </Row>                    
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <p className='keyBlock' style={{ backgroundColor: '#6c3' }}></p>
                    <p className='keyText'>Strong</p>
                    <p className='keyBlock' style={{ backgroundColor: '#fc3' }}></p>
                    <p className='keyText'>Average</p>
                    <p className='keyBlock' style={{ backgroundColor: '#f00' }}></p>
                    <p className='keyText'>Weak</p>
                </Row>
                <Row className='rankRow'>
                    <p className='statTitle'>HP:</p>
                    <GradedStat 
                        stat={pokemon.hp}
                        trueRank={statRanker(pokemonStats, pokemon.name, 'hp')} />
                    <p className='rank'>Rank:</p>
                    <p className='statInt'>{statRanker(rankGroup.value, pokemon.name, 'hp')}</p>
                    <p className='rankDetail'>{`out of ${rankGroup.value.length}`}</p>
                </Row>
                <Row className='rankRow'>
                    <p className='statTitle'>Attack:</p>
                    <GradedStat 
                        stat={pokemon.attack}
                        trueRank={statRanker(pokemonStats, pokemon.name, 'attack')} />
                    <p className='rank'>Rank:</p>
                    <p className='statInt'>{statRanker(rankGroup.value, pokemon.name, 'attack')}</p>
                    <p className='rankDetail'>{`out of ${rankGroup.value.length}`}</p>
                </Row>
                <Row className='rankRow'>
                    <p className='statTitle'>Defense:</p>
                    <GradedStat 
                        stat={pokemon.defense}
                        trueRank={statRanker(pokemonStats, pokemon.name, 'defense')} />
                    <p className='rank'>Rank:</p>
                    <p className='statInt'>{statRanker(rankGroup.value, pokemon.name, 'defense')}</p>
                    <p className='rankDetail'>{`out of ${rankGroup.value.length}`}</p>
                </Row>
                <Row className='rankRow'>
                    <p className='statTitle'>Speed:</p>
                    <GradedStat 
                        stat={pokemon.speed}
                        trueRank={statRanker(pokemonStats, pokemon.name, 'speed')} />
                    <p className='rank'>Rank:</p>
                    <p className='statInt'>{statRanker(rankGroup.value, pokemon.name, 'speed')}</p>
                    <p className='rankDetail'>{`out of ${rankGroup.value.length}`}</p>
                </Row>
                <Row className='rankRow'>
                    <p className='statTitle'>Special:</p>
                    <GradedStat 
                        stat={pokemon.special}
                        trueRank={statRanker(pokemonStats, pokemon.name, 'special')} />
                    <p className='rank'>Rank:</p>
                    <p className='statInt'>{statRanker(rankGroup.value, pokemon.name, 'special')}</p>
                    <p className='rankDetail'>{`out of ${rankGroup.value.length}`}</p>
                </Row>
                <Row className='rankRow'>
                    <p className='statTitle'>Total:</p>
                    <GradedStat 
                        stat={statTotaler(pokemon)}
                        trueRank={statRanker(pokemonStats, pokemon.name, 'total')} />
                    <p className='rank'>Rank:</p>
                    <p className='statInt'>{statRanker(rankGroup.value, pokemon.name, 'total')}</p>
                    <p className='rankDetail'>{`out of ${rankGroup.value.length}`}</p>
                </Row>
            </React.Fragment>
        )
    }
}

export default withRouter(StatRanker)