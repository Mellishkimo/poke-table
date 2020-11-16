import React, { Component } from 'react'
import { Col, Row, Table } from 'reactstrap'

import { pokemonStats } from '../data/pokemonData'
import Spr_1b_001 from '../images/Spr_1b_001.png'
import { statAverager, statTotaler, tableSorter } from '../utils'
import SortArrows from './SortArrows'
import { BugButton, 
         DragonButton, 
         ElectricButton, 
         FightingButton, 
         FireButton,
         FlyingButton,
         GhostButton,
         GrassButton,
         GroundButton,
         IceButton,
         NormalButton,
         PoisonButton,
         PsychicButton,
         RockButton,
         WaterButton,
         BasicButton,
         Stage1Button,
         Stage2Button
       } from './styled'

class PokeTable extends Component {
    constructor (props) {
        super(props)
        this.state = {
            currentSort: 'entryUp',
            bugFilterActive: false,
            dragonFilterActive: false,
            electricFilterActive: false,
            fightingFilterActive: false,
            fireFilterActive: false,
            flyingFilterActive: false,
            ghostFilterActive: false,
            grassFilterActive: false,
            groundFilterActive: false,
            iceFilterActive: false,
            normalFilterActive: false,
            poisonFilterActive: false,
            psychicFilterActive: false,
            rockFilterActive: false,
            waterFilterActive: false,
            basicFilterActive: false,
            stage1FilterActive: false,
            stage2FilterActive: false
        }
    }

    filterBug = () => {
        this.setState({
            bugFilterActive: !this.state.bugFilterActive,
        },
        this.filterTableRows)
    }

    filterDragon = () => {
        this.setState({
            dragonFilterActive: !this.state.dragonFilterActive,
        },
        this.filterTableRows)
    }

    filterElectric = () => {
        this.setState({
            electricFilterActive: !this.state.electricFilterActive,
        },
        this.filterTableRows)
    }

    filterFighting = () => {
        this.setState({
            fightingFilterActive: !this.state.fightingFilterActive,
        },
        this.filterTableRows)
    }

    filterFire = () => {
        this.setState({
            fireFilterActive: !this.state.fireFilterActive,
        },
        this.filterTableRows)
    }

    filterFlying = () => {
        this.setState({
            flyingFilterActive: !this.state.flyingFilterActive,
        },
        this.filterTableRows)
    }

    filterGhost = () => {
        this.setState({
            ghostFilterActive: !this.state.ghostFilterActive,
        },
        this.filterTableRows)
    }

    filterGrass = () => {
        this.setState({
            grassFilterActive: !this.state.grassFilterActive,
        },
        this.filterTableRows)
    }

    filterGround = () => {
        this.setState({
            groundFilterActive: !this.state.groundFilterActive,
        },
        this.filterTableRows)
    }

    filterIce = () => {
        this.setState({
            iceFilterActive: !this.state.iceFilterActive,
        },
        this.filterTableRows)
    }

    filterNormal = () => {
        this.setState({
            normalFilterActive: !this.state.normalFilterActive,
        },
        this.filterTableRows)
    }

    filterPoison = () => {
        this.setState({
            poisonFilterActive: !this.state.poisonFilterActive,
        },
        this.filterTableRows)
    }

    filterPsychic = () => {
        this.setState({
            psychicFilterActive: !this.state.psychicFilterActive,
        },
        this.filterTableRows)
    }

    filterRock = () => {
        this.setState({
            rockFilterActive: !this.state.rockFilterActive,
        },
        this.filterTableRows)
    }

    filterWater = () => {
        this.setState({
            waterFilterActive: !this.state.waterFilterActive,
        },
        this.filterTableRows)
    }

    filterBasic = () => {
        this.setState({
            basicFilterActive: !this.state.basicFilterActive,
        },
        this.filterTableRows)
    }

