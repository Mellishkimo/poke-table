import React from 'react'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import RightArrow from '../images/RightArrow.svg'

class EvolutionDisplay extends React.Component {
    render () {
        const { pokemon } = this.props
        return (
            <React.Fragment>
                <Row>
                    <Col className='spriteLink'>
                        <img className='displayImg' src={pokemon.image} alt={pokemon.name} />
                        <Link to={`/info/${pokemon.name}`} className='pokeLink'>
                            {pokemon.name}
                        </Link>
                    </Col>
                </Row>
                <Row style={{ display: 'flex' }}>
                    <Col style={{ minWidth: '92.17px', textAlign: 'center' }}>
                        <p className='evolutionDetail'>{`(${pokemon.evolve})`}</p>
                        <img src={RightArrow} alt={'Right Arrow'} />
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default EvolutionDisplay