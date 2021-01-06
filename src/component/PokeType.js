import React from 'react'
import { typeColorParser } from '../utils'

function PokeType (props) {
    const { fullType } = props

    let primaryColor = ''
    let secondaryColor = ''
    let primaryType = ''
    let secondaryType = ''

    if (fullType.includes('/')) {
        var splitPoint = fullType.indexOf('/')
        primaryType = fullType.substr(0, splitPoint)
        secondaryType = fullType.substr((splitPoint + 1))

        primaryColor = typeColorParser(primaryType)
        secondaryColor = typeColorParser(secondaryType)

        return (
            <div style={{ alignItems: 'center', display: 'flex', height: '20px', justifyContent: 'center' }}>
                <p style={{ marginRight: '5px' }}>Type:</p>
                <p style={{ color: primaryColor }}>{primaryType}</p>
                <p>/</p>
                <p style={{ color: secondaryColor }}>{secondaryType}</p>
            </div>
        )
    }
    else {
        return (
            <div style={{ alignItems: 'center', display: 'flex', height: '20px', justifyContent: 'center' }}>
                <p style={{ marginRight: '5px' }}>Type:</p>
                <p style={{ color: typeColorParser(fullType) }}>{fullType}</p>
            </div>
        )
    }
}

export default PokeType