import React from 'react'
import { Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

import Spr_1b_133 from '../images/sprites/Spr_1b_133.png'
import Spr_1b_134 from '../images/sprites/Spr_1b_134.png'
import Spr_1b_135 from '../images/sprites/Spr_1b_135.png'
import Spr_1b_136 from '../images/sprites/Spr_1b_136.png'
import RightArrow from '../images/RightArrow.svg'

class EeveelutionDisplay extends React.Component {
    render () {
        const { pokemon } = this.props
        return (
            <React.Fragment>
                <p>Evolution Chart</p>
                {(pokemon.name === 'Eevee' || pokemon.name === 'Vaporeon') && 
                <React.Fragment>
                    <Row style={{ display: 'inline-flex' }}>
                            <Col style={{ display: 'inline-grid', textAlign: 'center' }}>
                                <img className='evolutionSprite' src={Spr_1b_133} alt={'Eevee'} />
                                <Link to={`/info/Eevee`} style={{ fontSize: '11px'}}>
                                    Eevee
                                </Link>
                            </Col>
                            <Col style={{ minWidth: '92.17px', textAlign: 'center' }}>
                                <p className='evolutionDetail'>{`(Water Stone)`}</p>
                                <img src={RightArrow} alt={'Right Arrow'} />
                            </Col>
                            <Col style={{ display: 'inline-grid', textAlign: 'center' }}>
                                <img className='evolutionSprite' src={Spr_1b_134} alt={'Vaporeon'} />
                                <Link to={`/info/Vaporeon`} style={{ fontSize: '11px'}}>
                                    Vaporeon
                                </Link>
                            </Col>
                    </Row>
                </React.Fragment>}
                {(pokemon.name === 'Eevee' || pokemon.name === 'Jolteon') && 
                <React.Fragment>
                    <Row style={{ display: 'flex', justifyContent: 'center' }}>
                            <Col style={{ display: 'inline-grid', textAlign: 'center' }}>
                                <img className='evolutionSprite' src={Spr_1b_133} alt={'Eevee'} />
                                <Link to={`/info/Eevee`} style={{ fontSize: '11px'}}>
                                    Eevee
                                </Link>
                            </Col>
                            <Col style={{ minWidth: '92.17px', textAlign: 'center' }}>
                                <p className='evolutionDetail'>{`(Thunder Stone)`}</p>
                                <img src={RightArrow} alt={'Right Arrow'} />
                            </Col>
                            <Col style={{ display: 'inline-grid', textAlign: 'center' }}>
                                <img className='evolutionSprite' src={Spr_1b_135} alt={'Jolteon'} />
                                <Link to={`/info/Jolteon`} style={{ fontSize: '11px'}}>
                                    Jolteon
                                </Link>
                            </Col>
                    </Row>
                </React.Fragment>}
                {(pokemon.name === 'Eevee' || pokemon.name === 'Flareon') && 
                <React.Fragment>
                    <Row style={{ display: 'inline-flex' }}>
                            <Col style={{ display: 'inline-grid', textAlign: 'center' }}>
                                <img className='evolutionSprite' src={Spr_1b_133} alt={'Eevee'} />
                                <Link to={`/info/Eevee`} style={{ fontSize: '11px'}}>
                                    Eevee
                                </Link>
                            </Col>
                            <Col style={{ minWidth: '92.17px', textAlign: 'center' }}>
                                <p className='evolutionDetail'>{`(Fire Stone)`}</p>
                                <img src={RightArrow} alt={'Right Arrow'} />
                            </Col>
                            <Col style={{ display: 'inline-grid', textAlign: 'center' }}>
                                <img className='evolutionSprite' src={Spr_1b_136} alt={'Flareon'} />
                                <Link to={`/info/Flareon`} style={{ fontSize: '11px'}}>
                                    Flareon
                                </Link>
                            </Col>
                    </Row>
                </React.Fragment>}
            </React.Fragment>
        )
    }
}

export default EeveelutionDisplay