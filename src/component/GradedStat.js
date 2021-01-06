import React from 'react'

function GradedStat (props) {
  const { stat, trueRank } = props

  let statColor = 'black'


    switch (true) {
      case trueRank < 50:
        statColor = '#6c3'
        break
      case trueRank < 100:
        statColor = '#fc3'
        break
      default:
        statColor = '#f00'
        break
    }

  return (
    <p className='statInt' style={{ borderColor: statColor }}>{stat}</p>
  )
}

export default GradedStat