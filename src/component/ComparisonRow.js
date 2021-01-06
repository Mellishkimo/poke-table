import React from 'react'
import { Col, Row } from 'reactstrap'
import { borderColorParser, statColorParser } from '../utils'

import StatDifferenceBox from './StatDifferenceBox'

class ComparisonRow extends React.Component {
    render () {
        const { statName, stat, opposingStat } = this.props

        return (
            <Row style={{ display: 'flex', justifyContent: 'center', marginTop: '9px' }}>
                <p className='statInt' style={{  borderColor: borderColorParser(stat, opposingStat) }}>{stat}</p>
                <Col style={{ textAlign: 'center' }}>
                <p className='comparisonTitle'>{statName}</p>
                <StatDifferenceBox stat={stat} opposingStat={opposingStat} />
                </Col>
                <p className='statInt' style={{  borderColor: borderColorParser(opposingStat, stat) }}>{opposingStat}</p>
            </Row>
        )
    }
}

export default ComparisonRow