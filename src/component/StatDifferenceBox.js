import React from 'react'

function StatDifferenceBox (props) {
    const { stat, opposingStat } = props

    let color = '#fc3'
    let differenceMark = ''
    let difference = stat - opposingStat

    switch (true) {
        case difference > 0:
            color = '#6c3'
            differenceMark = '+'
            break
        case difference < 0:
            color = '#f00'
            break
    }

    return (
        <p className='comparisonDiff' style={{ color: color }}>{differenceMark}{difference}</p>
    )
}

export default StatDifferenceBox