    filterStage1 = () => {
        this.setState({
            stage1FilterActive: !this.state.stage1FilterActive,
        },
        this.filterTableRows)
    }

    filterStage2 = () => {
        this.setState({
            stage2FilterActive: !this.state.stage2FilterActive,
        },
        this.filterTableRows)
    }

    filterTableRows = () => {
        const { bugFilterActive, dragonFilterActive, electricFilterActive, fightingFilterActive, fireFilterActive,
                flyingFilterActive, ghostFilterActive, grassFilterActive, groundFilterActive, iceFilterActive,
                normalFilterActive, poisonFilterActive, psychicFilterActive, rockFilterActive, waterFilterActive,
                basicFilterActive, stage1FilterActive, stage2FilterActive } = this.state
        const input = document.getElementById('nameFilter')
        const filter = input.value.toUpperCase()
        const table = document.getElementById('pokeTable')
        const tr = table.getElementsByTagName('tr')

        for (let i = 0; i < tr.length; i++) {
            const row = tr[i]
            const td = row.getElementsByTagName('td')[2]
            
            row.style.display = ''

            if (td) {
                const txtValue = td.textContent || td.innerText

                if ((txtValue.toUpperCase().indexOf(filter) === -1) ||
                    (basicFilterActive && !row.innerText.includes('Basic')) ||
                    (stage1FilterActive && !row.innerText.includes('Stage 1')) ||
                    (stage2FilterActive && !row.innerText.includes('Stage 2')) ||
                    (bugFilterActive && !row.innerText.includes('Bug')) ||
                    (dragonFilterActive && !row.innerText.includes('Dragon')) ||
                    (electricFilterActive && !row.innerText.includes('Electric')) ||
                    (fightingFilterActive && !row.innerText.includes('Fighting')) ||
                    (fireFilterActive && !row.innerText.includes('Fire')) ||
                    (flyingFilterActive && !row.innerText.includes('Flying')) ||
                    (ghostFilterActive && !row.innerText.includes('Ghost')) ||
                    (grassFilterActive && !row.innerText.includes('Grass')) ||
                    (groundFilterActive && !row.innerText.includes('Ground')) ||
                    (iceFilterActive && !row.innerText.includes('Ice')) ||
                    (normalFilterActive && !row.innerText.includes('Normal')) ||
                    (poisonFilterActive && !row.innerText.includes('Poison')) ||
                    (psychicFilterActive && !row.innerText.includes('Psychic')) ||
                    (rockFilterActive && !row.innerText.includes('Rock')) ||
                    (waterFilterActive && !row.innerText.includes('Water'))) {
                    row.style.display = 'none'
                } else {
                    row.style.display = ''
                }
            }
        }
    }

    sortAverage = () => {
        const { currentSort } = this.state
        let nextSort
  
        if (currentSort === 'avgDown') nextSort = 'avgUp'
        else nextSort = 'avgDown'
  
        this.setState({ currentSort: nextSort },
        this.filterTableRows)
    }

    sortName = () => {
        const { currentSort } = this.state
        let nextSort
  
        if (currentSort === 'nameDown') nextSort = 'nameUp'
        else nextSort = 'nameDown'
  
        this.setState({ currentSort: nextSort },
        this.filterTableRows)
    }

    sortEntry = () => {
        const { currentSort } = this.state
        let nextSort
  
        if (currentSort === 'entryUp') nextSort = 'entryDown'
        else nextSort = 'entryUp'
  
        this.setState({ currentSort: nextSort },
        this.filterTableRows)
    }

    sortHp = () => {
        const { currentSort } = this.state
        let nextSort
  
        if (currentSort === 'hpDown') nextSort = 'hpUp'
        else nextSort = 'hpDown'
  
        this.setState({ currentSort: nextSort },
        this.filterTableRows)
    }

    sortAttack = () => {
        const { currentSort } = this.state
        let nextSort
  
        if (currentSort === 'attackDown') nextSort = 'attackUp'
        else nextSort = 'attackDown'
  
        this.setState({ currentSort: nextSort },
        this.filterTableRows)
    }

