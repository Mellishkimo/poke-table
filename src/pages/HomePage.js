import React from 'react'
import PokeTable from '../component/PokeTable'
import Title from '../component/Title'

class HomePage extends React.Component {
    render () {
        return (
            <div className='container'>
                <Title />
                <PokeTable />
            </div>
        )
    }
}

export default HomePage
