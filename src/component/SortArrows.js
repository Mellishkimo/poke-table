import React from 'react'

import SortUpArrows from '../images/SortUpArrows.svg'
import SortDownArrows from '../images/SortDownArrows.svg'
import UpAndDownArrows from '../images/UpAndDownArrows.svg'

function SortArrows (props) {
  const { category, currentSort } = props

  let sortIcon = UpAndDownArrows

  if (currentSort.indexOf(category) !== -1) {
    switch (true) {
      case /Down/.test(currentSort):
        sortIcon = SortDownArrows
        break
      case /Up/.test(currentSort):
        sortIcon = SortUpArrows
        break
      default:
        sortIcon = UpAndDownArrows
        break
    }
  }

  return (
    <img src={sortIcon} alt={'Sort Icon'} style={{ float: 'right', marginTop: '-1px', marginLeft: '-2px', position: 'absolute' }} />
  )
}

export default SortArrows