    sortDefense = () => {
        const { currentSort } = this.state
        let nextSort
  
        if (currentSort === 'defenseDown') nextSort = 'defenseUp'
        else nextSort = 'defenseDown'
  
        this.setState({ currentSort: nextSort },
        this.filterTableRows)
    }

    sortSpeed = () => {
        const { currentSort } = this.state
        let nextSort
  
        if (currentSort === 'speedDown') nextSort = 'speedUp'
        else nextSort = 'speedDown'
  
        this.setState({ currentSort: nextSort },
        this.filterTableRows)
    }

    sortSpecial = () => {
        const { currentSort } = this.state
        let nextSort
  
        if (currentSort === 'specialDown') nextSort = 'specialUp'
        else nextSort = 'specialDown'
  
        this.setState({ currentSort: nextSort },
        this.filterTableRows)
    }

    sortTotal = () => {
        const { currentSort } = this.state
        let nextSort
  
        if (currentSort === 'totalDown') nextSort = 'totalUp'
        else nextSort = 'totalDown'
  
        this.setState({ currentSort: nextSort },
        this.filterTableRows)
    }

    render () {
        const { bugFilterActive, currentSort, dragonFilterActive, electricFilterActive, fightingFilterActive, fireFilterActive,
                flyingFilterActive, ghostFilterActive, grassFilterActive, groundFilterActive, iceFilterActive,
                normalFilterActive, poisonFilterActive, psychicFilterActive, rockFilterActive, waterFilterActive,
                basicFilterActive, stage1FilterActive, stage2FilterActive } = this.state

        return (
            <React.Fragment>
            <Row className='filterRow'>
                <Col>
                    <p>Name Filter:</p>
                </Col>
                <Col>
                    <input id='nameFilter' className='nameFilter' onKeyUp={this.filterTableRows} placeholder='Enter a Pokémon name...' />
                </Col>
                <Col>
                    <p>Evolution Filters:</p>
                </Col>
                <Col>
                    <BasicButton
                        onClick={this.filterBasic}
                        selected={basicFilterActive}>
                            Basic
                    </BasicButton>
                    <Stage1Button
                        onClick={this.filterStage1}
                        selected={stage1FilterActive}>
                            Stage 1
                    </Stage1Button>
                    <Stage2Button
                        onClick={this.filterStage2}
                        selected={stage2FilterActive}>
                            Stage 2
                    </Stage2Button>
                </Col>
            </Row>
            <Row className='filterRow'>
                <Col>
                    <p>Type Filters:</p>
                </Col>
                <Col>
                    <BugButton
                        onClick={this.filterBug}
                        selected={bugFilterActive}>
                            Bug
                    </BugButton>
                    <DragonButton
                        onClick={this.filterDragon}
                        selected={dragonFilterActive}>
                            Dragon
                    </DragonButton>
                    <ElectricButton
                        onClick={this.filterElectric}
                        selected={electricFilterActive}>
                            Electric
                    </ElectricButton>
                    <FightingButton
                        onClick={this.filterFighting}
                        selected={fightingFilterActive}>
                            Fighting
                    </FightingButton>
                    <FireButton
                        onClick={this.filterFire}
                        selected={fireFilterActive}>
                            Fire
                    </FireButton>
                    <FlyingButton
                        onClick={this.filterFlying}
                        selected={flyingFilterActive}>
                            Flying
                    </FlyingButton>
                    <GhostButton
                        onClick={this.filterGhost}
                        selected={ghostFilterActive}>
                            Ghost
                    </GhostButton>
                    <GrassButton
                        onClick={this.filterGrass}
                        selected={grassFilterActive}>
                            Grass
                    </GrassButton>
                    <GroundButton
                        onClick={this.filterGround}
                        selected={groundFilterActive}>
                            Ground
                    </GroundButton>
                    <IceButton
                        onClick={this.filterIce}
                        selected={iceFilterActive}>
                            Ice
                    </IceButton>
                    <NormalButton
                        onClick={this.filterNormal}
                        selected={normalFilterActive}>
                            Normal
                    </NormalButton>
                    <PoisonButton
                        onClick={this.filterPoison}
                        selected={poisonFilterActive}>
                            Poison
                    </PoisonButton>
                    <PsychicButton
                        onClick={this.filterPsychic}
                        selected={psychicFilterActive}>
                            Psychic
                    </PsychicButton>
                    <RockButton
                        onClick={this.filterRock}
                        selected={rockFilterActive}>
                            Rock
                    </RockButton>
                    <WaterButton
                        onClick={this.filterWater}
                        selected={waterFilterActive}>
                            Water
                    </WaterButton>
                </Col>
            </Row>            
            <Table id='pokeTable'>
                <thead>
                    <tr>
                        <th className='sortableTh'>
                            <div className='sortableDiv' onClick={this.sortEntry}>
                                Pokedex
                                <SortArrows category='entry' currentSort={currentSort} />
                            </div>
                        </th>
                        <th>
                        </th>
                        <th className='sortableTh'>
                            <div className='sortableDiv' onClick={this.sortName}>
                                Name
                                <SortArrows category='name' currentSort={currentSort} />
                            </div>
                        </th>
                        <th className='typeTh'>Type</th>
                        <th>Stage</th>
                        <th className='sortableTh'>
                            <div className='sortableDiv' onClick={this.sortHp}>
                                HP
                                <SortArrows category='hp' currentSort={currentSort} />
                            </div>
                        </th>
                        <th className='sortableTh'>
                            <div className='sortableDiv' onClick={this.sortAttack}>
                                Atk
                                <SortArrows category='attack' currentSort={currentSort} />
                            </div>
                        </th>
                        <th className='sortableTh'>
                            <div className='sortableDiv' onClick={this.sortDefense}>
                                Def
                                <SortArrows category='defense' currentSort={currentSort} />
                            </div>
                        </th>
                        <th className='sortableTh'>
                            <div className='sortableDiv' onClick={this.sortSpeed}>
                                Speed
                                <SortArrows category='speed' currentSort={currentSort} />
                            </div>
                        </th>
                        <th className='sortableTh'>
                            <div className='sortableDiv' onClick={this.sortSpecial}>
                                Special
                                <SortArrows category='special' currentSort={currentSort} />
                            </div>
                        </th>
                        <th className='sortableTh'>
                            <div className='sortableDiv' onClick={this.sortTotal}>
                                Total
                                <SortArrows category='total' currentSort={currentSort} />
                            </div>
                        </th>
                        <th className='sortableTh'>
                            <div className='sortableDiv' onClick={this.sortAverage}>
                                Avg
                                <SortArrows category='avg' currentSort={currentSort} />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonStats.sort(tableSorter[currentSort].fn).map((pokemon, i) => {
                        return (
                            <tr key={i}>
                                <td className='pokeTd'>{pokemon.entry}</td>
                                <td className='pokeTd'>
                                    <img src={pokemon.image} alt={pokemon.name} />
                                </td>
                                <td className='pokeTd'>{pokemon.name}</td>
                                <td className='pokeTd'>{pokemon.type}</td>
                                <td className='pokeTd'>{pokemon.stage}</td>
                                <td className='hpTd'>{pokemon.hp}</td>
                                <td className='atkTd'>{pokemon.attack}</td>
                                <td className='defTd'>{pokemon.defense}</td>
                                <td className='speedTd'>{pokemon.speed}</td>
                                <td className='specialTd'>{pokemon.special}</td>
                                <td className='totalTd'>{statTotaler(pokemon)}</td>
                                <td className='avgTd'>{statAverager(pokemon)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            </React.Fragment>
        )
    }
}

export default PokeTable