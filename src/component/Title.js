import React from 'react'
import { Col, Row } from 'reactstrap'

const Title = () => {
    return (
        <Row style={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}>
            <Col>
                <h1 style={{ color: '#ffcb05' }}>Pokemon</h1>
            </Col>
            <Col>
                <h1 style={{ color: '#cc0000' }}>Red</h1>
            </Col>
            <Col>
                <h1 style={{ color: '#3d7dca' }}>Blue</h1>
            </Col>
            <Col>
                <h1 style={{ color: '#ffcb05' }}>{`&`}</h1>
            </Col>
            <Col>
                <h1 style={{ color: '#ffde00' }}>Yellow</h1>
            </Col>
            <Col>
                <h1 style={{ color: '#ffcb05' }}>Base Stat Table</h1>
            </Col>
        </Row>
    )
}

export default Title